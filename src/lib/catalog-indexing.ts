import type {SharedCatalog,SharedItem} from './shared-catalog';

// Search eligibility only. This never unpublishes a seller or blocks shared links.
const placeholder=/^(?:test(?:ing)?(?:\s*\d+)?|demo(?:\s*\d+)?|sample|untitled|none|null|n\/?a|no|unknown|location|your location|give correct location|pay after delivery|asdf|xxx)$/i;
export function meaningfulText(value:unknown,min=3):value is string {
 return typeof value==='string'&&value.trim().length>=min&&value.trim().length<=2000&&!placeholder.test(value.trim());
}
export function publicListingUrl(value:unknown,segments:1|2):string|null {
 if(typeof value!=='string')return null;
 try {const url=new URL(value);return url.origin==='https://fahampesa.com'&&!url.username&&!url.password&&!url.search&&!url.hash&&new RegExp('^/[a-z0-9-]+'+(segments===2?'/[a-z0-9-]+':'')+'$').test(url.pathname)?url.href:null;}catch{return null;}
}
export function indexableSeller(store:Pick<SharedCatalog['store'],'name'|'location'|'publicUrl'>):boolean {
 return meaningfulText(store?.name)&&meaningfulText(store?.location)&&!!publicListingUrl(store?.publicUrl,1);
}
export function indexableItem(store:SharedCatalog['store'],item:SharedItem):boolean {
 if(!indexableSeller(store)||!meaningfulText(item?.name)||!meaningfulText(item?.description,30)||!publicListingUrl(item?.publicUrl,2))return false;
 // A short accurate description, a product image and a clear price make a useful landing page.
 if(!Number.isSafeInteger(item.unitPriceMinor)||item.unitPriceMinor<0||!/^[A-Z]{3}$/.test(item.currency)||!item.imageUrl)return false;
 try {const image=new URL(item.imageUrl);return image.protocol==='https:'&&!image.username&&!image.password&&new URL(item.publicUrl).pathname.startsWith(new URL(store.publicUrl).pathname+'/');}catch{return false;}
}
export function catalogSearchUrls(data:SharedCatalog):string[] {
 if(!indexableSeller(data.store)||!Array.isArray(data.items))return [];
 const items=data.items.filter(item=>indexableItem(data.store,item));
 return items.length?[data.store.publicUrl,...items.map(item=>item.publicUrl)]:[];
}
export function sitemapXml(urls:Iterable<string>):string {
 const escape=(text:string)=>text.replace(/[<>&"']/g,char=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[char]!));
 return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[...new Set(urls)].filter(url=>publicListingUrl(url,1)||publicListingUrl(url,2)).map(url=>'<url><loc>'+escape(url)+'</loc></url>').join('')+'</urlset>';
}
