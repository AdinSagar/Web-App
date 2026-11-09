import test from 'node:test';
import assert from 'node:assert/strict';
import {indexableItem,indexableSeller,catalogSearchUrls,sitemapXml} from '../src/lib/catalog-indexing.ts';
const store={name:'Parklands Hardware',location:'Parklands, Nairobi',publicUrl:'https://fahampesa.com/parklands-hardware'};
const item={name:'Claw hammer 450g',description:'A steel claw hammer with a rubber grip, suitable for household repairs.',imageUrl:'https://catalog.example/api/v1/shop/public/stores/1/items/2/image',unitPriceMinor:75000,currency:'KES',publicUrl:'https://fahampesa.com/parklands-hardware/claw-hammer',inStock:true};
test('complete public listings qualify, including temporarily out of stock products',()=>{
 assert.equal(indexableItem(store,item),true);assert.equal(indexableItem(store,{...item,inStock:false}),true);
 assert.deepEqual(catalogSearchUrls({store,items:[item]}),[store.publicUrl,item.publicUrl]);
});
test('placeholder seller details and incomplete items stay out of search',()=>{
 for(const location of ['No','give correct location','pay after delivery',''])assert.equal(indexableSeller({...store,location}),false);
 for(const change of [{name:'test 2'},{description:''},{imageUrl:null},{unitPriceMinor:NaN},{currency:'<KES>'},{publicUrl:'https://example.com/product'},{publicUrl:'https://fahampesa.com/another-store/hammer'},{publicUrl:item.publicUrl+'?after=foo'}])assert.equal(indexableItem(store,{...item,...change}),false);
 assert.deepEqual(catalogSearchUrls({store,items:[{...item,description:''}]}),[]);
});
test('sitemap deduplicates and rejects offsite or malformed URLs',()=>{
 const xml=sitemapXml([item.publicUrl,item.publicUrl,'https://evil.example/redirect','https://fahampesa.com/<script>','https://fahampesa.com/store?x=1','https://fahampesa.com/store/item/extra']);
 assert.equal((xml.match(/<loc>/g)||[]).length,1);assert.ok(xml.includes(item.publicUrl));assert.ok(!xml.includes('script'));
});
