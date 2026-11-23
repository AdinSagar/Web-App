import test from 'node:test';
import assert from 'node:assert/strict';
import {indexableItem,indexableSeller,catalogSearchUrls,sitemapXml,publicSellerLocation} from '../src/lib/catalog-indexing.ts';
const store={name:'Parklands Hardware',location:'Parklands, Nairobi',publicUrl:'https://fahampesa.com/parklands-hardware'};
const item={name:'Claw hammer 450g',description:'A steel claw hammer with a rubber grip, suitable for household repairs.',imageUrl:'https://catalog.example/api/v1/shop/public/stores/1/items/2/image',unitPriceMinor:75000,currency:'KES',publicUrl:'https://fahampesa.com/parklands-hardware/claw-hammer',inStock:true};
test('complete public listings qualify, including temporarily out of stock products',()=>{
 assert.equal(indexableItem(store,item),true);assert.equal(indexableItem(store,{...item,inStock:false}),true);
 assert.deepEqual(catalogSearchUrls({store,items:[item]}),[store.publicUrl,item.publicUrl]);
});
test('placeholder seller details and incomplete items stay out of search',()=>{
 for(const location of ['No','give correct location','pay after delivery',''])assert.equal(indexableSeller({...store,location}),false);
 for(const change of [{name:'test 2'},{description:''},{imageUrl:null},{unitPriceMinor:NaN},{currency:'<KES>'},{publicUrl:'https://example.com/product'},{publicUrl:'https://fahampesa.com/another-store/hammer'},{publicUrl:item.publicUrl+'?after=foo'}])assert.equal(indexableItem(store,{...item,...change}),false);
 assert.deepEqual(catalogSearchUrls({store,items:[{...item,description:''}]}),[store.publicUrl]);
});
test('storefronts remain eligible while incomplete product pages remain excluded',()=>{
 assert.equal(indexableItem(store,{...item,description:''}),false);
 assert.deepEqual(catalogSearchUrls({store,items:[{...item,description:''}]}),[store.publicUrl]);
 assert.deepEqual(catalogSearchUrls({store,items:[]}),[]);
 assert.deepEqual(catalogSearchUrls({store,items:[{...item,name:'test',description:''}]}),[]);
 assert.deepEqual(catalogSearchUrls({store,items:[{...item,imageUrl:null}]}),[]);
});
test('seller directions replace contact instructions without inventing a location',()=>{
 const instructions={...store,location:'Order then WhatsApp 0700000000'};
 assert.equal(publicSellerLocation(instructions),'');
 assert.equal(indexableSeller(instructions),false);
 const withDirections={...instructions,locationPin:{directions:'Juja Mungetho'}};
 assert.equal(publicSellerLocation(withDirections),'Juja Mungetho');
 assert.equal(indexableSeller(withDirections),true);
 for(const location of ['No','give correct location','pay after delivery','+254700000000'])assert.equal(publicSellerLocation({location}),'');
 assert.equal(publicSellerLocation({...store,locationPin:{directions:'give correct location'}}),store.location);
});
test('sitemap deduplicates and rejects offsite or malformed URLs',()=>{
 const xml=sitemapXml([item.publicUrl,item.publicUrl,'https://evil.example/redirect','https://fahampesa.com/<script>','https://fahampesa.com/store?x=1','https://fahampesa.com/store/item/extra']);
 assert.equal((xml.match(/<loc>/g)||[]).length,1);assert.ok(xml.includes(item.publicUrl));assert.ok(!xml.includes('script'));
});

