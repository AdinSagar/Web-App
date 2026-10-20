import { CALL_URL, SHOWROOM, WHATSAPP_URL } from "@/lib/marketing-contact"

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fahampesa.com/#organization",
      name: "Fahampesa",
      legalName: "Fahampesa Limited",
      url: "https://fahampesa.com/",
      logo: "https://fahampesa.com/assets/brand/fahampesa-logo-512.png",
      description: "POS and business management software for businesses in Kenya.",
      telephone: CALL_URL.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Diamond Plaza 1, 4th floor, Parklands",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: { "@type": "Country", name: "Kenya" },
      contactPoint: { "@type": "ContactPoint", contactType: "sales", url: WHATSAPP_URL },
      location: { "@type": "Place", name: SHOWROOM },
    },
    {
      "@type": "WebSite",
      "@id": "https://fahampesa.com/#website",
      url: "https://fahampesa.com/",
      name: "Fahampesa",
      inLanguage: "en-KE",
      publisher: { "@id": "https://fahampesa.com/#organization" },
    },
  ],
}

export default function PublicBusinessSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} />
}
