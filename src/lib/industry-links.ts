export const industryLinks = [
  { slug: "retail-pos-kenya", name: "Retail shops" },
  { slug: "supermarket-pos-kenya", name: "Supermarkets" },
  { slug: "wholesale-pos-kenya", name: "Wholesale" },
  { slug: "restaurant-pos-kenya", name: "Restaurants & cafés" },
  { slug: "hotel-management-software-kenya", name: "Hotels" },
  { slug: "bar-pos-kenya", name: "Bars" },
  { slug: "salon-pos-kenya", name: "Salons & spas" },
  { slug: "service-business-software-kenya", name: "Service businesses" },
] as const
export const industryHref = (slug: string) => `/industries/${slug}`
