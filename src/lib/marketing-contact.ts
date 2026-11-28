export const WHATSAPP_NUMBER = "+254 117 154 195"
export const WHATSAPP_URL = "https://wa.me/254117154195"
export const CALL_NUMBER = "0716 908 595"
export const CALL_URL = "tel:+254716908595"
export const SHOWROOM = "Diamond Plaza 1, 4th floor, Parklands, Nairobi, Kenya"
export const SOFTWARE_MONTHLY_PRICE_KES = 2000
export const SOFTWARE_PRICE_LABEL = "Explore the software and confirm your devices with our team."

export function demoUrl(business = "my business") {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(`Hello Fahampesa, I would like a FahamPesa demonstration for ${business}. Business type: __. Location: __. Intended start date: __.`)}`
}

export const BUSINESS_EMAIL = "info@fahampesa.com"
export const SHOWROOM_MAP_URL = "https://www.google.com/maps/search/?api=1&query=Fahampesa%20Diamond%20Plaza%201%20Parklands%20Nairobi"
export const SHOWROOM_MAP_EMBED_URL = "https://www.google.com/maps?q=Fahampesa%20Diamond%20Plaza%201%20Parklands%20Nairobi&output=embed"
export const SOCIAL_PROFILES = [
  {name:"Instagram",url:"https://www.instagram.com/fahampesa"},
  {name:"Facebook",url:"https://www.facebook.com/fahampesa"},
  {name:"TikTok",url:"https://www.tiktok.com/@fahampesa"},
] as const
export const SHOWROOM_HOURS = [
  {label:"Monday to Friday",hours:"8:00 AM to 5:00 PM",days:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"08:00",closes:"17:00"},
  {label:"Saturday",hours:"9:00 AM to 5:00 PM",days:["Saturday"],opens:"09:00",closes:"17:00"},
  {label:"Sunday",hours:"Closed",days:["Sunday"],opens:"00:00",closes:"00:00"},
] as const
