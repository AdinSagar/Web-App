import type {SharedCatalog,SharedItem} from './shared-catalog';

// Search eligibility only. This never unpublishes a seller or blocks shared links.
const placeholder=/^(?:test(?:ing)?(?:\s*\d+)?|demo(?:\s*\d+)?|sample|untitled|none|null|n\/?a|no|unknown|location|your location|give correct location|pay after delivery|asdf|xxx)$/i;
export function meaningfulText(value:unknown,min=3):value is string {
 return typeof value==='string'&&value.trim().length>=min&&value.trim().length<=2000&&!placeholder.test(value.trim());
}
type SellerLocation={location?:unknown;locationPin?:{directions?:unknown}|null};
const locationInstruction=/^(?:order(?:\s+then)?\s+(?:on\s+)?whats?app\b|(?:pay|cash)\s+(?:after|on)\s+delivery\b|(?:give|enter|add|set|update|confirm|provide)\s+(?:the\s+|your\s+|correct\s+)*(?:location|address)\b)/i;
function isLocation(value:unknown):value is string {
 return meaningfulText(value)&&!locationInstruction.test(value.trim())&&!/^\+?[\d\s()-]{7,}$/.test(value.trim())&&!/^https?:\/\//i.test(value.trim());
}
/** Use seller supplied addresses and directions without inventing a location. */
export function publicSellerLocation(store:SellerLocation):string {
 if(isLocation(store?.location))return store.location.trim();
 const directions=store?.locationPin?.directions;
 return isLocation(directions)?directions.trim():'';
}
export function publicListingUrl(value:unknown,segments:1|2):string|null {
 if(typeof value!=='string')return null;
 try {const url=new URL(value);return url.origin==='https://fahampesa.com'&&!url.username&&!url.password&&!url.search&&!url.hash&&new RegExp('^/[a-z0-9-]+'+(segments===2?'/[a-z0-9-]+':'')+'$').test(url.pathname)?url.href:null;}catch{return null;}
}
export function indexableSeller(store:Pick<SharedCatalog['store'],'name'|'location'|'publicUrl'|'locationPin'>):boolean {
 return meaningfulText(store?.name)&&!!publicSellerLocation(store)&&!!publicListingUrl(store?.publicUrl,1);
}
function usefulCatalogItem(store:SharedCatalog['store'],item:SharedItem):boolean {
 if(!indexableSeller(store)||!meaningfulText(item?.name)||!publicListingUrl(item?.publicUrl,2))return false;
 if(!Number.isSafeInteger(item.unitPriceMinor)||item.unitPriceMinor<0||!/^[A-Z]{3}$/.test(item.currency)||!item.imageUrl)return false;
 try {const image=new URL(item.imageUrl);return image.protocol==='https:'&&!image.username&&!image.password&&new URL(item.publicUrl).pathname.startsWith(new URL(store.publicUrl).pathname+'/');}catch{return false;}
}
export function indexableItem(store:SharedCatalog['store'],item:SharedItem):boolean {
 return usefulCatalogItem(store,item)&&meaningfulText(item.description,30);
}
export function catalogSearchUrls(data:SharedCatalog):string[] {
 if(!indexableSeller(data.store)||!Array.isArray(data.items)||!data.items.some(item=>usefulCatalogItem(data.store,item)))return [];
 // A useful storefront has its own identity, location and catalog. Individual
 // product pages still require a complete seller supplied description.
 return [data.store.publicUrl,...data.items.filter(item=>indexableItem(data.store,item)).map(item=>item.publicUrl)];
}
export function sitemapXml(urls:Iterable<string>):string {
 const escape=(text:string)=>text.replace(/[<>&"']/g,char=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[char]!));
 return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[...new Set(urls)].filter(url=>publicListingUrl(url,1)||publicListingUrl(url,2)).map(url=>'<url><loc>'+escape(url)+'</loc></url>').join('')+'</urlset>';
}

