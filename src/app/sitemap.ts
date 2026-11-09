import type { MetadataRoute } from "next"
import {growthPaths} from "@/lib/business-growth"
import { industryLinks, industryHref } from "@/lib/industry-links"

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://fahampesa.com"

  return [
    { url: origin },
    ...growthPaths.map(path=>({url:origin+path})),
    { url: `${origin}/pos-system-kenya` },
    { url: `${origin}/inventory-management-software-kenya` },
    { url: `${origin}/pricingpage` },
    { url: `${origin}/about` },
    { url: `${origin}/contact-information` },
    { url: `${origin}/privacy` },
    { url: `${origin}/account-deletion` },
    { url: `${origin}/installation` },
    ...industryLinks.map(({ slug }) => ({ url: `${origin}${industryHref(slug)}` })),
  ]
}

