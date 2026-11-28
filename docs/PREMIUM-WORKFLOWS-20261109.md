# FahamPesa premium workflow release

## Scope and source

Extends production commit 415175a79dc9dfc1babf27e3fbd761fc88746f8d on codex/branded-share-pages-20261109. This release changes the public website. It does not modify tenant accounts, payment allocation, deposits, private receipts, the backend service or Android releases.

## Changes

- Rebuilt the business tools and inventory pages around the shared orange/navy design, stronger type hierarchy, product illustrations, practical three-step workflows, worked examples, FAQs and contextual solution links. Removed an obsolete offline claim from the business tools FAQ.
- Matched the eight industry pages and shared industry links to the same palette and typography. Removed their duplicate Organization data in favour of the shared canonical business entity.
- Added an interactive property example for partial rent, excess rent credit and deposit shortfalls. Uses integer minor units, rejects invalid amounts and isolates deposit excess from rent. Clearly labelled as an illustrative calculator with no account data or saving. Field errors identify only the invalid input.
- Added a keyboard-accessible six-step seller readiness checklist with progress and clear boundaries. It neither publishes inventory nor awards verification.
- Expanded all four existing Kenya guides with direct summaries, section links, worked tables, next-step checklists, organisation attribution and an accurate modification date. No new thin landing pages.
- Homepage featured inventory now uses the search quality gate as well as public image/link validation. It selects up to four in-stock items from at most eight eligible stores. Public merchant links remain accessible even when not featured or indexed.
- Fixed the catalog sitemap cache so configuration is validated on every request and cached data is scoped by catalog origin. An unconfigured process no longer returns a successful sitemap from another environment's cache.
- Preserved separate Seller/Shopper app routes, existing release availability labels, browser access, subscription redirects and private-route noindex protections.

## Google account observations, 9 November 2026

- Submitted /catalog-sitemap.xml. Google showed Success, one discovered page (the public shop directory).
- /sitemap.xml showed Success and 34 discovered pages. Discovery does not mean indexing.
- Nairobi contact page reported URL is on Google and Page is indexed.
- Property management page reported discovered, currently not indexed. Requested indexing once. Google accepted it into the priority crawl queue.
- Verified broader business profile description, canonical website and WhatsApp contact remain saved. The TikTok HTTPS edit remains pending. No speculative category, opening date, address or hours changes.

## Validation

- Focused public-site TypeScript check passed.
- 23 unit tests passed, including five new property calculation cases.
- Production HTTP regression passed across public routes, structured data parsing, canonical URLs, private indexing controls, app package links and sitemap failure handling.
- Next.js production build passed. Repository configuration skips global legacy type/lint validation. This is not a claim of coverage for the private application.
- Browser verified rent overpayment of KSh 18,000 against KSh 15,000 due yields KSh 3,000 credit while preserving the KSh 10,000 deposit shortfall. Negative amount produces a readable error on that field only. Correction removes the error.
- Seller checklist checks and unchecks update progress without navigation.
- Property and business pages at 390px, seller and guide pages at 320px have no horizontal content overflow. Main content widths were 382/382 and 312/312 including browser scrollbars.
- Desktop visual review completed for the business, property and seller pages. Illustrations are explicitly labelled. No invented current-app screenshots or customer outcomes.

## Real inputs still needed

1. Consent-cleared screenshots from a current demo workspace. Existing PNGs are older illustrations, not evidence of current account workflows.
2. Genuine showroom/team photos and customer case studies with permission and documented results.
3. Complete merchant locations, original photos, accurate descriptions, prices and fulfilment details. The quality gate does not invent these or edit merchant records.
4. Ongoing local review collection and content publishing by the team. No outbound review requests were sent.
5. A separate consent-aware funnel analytics implementation. Existing backend action names do not accept the proposed new seller/shopper/WhatsApp event taxonomy. No unsupported event payloads or third-party tracking were added in this release.

## Release procedure

Pin the public Railway service only to the new source commit. Review staged changes before deploying. The service is pinned, so a GitHub push alone does not update the live site. Confirm Railway SUCCESS and inspect production pages before calling this release live. Keep the preceding commit as the rollback target. The business API and business frontend must remain unchanged.
