import type { MetadataRoute } from "next"
import { industryLinks, industryHref } from "@/lib/industry-links"

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://fahampesa.com"

  return [
    { url: origin },
    { url: `${origin}/pos-system-kenya` },
    { url: `${origin}/inventory-management-software-kenya` },
    { url: `${origin}/pricingpage` },
    { url: `${origin}/about` },
    { url: `${origin}/contact-information` },
    { url: `${origin}/installation` },
    ...industryLinks.map(({ slug }) => ({ url: `${origin}${industryHref(slug)}` })),
  ]
}
