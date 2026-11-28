# Business Growth release validation

## Included

Five public routes, homepage/footer navigation, current online-only wording, local AI prompt builder, seller WhatsApp enquiry links, listing JSON-LD, sitemap and private-route indexing controls. See `africa-launch-plan-20261109.md` for the eight-part strategy and work still required.

## Checks

- Website production build with existing CI Stripe placeholder passed.
- Focused shared/growth TypeScript check passed.
- Six listing-discovery unit tests passed: number validation, safe destinations, precise prices, closed stores, correct category schemas and safe JSON serialization.
- Backend build and eight share-link tests passed. New business/trust route reservations prevent store-handle collisions.
- Production HTTP checks passed for five growth routes, canonical links, AI form, sitemap, private noindex, login handoff and homepage navigation.
- Actual PublicShop fixture integration passed: production SSR, listing metadata/images, legacy redirects and missing-listing 404.
- Supported live browser preview checked desktop growth layout, homepage navigation, guide navigation, AI prompt generation and successful clipboard copy. Mobile CSS is included, but a new phone viewport review was not completed in this session.

## Limits

No production deployment was run. No real orders, payments or customer messages were sent. No external AI model is connected. Food permits, handling and delivery are operational launch gates, not newly enforced backend features. New payment rails, PWA, browser checkout and a publication-aware catalog sitemap remain future work. Core Web Vitals targets are not measured production results. Existing whole-site TypeScript diagnostics remain outside this focused check. Native Android app launch needs device verification.

## Reproduce

```sh
STRIPE_SECRET_KEY=sk_test_ci_placeholder npm run build
node node_modules/typescript/bin/tsc -p tsconfig.shared-pages.json --noEmit
node --experimental-strip-types --test tests/listing-discovery.test.mjs
node --test tests/growth-http.test.mjs
```

In the backend repository, run `npm run build` and `node --test shop-share-links.test.mjs` from `apps/business-api`.
