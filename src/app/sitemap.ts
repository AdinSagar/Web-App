import type { MetadataRoute } from "next"
import {platformPaths} from "@/lib/platform-content"
import {kenyaGuides} from "@/lib/kenya-guides"
import {growthPaths} from "@/lib/business-growth"
import { industryLinks, industryHref } from "@/lib/industry-links"

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://fahampesa.com"

  return [
    { url: origin },
    ...growthPaths.map(path=>({url:origin+path})),
    { url: `${origin}/pos-system-kenya` },
    { url: `${origin}/inventory-management-software-kenya` },
    ...platformPaths.map(path=>({url:origin+path})),
    ...kenyaGuides.map(guide=>({url:origin+"/business/guides/"+guide.slug})),
    { url: `${origin}/about` },
    { url: `${origin}/contact-information` },
    { url: `${origin}/privacy` },
    { url: `${origin}/account-deletion` },
    { url: `${origin}/installation` },
    ...industryLinks.map(({ slug }) => ({ url: `${origin}${industryHref(slug)}` })),
  ]
}

