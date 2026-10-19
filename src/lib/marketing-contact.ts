export const WHATSAPP_NUMBER = "+254 117 154 195"
export const WHATSAPP_URL = "https://wa.me/254117154195"
export const CALL_NUMBER = "0716 908 595"
export const CALL_URL = "tel:+254716908595"
export const SHOWROOM = "Diamond Plaza 1, 4th floor, Parklands, Nairobi, Kenya"

export function demoUrl(business = "my business") {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(`Hello Fahampesa, I would like a POS software demonstration for ${business}. Business type: __. Location: __. Intended start date: __.`)}`
}
