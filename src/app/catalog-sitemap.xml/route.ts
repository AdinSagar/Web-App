import {publishedCatalogSitemap} from '@/lib/catalog-sitemap';
export const dynamic='force-dynamic';
export async function GET(){
 try{return new Response(await publishedCatalogSitemap(),{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'public, max-age=300, s-maxage=900'}});}
 catch{return new Response('Catalog sitemap temporarily unavailable',{status:503,headers:{'Cache-Control':'no-store','Retry-After':'300','Content-Type':'text/plain; charset=utf-8'}});}
}
