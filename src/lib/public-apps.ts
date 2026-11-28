export const publicApps = {
 seller: {
  name:'FahamPesa Business', audience:'FOR SELLERS & BUSINESS OWNERS', label:'Seller app', path:'/apps/seller',
  title:'Sell Online in Kenya | FahamPesa Business Seller App',
  description:'Sell online for free in Kenya with FahamPesa Business. Create your store, list products or services, share your store link and manage supported customer orders.',
  heading:'Sell online in Kenya with your own store.',
  intro:'Create your free online store with FahamPesa Business, the Seller app. Add products or services, share your store link and manage supported customer orders from your Android phone.',
  playUrl:'https://play.google.com/store/apps/details?id=com.fahampesa.seller',
  downloadLabel:'Download FahamPesa Business for free',
  status:'Free to download on Google Play. Published by FahamPesa Limited.',
  cardStatus:'Android · Free on Google Play',
  free:true,
  available:true,
  features:[['Publish your storefront','Add your business details, clear photos, prices and availability. Share your public store link on WhatsApp and social.'],['Manage customer activity','Review supported orders, booking requests and customer conversations from your seller workspace.'],['Choose the right business mode','Retail, restaurants, hotels, salons and services have different workflows. Confirm your setup with the FahamPesa team.']],
  steps:['Open the Fahampesa Business listing on Google Play.','Install the Seller app, create your owner account and complete your business details.','Add your listings, confirm pickup or delivery arrangements and share your store link.'],
 },
 shopper: {
  name:'FahamPesa Shop', audience:'FOR BUYERS & SHOPPERS', label:'Shopper app', path:'/apps/shopper',
  title:'Online Shopping in Kenya | FahamPesa Shop App',
  description:'Explore online shopping in Kenya with FahamPesa Shop for Android. Browse local products, food and services, then follow the seller’s supported order flow.',
  heading:'Online shopping in Kenya with local businesses.',
  intro:'Browse products, food and services from participating businesses in Nairobi and other supported areas of Kenya. Review the seller, price and availability, then continue with supported orders or booking requests.',
  playUrl:'https://play.google.com/store/apps/details?id=com.fahampesa.app',
  downloadLabel:'Download FahamPesa Shop for free',
  status:'Free to download on Google Play. Published by FahamPesa Limited.',
  cardStatus:'Android · Free on Google Play',
  free:true,
  available:true,
  features:[['Browse products and food','View photos, prices and restaurant menus. Confirm current availability with the business before ordering.'],['Explore stays and services','Send supported hotel, salon and service requests. A request becomes a booking when the business confirms it.'],['Choose seller supported fulfilment','Use pickup or delivery where offered. Cash at pickup or on delivery depends on the seller and order type.']],
  steps:['Browse published businesses on this website, or open the Shopper app link below.','Install the latest FahamPesa Shop release from Google Play. Use the Shopper link, rather than the separate Seller app.','Choose a listing, review the seller details and follow the supported order or booking flow.'],
 },
} as const;
export type PublicAppRole=keyof typeof publicApps;

