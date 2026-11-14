import test from 'node:test';
import assert from 'node:assert/strict';
import {showcaseItem,showcaseCatalog} from '../src/lib/published-showcase.ts';
import {indexableItem} from '../src/lib/catalog-indexing.ts';
const origin='https://catalog.example';
const valid={name:'Rice 2 kg',unitPriceMinor:35000,inStock:true,currency:'KES',imageUrl:origin+'/api/v1/shop/public/stores/store/items/rice/image',publicUrl:'https://fahampesa.com/shop-name/rice-2kg',type:'RETAIL'};
test('published listing exposes a local link and only display fields',()=>{const value=showcaseItem({...valid,privateCustomer:'hidden'},'Local shop',origin);assert.equal(value.href,'/shop-name/rice-2kg');assert.equal(value.priceMinor,35000);assert.equal(value.privateCustomer,undefined);});
test('unavailable or invalid prices are excluded',()=>{for(const changes of [{inStock:false},{unitPriceMinor:-1},{unitPriceMinor:0.2},{unitPriceMinor:NaN},{currency:'bad!'}, {name:''}])assert.equal(showcaseItem({...valid,...changes},'Store',origin),null);});
test('external, credentialed and non-product links are excluded',()=>{for(const publicUrl of ['https://evil.example/shop/item','https://user@fahampesa.com/shop/item','https://fahampesa.com/shop','https://fahampesa.com/shop/item?redirect=bad','javascript:alert(1)','https://fahampesa.com/shop/item#test'])assert.equal(showcaseItem({...valid,publicUrl},'Store',origin),null);});
test('images must use the public catalog image endpoint',()=>{for(const imageUrl of ['https://evil.example/image',origin+'/private/image','https://user@catalog.example/api/v1/shop/public/stores/a/image',origin+'/api/v1/shop/public/stores/a/private'])assert.equal(showcaseItem({...valid,imageUrl},'Store',origin),null);});
test('missing objects are excluded and food is labelled clearly',()=>{assert.equal(showcaseItem(null,'Store',origin),null);assert.equal(showcaseItem({...valid,type:'RESTAURANT'},'Store',origin).category,'Food & drinks');});
test('published products with empty descriptions remain browseable without relaxing search eligibility',()=>{
 const store={name:'Local shop',location:'No',publicUrl:'https://fahampesa.com/shop-name',acceptingOrders:true,isPublished:true,isOnline:true};
 const item={...valid,description:'',availableOnline:true};
 assert.equal(indexableItem(store,item),false);
 assert.equal(showcaseCatalog({store,items:[item]},origin).length,1);
});
test('browse feed excludes unpublished stores, unavailable stock and mismatched store products',()=>{
 const store={name:'Local shop',publicUrl:'https://fahampesa.com/shop-name',acceptingOrders:true};
 for(const change of [{acceptingOrders:false},{isPublished:false},{isOnline:false}])assert.deepEqual(showcaseCatalog({store:{...store,...change},items:[valid]},origin),[]);
 for(const change of [{availableOnline:false},{inStock:false},{publicUrl:'https://fahampesa.com/other-store/rice'}])assert.deepEqual(showcaseCatalog({store,items:[{...valid,...change}]},origin),[]);
});
