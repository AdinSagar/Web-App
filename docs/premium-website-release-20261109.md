# FahamPesa public website refinement

## Release scope

Build on the previous public release dc358ceb. Preserve branded product links, Kenya business guides, property pages, report preview, Search & AI content, public pricing redirects and public privacy controls.

Redesigned homepage with a centered brand introduction, three interactive workflow previews, four audience paths, published product photographs and prices, seller sharing guidance, local support and clear Android app choices. Workflow examples use labelled sample data. Product cards use current published public catalog data, with no fabricated endorsements or reviews.

Shared navigation, spacing, typography and components align public pages. Seller and Shopper links appear on the homepage, main/mobile navigation, footer, seller/shop pages and shared product pages.

## Apps and search

- /apps: role chooser.
- /apps/seller: FahamPesa Business, the Seller app, com.fahampesa.seller.
- /apps/shopper: FahamPesa Shop, com.fahampesa.app.
- Unique page titles, descriptions, canonical URLs, social metadata, internal links and sitemap entries.
- Application and breadcrumb structured data without invented ratings or offers.
- App pages bypass private application providers and do not require login.
- Search query variants of the shop directory remain noindex, with a canonical directory URL.
- Existing private route noindex and public pricing redirects retained.

The Shop Play listing was independently retrieved on 9 November 2026 and displays Fahampesa Shop: Local Shopping, FahamPesa Limited, with Install available. Seller production was in review in the 9 November launch record. Its public listing was not retrievable during this check. The website therefore explicitly labels Seller approval as pending and offers a clearly labelled availability link. Change Seller status after Play approval is verified. This release does not publish an Android build.

## Validation

Production Next build, focused TypeScript check, 15 report/listing validation tests and production HTTP checks. HTTP coverage includes app link package IDs, canonicals, sitemap, JSON-LD, public routes, public pricing redirects and private index controls.

Browser review: desktop homepage, all three tour choices, four actual published images, 320/390px mobile layouts without horizontal document overflow, mobile menu and property tour. Final app pages reviewed after compilation.

## Boundaries

The catalog currently includes merchant-entered test-like names and descriptions. No seller data was altered. There is no new web checkout, invented seller verification, iPhone app, or AI model connection. Existing report examples calculate entered totals and prepare a brief. Actual private rental/payment workflows were outside this public design change and were deployed in earlier releases.

The repository retains legacy global build settings that skip broad lint/type validation. A dedicated public-page TypeScript check passed. This is not a claim that every private application feature was retested.
