import type {SharedCatalog,SharedItem} from './shared-catalog';

export function sellerEnquiry(phone:unknown,url:string,name:string):string|null {
  if(typeof phone!=='string')return null;
  let number=phone.trim().replace(/[ ()-]/g,'');
  if(/^0[17]\d{8}$/.test(number))number='254'+number.slice(1);
  if(!/^\+?[1-9]\d{7,14}$/.test(number))return null;
  let link:URL;try{link=new URL(url);}catch{return null;}
  if(link.protocol!=='https:'||link.hostname!=='fahampesa.com'||link.username||link.password)return null;
  const text=`Hello, I’m asking about ${name}. ${link.href}\nPlease confirm availability, the total price, and pickup or delivery options.`;
  return 'https://wa.me/'+number.replace(/^\+/,'')+'?text='+encodeURIComponent(text);
}

export function listingSchema(data:SharedCatalog,item?:SharedItem) {
  const url=item?.publicUrl||data.store.publicUrl;
  const seller={'@type':'Organization',name:data.store.name,url:data.store.publicUrl};
  const breadcrumb={'@type':'BreadcrumbList',itemListElement:[
    {'@type':'ListItem',position:1,name:'FahamPesa',item:'https://fahampesa.com/'},
    {'@type':'ListItem',position:2,name:data.store.name,item:data.store.publicUrl},
    ...(item?[{'@type':'ListItem',position:3,name:item.name,item:item.publicUrl}]:[]),
  ]};
  const page={'@type':item?'WebPage':'CollectionPage','@id':url+'#page',url,name:item?.name||data.store.name,breadcrumb:{'@id':url+'#breadcrumb'},
    ...(!item?{mainEntity:{'@type':'ItemList',itemListElement:data.items.map((product,index)=>({'@type':'ListItem',position:index+1,name:product.name,url:product.publicUrl}))}}:{})};
  const graph:Record<string,unknown>[]=[page,{...breadcrumb,'@id':url+'#breadcrumb'}];
  if(item){
    const type=item.type==='RETAIL_PRODUCT'?'Product':item.type==='RESTAURANT_MENU_ITEM'?'MenuItem':item.type==='HOTEL_ROOM'?'Accommodation':'Service';
    const entity:Record<string,unknown>={'@type':type,'@id':url+'#listing',url,name:item.name,...(item.description?{description:item.description}:{}),...(item.imageUrl?{image:[item.imageUrl]}:{})};
    if(type==='Product')entity.offers={'@type':'Offer',url,price:(item.unitPriceMinor/100).toFixed(2),priceCurrency:item.currency,seller,
      ...(data.store.acceptingOrders?{availability:item.inStock?'https://schema.org/InStock':'https://schema.org/OutOfStock'}:{})};
    if(type==='Service')entity.provider=seller;
    graph.push(entity);Object.assign(page,{mainEntity:{'@id':url+'#listing'}});
  }
  return {'@context':'https://schema.org','@graph':graph};
}
export const safeJsonLd=(value:unknown)=>JSON.stringify(value).replace(/</g,'\\u003c');
