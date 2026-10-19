"use client"

import { usePathname } from "next/navigation"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/marketing-contact"

const publicPaths = new Set(["/", "/pos-system-kenya", "/contact-information", "/about", "/installation"])

export default function WhatsAppContact() {
  const path = usePathname()
  if (!path || (!publicPaths.has(path) && !path.startsWith("/industries/"))) return null
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp Fahampesa on ${WHATSAPP_NUMBER}`} className="fixed bottom-[max(5rem,env(safe-area-inset-bottom))] sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-2 rounded-full border border-white/30 bg-[#075E54] px-4 py-3 font-dm-sans text-sm font-semibold text-white shadow-[0_6px_24px_rgba(0,40,30,0.2)] transition-colors hover:bg-[#064D44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#075E54] sm:right-6">
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.47 0 .11 5.35.1 11.94c0 2.1.55 4.16 1.6 5.98L0 24l6.26-1.64a11.9 11.9 0 0 0 5.78 1.47h.01C18.63 23.83 24 18.48 24 11.89c0-3.19-1.24-6.18-3.48-8.41ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.24-.38a9.88 9.88 0 0 1-1.51-5.24c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.91 7.02c0 5.47-4.46 9.92-9.98 9.85Zm5.45-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>
      <span><span className="block text-[10px] font-medium leading-3 text-white/85">WhatsApp</span>{WHATSAPP_NUMBER}</span>
    </a>
  )
}
