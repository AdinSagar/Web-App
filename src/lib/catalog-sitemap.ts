import 'server-only';
import {unstable_cache} from 'next/cache';
import {catalogOrigin,type SharedCatalog} from './shared-catalog';
import {catalogSearchUrls,publicListingUrl,sitemapXml} from './catalog-indexing';

const cursorPattern=/^[A-Za-z0-9_.:-]{1,200}$/;
// Bounded discovery for launch. Sitemap inclusion supplements crawlable directory links.
// Cache only successful results. Upstream failures return 503 rather than an empty sitemap.
const cachedCatalogSitemap=unstable_cache(async(origin:string)=>{
 const signal=AbortSignal.timeout(20000);
 const json=async(path:string)=>{const res=await fetch(origin+path,{cache:'no-store',redirect:'error',signal});if(!res.ok)throw Error('Catalog unavailable');return res.json();};
 const stores=new Set<string>();const directoryCursors=new Set<string>();let after='';
 for(let page=0;page<5&&stores.size<100;page++){
  const directory=await json('/api/v1/shop/public/stores?'+new URLSearchParams({after}));
  if(!Array.isArray(directory.items)||directory.items.length>100)throw Error('Invalid catalog directory');
  for(const store of directory.items){const url=publicListingUrl(store?.publicUrl,1);if(url&&stores.size<100)stores.add(new URL(url).pathname.slice(1));}
  if(!directory.nextAfter)break;
  if(typeof directory.nextAfter!=='string'||!cursorPattern.test(directory.nextAfter)||directoryCursors.has(directory.nextAfter))throw Error('Invalid directory cursor');
  after=directory.nextAfter;directoryCursors.add(after);
 }
 const urls=new Set<string>(['https://fahampesa.com/business/shop']);const slugs=[...stores];
 for(let start=0;start<slugs.length;start+=5){
  await Promise.all(slugs.slice(start,start+5).map(async store=>{
   let cursor='';const seen=new Set<string>();
   for(let page=0;page<5;page++){
    const data=await json('/api/v1/shop/public/share?'+new URLSearchParams({store,after:cursor})) as SharedCatalog;
    if(!data.store||!Array.isArray(data.items)||data.items.length>100)throw Error('Invalid public catalog');
    // Match the same trusted public image source used by shared listing pages.
    data.items=data.items.map(item=>{if(!item?.imageUrl)return item;try{const image=new URL(item.imageUrl);return image.origin===origin&&image.pathname.startsWith('/api/v1/shop/public/')?item:{...item,imageUrl:null};}catch{return {...item,imageUrl:null};}});
    for(const url of catalogSearchUrls(data))urls.add(url);
    if(!data.nextAfter)break;
    if(!cursorPattern.test(data.nextAfter)||seen.has(data.nextAfter))throw Error('Invalid listing cursor');
    cursor=data.nextAfter;seen.add(cursor);
   }
  }));
 }
 return sitemapXml(urls);
},['published-catalog-sitemap-v2'],{revalidate:900});

// Validate configuration on every request, including cache hits. The origin also scopes the cache key.
export const publishedCatalogSitemap=()=>cachedCatalogSitemap(catalogOrigin());
