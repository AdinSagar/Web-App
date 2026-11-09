# FahamPesa search and local implementation

## Scope

Extends the premium website release at remote commit 8080a2f150f4fd5beeb9d9426de1cdfe7bf16d2f. Public website only. Property, seller, shopper, business tool and app routes remain connected. No backend data, billing, Google account permissions or app releases changed.

## Implemented

- Premium contact/showroom page using the existing orange, navy and local Inter typography. Clear WhatsApp, phone, email, directions, showroom hours and preparation guidance. No embedded map or additional third-party JavaScript.
- Broader About content and metadata for business tools, property management and local commerce. Separate Seller and Shopper app links.
- Shared business contact constants and matching Organization/LocalBusiness structured data. Real Nairobi address, existing phone, verified hours and existing social profiles. No invented review scores, founder biography, coordinates or years in business.
- Flat /guides and /guides/[slug] URLs, canonical metadata, permanent redirects from /business/guides, sitemap updates and contextual links from home, solutions and footer.
- Catalog search eligibility checks. Shared links continue to work. Placeholder store names/locations, missing item descriptions/images and malformed prices/URLs do not qualify for indexing.
- Separate /catalog-sitemap.xml with public shop directory and eligible store/product pages. Uses public catalog APIs only. Five concurrent stores, up to five directory pages, 100 stores and five item pages per store. Repeated cursors fail safely. Successful results cached 15 minutes. Catalog failure returns an uncached 503 with Retry-After, not a cached empty success. Increase limits or split into sitemap indexes when inventory grows.
- robots.txt advertises both sitemaps. Existing crawler access and private-page noindex controls preserved.

## Google changes observed in the account

- Existing business profile was verified. Name Fahampesa, primary category Software company, secondary POS terminal supplier. Categories retained because they describe the actual business.
- Broader description saved and accepted. It covers software, property management, online selling and FahamPesa Shop. Removed the obsolete offline claim.
- Canonical website https://fahampesa.com/ saved and accepted.
- WhatsApp https://wa.me/254117154195 added and accepted.
- TikTok URL changed from HTTP to HTTPS. Google review pending at the last account observation.
- Address and hours checked against the website, not changed speculatively.
- Removed erroneous Search Console sitemap submission of the HTML homepage (/). The valid XML sitemap remains.
- Resubmitted /sitemap.xml successfully. Google reported 34 discovered pages, last read November 9, 2026, compared with 17 before resubmission. Discovered does not mean indexed.
- Contact page was reported as crawled but not indexed. Its revised content requires deployment before requesting a recrawl.
- Search Console had no field Core Web Vitals data. No performance score or ranking guarantee is claimed.

## Validation

- Focused public-site TypeScript check passed.
- 18 unit checks passed for money/report calculations, listing schema, WhatsApp enquiries, catalog image/link safety and search eligibility.
- Production HTTP regression passed across public routes, canonical URLs, JSON-LD, private-page noindex, app package links, sitemap membership and permanent guide redirects.
- Next.js production build passed. Existing project configuration skips global lint/type validation, so this is not a claim that every legacy admin module passes global checks.
- Desktop contact page reviewed in browser. Contact at 390px and rental guide at 320px fit without horizontal overflow (382/382 and 312/312 content widths after scrollbar).
- Live catalog read found three placeholder location values. No qualifying product URLs were present at review. Search quality checks do not edit seller records.

## Follow-through requiring real business inputs

- Owners must supply accurate seller pickup locations, product descriptions and photos. Do not fabricate these to force indexing.
- Add genuine showroom/team photos and customer case studies only with suitable source material and consent.
- Ask real customers for honest reviews through the business's normal process. No review messages sent in this task.
- Indexing and Google profile review timing remain controlled by Google.
- The report tool remains a public calculator and AI prompt helper, not an AI model connected to private accounts.

## Release

Source prepared on codex/branded-share-pages-20261109, PR 23. Railway public service is pinned to an exact commit. Verify the new commit's deployment status and production pages before calling this release live. Submit /catalog-sitemap.xml and request priority URL indexing after publication.
