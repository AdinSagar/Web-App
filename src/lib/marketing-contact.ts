export const WHATSAPP_NUMBER = "+254 117 154 195"
export const WHATSAPP_URL = "https://wa.me/254117154195"
export const CALL_NUMBER = "0716 908 595"
export const CALL_URL = "tel:+254716908595"
export const SHOWROOM = "Diamond Plaza 1, 4th floor, Parklands, Nairobi, Kenya"
export const SOFTWARE_MONTHLY_PRICE_KES = 2000
export const SOFTWARE_PRICE_LABEL = "KSh 2,000/month for software only. Hardware sold separately."

export function demoUrl(business = "my business") {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(`Hello Fahampesa, I am interested in the KSh 2,000/month software subscription and would like a demonstration for ${business}. Business type: __. Location: __. Intended start date: __.`)}`
}
