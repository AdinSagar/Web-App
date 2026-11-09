export const publicApps = {
 seller: {
  name:'FahamPesa Business', audience:'FOR SELLERS & BUSINESS OWNERS', label:'Seller app', path:'/apps/seller',
  title:'FahamPesa Seller App | Sell Online in Kenya',
  description:'Get the FahamPesa Business seller app for Android. Create your online storefront, publish products and manage supported orders and customer conversations in Kenya.',
  heading:'Your business. Ready for customers.',
  intro:'FahamPesa Business is the Seller app. Publish your store, add products or services and manage customer activity from your Android phone.',
  playUrl:'https://play.google.com/store/apps/details?id=com.fahampesa.seller',
  downloadLabel:'Check Seller app on Google Play',
  status:'Google Play availability is pending approval. The store listing uses the name Fahampesa Business.',
  available:false,
  features:[['Publish your storefront','Add your business details, clear photos, prices and availability. Share your public store link on WhatsApp and social.'],['Manage customer activity','Review supported orders, booking requests and customer conversations from your seller workspace.'],['Choose the right business mode','Retail, restaurants, hotels, salons and services have different workflows. Confirm your setup with the FahamPesa team.']],
  steps:['Open the Seller app listing on Google Play. If it is not available yet, contact our team for setup help.','Install Fahampesa Business when available, create your owner account and complete your business details.','Add your listings, confirm pickup or delivery arrangements and share your store link.'],
 },
 shopper: {
  name:'FahamPesa Shop', audience:'FOR BUYERS & SHOPPERS', label:'Shopper app', path:'/apps/shopper',
  title:'FahamPesa Shop App | Local Shopping in Kenya',
  description:'Download FahamPesa Shop for Android. Explore local products, restaurant menus, stays, salons and services in Kenya. Browse published listings before installing.',
  heading:'Local businesses. More ways to shop.',
  intro:'FahamPesa Shop is the app for buyers. Explore seller listings, view product details and continue with supported orders or booking requests.',
  playUrl:'https://play.google.com/store/apps/details?id=com.fahampesa.app',
  downloadLabel:'Download Shopper app for Android',
  status:'Available on Google Play as Fahampesa Shop: Local Shopping, published by FahamPesa Limited.',
  available:true,
  features:[['Browse products and food','View photos, prices and restaurant menus. Confirm current availability with the business before ordering.'],['Explore stays and services','Send supported hotel, salon and service requests. A request becomes a booking when the business confirms it.'],['Choose seller supported fulfilment','Use pickup or delivery where offered. Cash at pickup or on delivery depends on the seller and order type.']],
  steps:['Browse published businesses on this website, or open the Shopper app link below.','Install the latest FahamPesa Shop release from Google Play. Use the Shopper link, rather than the separate Seller app.','Choose a listing, review the seller details and follow the supported order or booking flow.'],
 },
} as const;
export type PublicAppRole=keyof typeof publicApps;
