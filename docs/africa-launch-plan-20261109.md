# FahamPesa Africa launch plan

Prepared 9 November 2026. Start in Kenya, within areas served by participating sellers. Expand only after payment, support and delivery checks pass in each country. This is a phased plan, not a claim of current coverage.

## 1. Website structure and navigation

| Route | Purpose | Status in this release |
|---|---|---|
| `/` | Explain FahamPesa and direct buyers and sellers | Business Growth navigation and section added |
| `/business` | Business Growth hub | Added |
| `/business/search-and-ai` | Search, social, AI guidance and prompt builder | Added |
| `/business/sell-online` | Listing, enquiry and local selling guide | Added |
| `/business/food-and-grocery` | Food launch requirements and seller guidance | Added |
| `/trust` | Seller checks, payment guidance, support and reporting | Added |
| `/{store}` | Public seller page | Existing staged share work, WhatsApp enquiry added |
| `/{store}/{product}` | Public product, menu item, room or service page | Existing staged share work, structured data added |
| `/pos-system-kenya`, `/inventory-management-software-kenya` | Existing seller acquisition pages | Retain their existing search intent |
| `/pricingpage`, `/contact-information`, `/privacy`, `/terms` | Pricing, contact and policies | Existing |

Use the name Business Growth in navigation. Explain SCO as visibility across search channels inside the guide. Avoid making the whole homepage look like a marketing agency. Buyer discovery begins with shared seller and product pages. This release does not introduce browser checkout or a public marketplace directory.

## 2. Homepage messaging

Keep the existing Kenya POS search positioning while broadening the supporting copy:

Headline direction: “Run your business. Help local customers find you.”
Supporting copy: “Manage your business with FahamPesa Seller. Share clear product and store pages customers open in their browser.”
Primary seller action: “Start your business account”. Secondary action: “Explore business guides”. Product pages offer “Ask on WhatsApp” when a valid public seller number exists, plus the existing app handoff.

Recommended section order: clear value and audience, product demonstration, businesses served, how sharing works, Business Growth guides, pricing, support and policies. Retain verified product demonstrations. Replace unsubstantiated adoption counters and testimonials before broader marketing.

Do not publish “20+ years of experience” unless a named team member has documented experience supporting the claim. The consultant role in the request is not FahamPesa company history. Show expertise through useful guides, named accountable authors where available, screenshots, dated source links and measured customer examples.

## 3. SCO and AI content framework

The new section provides educational guides. It does not claim FahamPesa operates an AI service or delivers managed marketing services.

Potential paid services, only after staff and delivery scope exist: listing audit, local search setup, product content review, social search content, conversion measurement. Each service page should state who it serves, deliverables, turnaround, exclusions, pricing basis and a real contact action.

Process: baseline current visibility and enquiries, fix listing information and crawl access, publish a small content set, measure qualified enquiries and completed orders, improve the weakest step.

Tools: Search Console for indexing and query evidence, PageSpeed Insights for page performance, GA4 or a privacy appropriate analytics alternative for consented funnel measurement, platform analytics for social discovery, and an AI drafting tool with human review. The added prompt builder runs locally in the browser. It produces a prompt, not model generated content. No external AI account is connected.

Case study template: named consenting business, location and category, baseline dates and sample size, exact changes, before and after impressions/enquiries/completed orders, refunds and cancellations, attribution limits, seller quote with permission. Publish no example results as if measured. Exclude customer phone numbers and payment records.

## 4. Keyword and on-page strategy

These are seed keywords to validate in Search Console and local keyword research, not measured search volumes.

| Market | Seller intent examples | Buyer intent examples after real local supply exists |
|---|---|---|
| Kenya | POS software Kenya, inventory software Nairobi, sell online Kenya | merchant name + product, groceries Parklands, barber Eastleigh |
| Uganda | inventory software Kampala, sell online Uganda | merchant name + item + Kampala neighbourhood |
| Tanzania | POS software Tanzania, kuuza bidhaa mtandaoni | product + Dar es Salaam area, reviewed by a native Swahili editor |
| Nigeria | inventory software Lagos, sell online Nigeria | merchant name + product + Lagos delivery area |
| Ghana | POS software Accra, sell online Ghana | merchant name + item + Accra neighbourhood |
| South Africa | POS software Johannesburg, inventory software South Africa | merchant name + product + served suburb |
| Côte d’Ivoire | logiciel de caisse Abidjan, vendre en ligne Côte d’Ivoire | produit + quartier + Abidjan |
| Senegal | logiciel de caisse Dakar, vendre en ligne Sénégal | produit + quartier + Dakar |

Separate seller software intent from buyer product intent. Keep the existing POS page as the main Kenya POS target. Do not create dozens of duplicate city pages or claim delivery where no seller serves the area. Launch English first in Kenya, add reviewed Kiswahili copy, then native French content for a specific supported market. Use hreflang only when translated equivalents exist.

Each public listing needs a readable permanent URL, one descriptive H1, unique title and description, visible price and currency where relevant, useful photo alt text, seller identity and actual service area, canonical URL, crawlable related links and current availability. Share cards should use the actual item photo. Keep customer accounts and records out of the index. Robots rules are not access control.

Implemented: new guide titles/canonicals, Article schema, listing breadcrumbs and appropriate Product/MenuItem/Accommodation/Service types, Product offers from current catalog fields, new guide sitemap entries, private route noindex headers. No fabricated reviews or ratings.

Next: a publication-aware catalog sitemap for eligible seller and item URLs, plus URL inspection after launch. Shared listings remain reachable through links now. Google AI features use normal search foundations. There is no special AI schema requirement and no guaranteed inclusion.

## 5. Technical and performance release checklist

P0 before deployment:
- Run production builds, focused type checks, share resolver tests and public HTTP route checks.
- Check the exact staged website and backend commit pins and required origins. Preserve the existing Android package identity and legacy deep links.
- Test seller publication, unpublication, renamed links and unknown listings. Never expose unpublished catalog or tenant data.
- Verify HTTPS, canonical main domain, 404 responses and redirects. Check WhatsApp uses only the seller’s deliberately public contact.
- Check titles, structured data, image previews and mobile navigation. Keep business guides free of login requirements.
- Retest real product uploads, seller-to-shopper changes, receipts and payment records in the existing app before calling the full release ready.

P1 after launch:
- Run PageSpeed Insights on home, guide, seller and product URLs. Target mobile LCP at most 2.5 seconds, INP at most 200 ms and CLS at most 0.1 at the 75th percentile. These are targets, not measurements from this task.
- Test budget Android hardware with throttled mobile data. Keep essential text and photos useful before heavy scripts load.
- Reduce existing font families and load only required weights. Size images responsively, reserve their dimensions and lazy load below the fold. Audit existing marketing scripts and large homepage assets.
- Validate JSON-LD with Rich Results Test. Product markup does not guarantee rich results or Merchant Center eligibility. Do not advertise web checkout while purchases still use another flow.
- Monitor server errors, failed images, slow catalog calls and unsupported app handoffs. Avoid public caching of personal account data or stale stock.
- Submit the sitemap in Search Console, confirm ownership, inspect representative URLs and correct exclusions.

Known scope limit: the existing application has a wider TypeScript backlog and its production configuration skips global type validation. The focused check covers the changed share and growth pages. A successful build is not proof the entire platform has no defects.

## 6. Payment, logistics and trust priorities

| Priority | Work | Release gate |
|---|---|---|
| P0 | Clear seller identity, public contact, real stock and full payable amount | Customer knows who supplies the item and total cost |
| P0 | Keep cash at pickup / cash on delivery only where each seller supports it | Seller confirms acceptance, service area and delivery responsibility |
| P0 | Explicit order states and durable receipts | A WhatsApp message is an enquiry, never silently a confirmed order |
| P0 for food | Merchant documents, food details and handling plan | Verify category-specific and local requirements before onboarding |
| P1 | Kenya M-Pesa merchant checkout | Provider onboarding, signed/verified callbacks, amount/currency matching, idempotency, ledger, reconciliation and refund tests |
| P1 | Delivery pricing and operations | Seller-specific radius, fees, minimum order, cutoff, ETA, contact and proof of delivery |
| P1 | Support and disputes | Named operator, contact hours, cancellation rules, complaint reference and response target |
| P2 | Additional countries and payment rails | Local provider contract, settlement and refund tests for each market |

An existing M-Pesa subscription integration does not prove marketplace checkout is ready. Never trust a payment screenshot as settlement. Never request a mobile money PIN. AI must not approve payments or invent delivery promises.

Country evaluation order: Kenya M-Pesa first, then Uganda MTN MoMo/Airtel Money and Tanzania M-Pesa/Airtel Money through a locally supported provider. Nigeria requires local transfer/card support and reconciliation. Ghana prioritizes MTN MoMo, Telecel Cash and AT Money. South Africa needs locally supported cards/EFT. Côte d’Ivoire and Senegal require separate checks for Orange Money, MTN where applicable and Wave. These are integration candidates, not enabled FahamPesa methods. Paystack documentation confirms selected channels in Ghana, Kenya and Côte d’Ivoire. Verify the current merchant agreement and settlement currency for every launch. Do not treat Francophone West Africa as one payment jurisdiction.

Food is a gated rollout. Kenya sellers need applicable county and public health approvals, food premises and handler checks. Ghana FDA permits, Nigeria NAFDAC registration/label requirements for applicable packaged categories, and South Africa premises certificates require country-specific assessment. Do not apply one country’s rule to all countries.

Food fields and operations still required before a food commerce launch: ingredients and allergens, pack size and units, batch/expiry information where applicable, storage instructions, seller documents with expiry review, substitutions consent, delivery windows, temperature control for perishable items, spoilage/refund rules and traceable complaint/recall handling. Hide unsupported perishables until handling and delivery are proven. Do not use a “verified” badge without a documented, scoped and current check. The new food guide does not enforce these operational gates in software.

## 7. Organic acquisition before app download

Lead with public product/store links and guides. Let a customer inspect the item, seller, price and contact route first. Keep app installation optional for discovery. A valid seller WhatsApp number provides an enquiry route. Do not send messages automatically or enroll customers without consent.

Start with a small group of consenting sellers in areas they already serve. Give each a permanent seller link, a product link and a QR code. Add those links to existing WhatsApp Business profiles, receipts, social bios and shop signage. Publish short seller demonstrations answering real local questions. Use captions and spoken product/location names on TikTok, Instagram and YouTube. Link videos to the matching product or store, not an unrelated download screen.

Track: listing view, contact click, app handoff, seller signup, enquiry outcome and completed order where recorded with consent. A contact click is not a sale. Track cancellations, complaints and repeat purchase alongside acquisition.

PWA is optional after browser use proves demand. Keep online-only behaviour: no offline prices, orders, balances or payment claims. Browser checkout is a separate product phase requiring orders, payments, stock and support readiness. This release adds neither a PWA nor browser checkout.

## 8. Thirty day action plan

| Days | Action | Evidence to review |
|---|---|---|
| 1–3 | Deploy the reviewed combined release, smoke test real seller/item links and existing rent payment/receipt flows, onboard a small Kenya pilot | Live route checks, publication checks, payment/receipt test record and named support owner |
| 4–7 | Verify Search Console, submit sitemap, inspect five representative public URLs, measure mobile speed and fix major failures | Indexing status, actual CWV/lab baseline, broken link and image report |
| 8–14 | Improve pilot listings, publish two useful local guides and three short seller videos, add QR/shared links to participating stores | Search impressions, qualified enquiries, listing completeness and contact response times |
| 15–21 | Fix the largest funnel loss, review every pilot cancellation/complaint, test full delivery costs and support handling | Enquiry-to-order conversion where known, cancellations, delivery reliability and refunds |
| 22–30 | Publish one consenting case study using actual evidence, remove weak content, decide whether to expand a neighbourhood or category | Repeat use, seller retention, support load, unit economics and food readiness |

These are work targets, not traffic or revenue forecasts. Do not expand countries solely because pages receive impressions. Require reliable local supply, support and payment settlement first.

## Sources checked

- Google AI search guidance: https://developers.google.com/search/docs/appearance/ai-features
- Product snippets: https://developers.google.com/search/docs/appearance/structured-data/product-snippet
- Core Web Vitals: https://web.dev/articles/vitals
- Paystack payment channels: https://paystack.com/docs/payments/payment-channels/
- Kenya Ministry of Health food hygiene checklist: https://www.health.go.ke/index.php/food-hygiene-licensing-checklist
- Ghana FDA food service guidance: https://fdaghana.gov.gh/food-service-establishments-guidelines/
- Nigeria NAFDAC MSME guidance: https://nafdac.gov.ng/our-services/msme/getting-started-with-msmes/
- South Africa food control regulations: https://www.health.gov.za/food-control-regulations/
