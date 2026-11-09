import { BUSINESS_EMAIL, CALL_URL, WHATSAPP_URL, SHOWROOM_HOURS, SHOWROOM_MAP_URL, SOCIAL_PROFILES } from "@/lib/marketing-contact"

import {PUBLIC_BRAND} from "@/lib/public-brand"

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fahampesa.com/#organization",
      name: PUBLIC_BRAND.name,
      legalName: "Fahampesa Limited",
      url: "https://fahampesa.com/",
      logo: PUBLIC_BRAND.origin + PUBLIC_BRAND.logo,
      description: "Business management, property management and online selling tools for Kenyan businesses, with public store and product discovery for shoppers.",
      telephone: CALL_URL.replace("tel:", ""),
      email: BUSINESS_EMAIL,
      sameAs: SOCIAL_PROFILES.map(profile=>profile.url),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Diamond Plaza 1, 4th floor, Parklands",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: { "@type": "Country", name: "Kenya" },
      contactPoint: [
        { "@type": "ContactPoint", contactType: "sales", telephone: CALL_URL.replace("tel:", ""), email: BUSINESS_EMAIL, areaServed: "KE", availableLanguage: ["English", "Swahili"] },
        { "@type": "ContactPoint", contactType: "customer service", url: WHATSAPP_URL, areaServed: "KE", availableLanguage: ["English", "Swahili"] },
      ],
      location: { "@id": "https://fahampesa.com/#nairobi-showroom" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "FahamPesa software",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business and inventory software", url: "https://fahampesa.com/pos-system-kenya" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property management, rent collection and tenant software", url: "https://fahampesa.com/business/property-management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online store and seller software", url: "https://fahampesa.com/business/sell-online" } },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://fahampesa.com/#nairobi-showroom",
      name: PUBLIC_BRAND.name,
      description: "FahamPesa software demonstrations and compatible business hardware in Parklands, Nairobi.",
      url: "https://fahampesa.com/contact-information",
      telephone: CALL_URL.replace("tel:", ""),
      email: BUSINESS_EMAIL,
      parentOrganization: { "@id": "https://fahampesa.com/#organization" },
      address: { "@type": "PostalAddress", streetAddress: "Diamond Plaza 1, 4th floor, Parklands", addressLocality: "Nairobi", addressCountry: "KE" },
      hasMap: SHOWROOM_MAP_URL,
      openingHoursSpecification: SHOWROOM_HOURS.filter(hours=>hours.opens!==hours.closes).map(hours=>({"@type":"OpeningHoursSpecification",dayOfWeek:hours.days.map(day=>'https://schema.org/'+day),opens:hours.opens,closes:hours.closes})),
      sameAs: SOCIAL_PROFILES.map(profile=>profile.url),
    },
    {
      "@type": "WebSite",
      "@id": "https://fahampesa.com/#website",
      url: "https://fahampesa.com/",
      name: PUBLIC_BRAND.name,
      alternateName: PUBLIC_BRAND.alternateName,
      inLanguage: "en-KE",
      publisher: { "@id": "https://fahampesa.com/#organization" },
    },
  ],
}

export default function PublicBusinessSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} />
}
