# FahamPesa website release and Kenya growth plan

Prepared 9 November 2026. Scope: the public website in AdinSagar/Web-App. This release builds on the branded product links and previously deployed growth pages. Existing property payment fixes belong to the separate business application and API releases.

## Positioning and immediate changes

FahamPesa serves business owners, property managers, online sellers and shoppers. POS remains a product capability, rather than the identity of the entire platform.

The previous homepage concentrated on POS. The old pricing page advertised dollar plans, outdated features and buttons without a useful next step. Public pricing and subscription promotions are removed. `/pricingpage`, `/pricing` and `/subscription` lead to `/business/get-started`. Private billing records and existing account entitlements have not been changed. This release does not announce universal free access or cancel customer agreements.

The homepage now uses one orange and navy design system, a locally hosted Inter font, shared navigation, a labelled interactive product illustration and four clear audience paths. Important content renders on the server. Public entry pages avoid the business authentication and marketing provider bundle. Existing industry and inventory pages retain their useful content and share the new navigation.

The new report preview calculates figures locally and prepares a copyable AI prompt. It does not call an AI model or read private account reports. No invented customer counts, ratings, case-study results or claims of 20 years of company history appear.

## 1. Website structure

| Navigation | Destination | Visitor task |
| --- | --- | --- |
| Home | `/` | Choose the right audience path |
| Solutions: business tools | `/pos-system-kenya` | Review sales and business workflows |
| Solutions: property management | `/business/property-management` | Understand rentals, part payments, deposits and tenant records |
| Solutions: sell online | `/business/sellers` | Prepare and publish a seller storefront |
| Solutions: FahamPesa Shop | `/business/shop` | Search published businesses by name and area |
| Business Growth | `/business` | Learn about visibility, listing quality and responsible AI |
| Search & AI | `/business/search-and-ai` | Prepare useful content with a factual prompt builder |
| Getting Started | `/business/get-started` | Choose a workflow and prepare for setup |
| Practical guides | `/business/guides` | Read stock, rent, WhatsApp and report guides |
| Report preview | `/business/reports` | Enter four totals, review the arithmetic and prepare an AI brief |
| Trust and support | `/trust` | Understand seller responsibilities and contact options |
| Contact | `/contact-information` | Arrange support or a Nairobi demonstration |

Published store and product routes remain readable FahamPesa links. The directory uses the existing public catalog API. This is a discovery and handoff website, not a new web checkout.

## 2. Homepage message

Headline: Your business. Your properties. Your next customer.

Supporting message: Run your business, manage rental properties and bring your store online. Give shoppers a clearer way to find you, all through FahamPesa.

Primary action: Find your starting point. Secondary action: Explore local businesses.

Sequence: audience paths, property payment example, business tools, seller-to-shopper journey, Search & AI resources, local support, practical answers and account setup.

Use real product examples to demonstrate expertise. The illustrated rent example shows KSh 15,000 due, KSh 10,000 paid and KSh 5,000 remaining. Deposit balances stay separate. Replace illustrations with permission-cleared product recordings as they become available.

## 3. Search, content and AI pages

Keep the growth section attached to FahamPesa's products. Do not advertise an unrelated consultancy or an autonomous AI accountant.

Content pillars: listing quality, local search, WhatsApp sharing, short product demonstrations and report interpretation. The workflow is: establish verified facts, prepare a draft, review against the source, publish, measure enquiries and improve the page.

Tools: Search Console, PageSpeed Insights, an eligible Google Business Profile, native social analytics and the on-page prompt/report tools. The current report tool processes no private data on a server.

Later developer work for connected AI reports: authenticated read-only report endpoint, account/branch authorization, deterministic calculations, period and currency labels, explicit consent for any external model, no customer identifiers in prompts, rate limits, cost limits and output checks against source figures. Begin with owner-requested weekly summaries. Never let narrative output post transactions or change balances.

Case-study framework for content staff: customer permission, business mode and location, baseline period, exact problem, adopted workflow, equal comparison period, measured outcome, limitations and an approved quotation. Publish only documented results. Start with one retailer and one property manager.

## 4. Kenya keyword and content plan

These are intent targets, not measured search-volume claims. Confirm actual queries in Search Console after launch.

| Intent | Target phrases | Destination |
| --- | --- | --- |
| Business tools | POS system Kenya, stock management software Kenya, inventory software Nairobi | Existing POS and inventory pages |
| Rentals | property management software Kenya, rent collection records Kenya, tenant payment history, rent deposit balance | Property page and rent-record guide |
| Selling | sell online Kenya, online store for small business Kenya, share products on WhatsApp | Seller page and sharing guide |
| Shopping | local shops Nairobi, published stores near Parklands, seller name plus location | Real store pages and directory |
| Reports | weekly sales report Kenya, sales versus cash collected, gross profit calculation | Reports page and weekly-report guide |

Use each page's main intent in its title, heading and introduction. Add relevant internal links and examples. Avoid near-identical pages for every town. Create a location page only when real sellers, support coverage and useful local information support it. Nairobi first, then evidence-backed pages for Eastleigh, Mombasa or Garissa. Review Kiswahili content with a fluent editor before adding translated routes and hreflang.

Google's AI search features use the same foundational search practices. No special AI schema, invented AI authority score or guaranteed placement is appropriate. Keep public facts consistent and provide accessible textual answers.

## 5. Technical priorities

P0, developer: ship the tested public build, verify domain points to the public service, check redirects, canonical URLs, sitemap and private-page index controls. Confirm representative published store and product links. Check phone and WhatsApp links without sending test messages. Keep payment processing and payment recording descriptions distinct.

Implemented: server-rendered homepage, shared navigation, local font, bounded catalog requests, filtered-page noindex, canonical metadata, sitemap entries, article metadata, old pricing redirects and no fabricated ratings. Public monetary offer schema was removed with the pricing page.

P1, developer: measure production on a lower-powered Android phone and mobile data. Target LCP at or below 2.5 seconds, INP at or below 200 milliseconds and CLS at or below 0.1 at the 75th percentile. These are targets, not measured results. Check public pages with PageSpeed Insights and monitor Search Console once field data exists. Keep images sized, avoid autoplay video and reserve space for media.

P1, owner/content: verify Search Console access, submit sitemap and inspect the homepage, property page, seller page and a real product page. Review titles and real search snippets after recrawling. Search indexing and rankings are not guaranteed.

P2, developer: add a small, consent-aware funnel measurement layer for solution choice, listing views, support clicks and account-start handoff. Do not send tenant, customer, payment or report data as event properties. Public landing pages currently omit the older heavy provider bundle, so previous automatic page-level marketing events are not assumed to fire there. Privacy choices remain available on the privacy page.

## 6. Trust, payment and logistics priorities

P0: visible business contact, showroom location, clear seller identity information, current listing details, support links and clear handoff expectations. A published listing is not a verified-seller badge.

P0: retain cash at pickup/cash on delivery only in supported app workflows. Explain who receives payment, order confirmation and cancellation rules. Recording M-Pesa as a method is different from verifying a transaction. Do not advertise automatic settlement, escrow or protection until those functions exist and are tested.

P1: one named delivery zone per pilot seller, pickup instructions, seller acceptance, delivery charges shown before commitment and a clear missed-delivery/refund process. Start with Nairobi coverage the seller supports. Avoid nationwide delivery promises.

Food priority: confirm applicable premises, hygiene and food-handler requirements with the county public-health authority. The Ministry of Health publishes a food hygiene licensing checklist. Obtain responsible-seller details, ingredients, allergen information, relevant dates and handling instructions. Keep chilled/frozen goods outside the pilot until appropriate storage and transport controls are proven. Have an escalation route for safety complaints and affected listings. Listing publication does not certify food safety.

## 7. Organic use before app download

Keep guides, product links and published businesses available without login. Use the browser to establish relevance and trust. Offer the app when a supported order or booking requires it. Keep web business access available through the existing app domain and show optional installation only when useful.

Every seller shares one actual store/product link in their WhatsApp Business profile and status. Use labelled links for channels when measurement is ready. Publish one demonstration as a short TikTok, a YouTube Short and a page with a transcript. Link each recording to the matching workflow, not always the homepage. Start with recording a part-rent payment, counting stock and sharing a product.

Use real showroom photos and consistent contact details on an eligible business listing. Request honest reviews only from real users. Avoid bought reviews, duplicate location listings and mass-generated local pages.

## 8. First 30 days

| Period | Priority and owner | Evidence of completion |
| --- | --- | --- |
| Days 1–3 | Developer: deploy and verify homepage, redirects, metadata and catalog links. Owner: verify support details. | Correct public commit and key routes checked |
| Days 4–7 | Owner/content: Search Console setup, sitemap submission, showroom photos and three product recordings. | Index inspection results and published recordings |
| Days 8–14 | Content/support: onboard five permission-based pilot sellers and two property managers. Run the actual workflows. | Working listing links, setup issues and support log |
| Days 15–21 | Content: publish one documented case study and expand the strongest guide using real questions. Developer: fix measured speed and funnel issues. | Source-backed case study and before/after measurements |
| Days 22–30 | Owner/developer: review search impressions, enquiries, account starts, active listings and failed handoffs. | Decide what to improve using actual activity |

Pilot numbers above are suggested operating targets, not forecasts. Track source, page, audience path and successful next action. Do not judge success by downloads alone.

## 9. Quick wins and release boundaries

The release immediately replaces the POS-only first impression, removes the public pricing funnel, adds useful setup routes and exposes published businesses before download. It also adds four practical Kenya guides and a transparent report explanation tool.

This is a public website release. It does not redeploy the business API, cancel billing agreements, deliver model-connected AI reports, launch web checkout or certify sellers. Previous rental/payment/history fixes remain in their separate deployed services.

## Sources

- Google Search Central, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Essentials: https://developers.google.com/search/docs/essentials
- web.dev, Web Vitals: https://web.dev/articles/vitals
- Kenya Ministry of Health, food hygiene licensing checklist: https://www.health.go.ke/index.php/food-hygiene-licensing-checklist
- Nairobi County, food hygiene/medical certificate help: https://nairobi.go.ke/faqs-and-help-desks

## Font attribution

Inter variable Latin WOFF2 is distributed under the SIL Open Font License. The accompanying license is in public/assets/fonts/OFL.txt. Source: Google Fonts Inter, https://github.com/google/fonts/tree/main/ofl/inter.

## Release validation

- Focused TypeScript check: passed across the public pages and new components.
- Production Next.js build: passed. The repository still skips the legacy global type/lint checks during its production build. This is not a claim that all private application code is type-clean.
- Ten unit checks passed for listing security/schema and report calculations.
- Production HTTP integration passed: public routes, valid JSON-LD, redirects, sitemap, font and private index controls.
- Browser QA: desktop homepage, all three preview tabs, phone-width homepage and menu, Getting Started navigation, report decimals/losses/zero-baseline behaviour, prompt creation and zero horizontal overflow at the tested phone width.
- Live public catalog through the local build: four published businesses loaded, name filtering returned the matching business, and the store link opened its product listing.
- No real payment, booking, customer account or support message was created during QA.
- Production performance scores and production deployment of this release are not yet verified.
