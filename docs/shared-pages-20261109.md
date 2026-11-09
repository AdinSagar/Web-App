# Dedicated FahamPesa share pages

Store links use `https://fahampesa.com/<store-handle>`. Product, menu, room and service links add a stable listing handle. The main marketing homepage is unchanged. These pages display published listings and hand off orders/bookings to the Android Shop app.

## Deployment

Coordinate this website release with `AdinSagar/fahampesa-business-web`, migration `062_shop_share_links.sql` and the branded share endpoints.

Public website variables:

- `SHOP_CATALOG_ORIGIN=https://fahampesa-business-api-recovery-production.up.railway.app`
- `SHOP_SHARE_ORIGIN=https://fahampesa.com`

Backend variables:

- `SHOP_SHARE_ORIGIN=https://fahampesa.com`
- `SHOP_ANDROID_PACKAGE_ID=com.fahampesa.app` for the signed Play upgrade build.
- Leave `SHOP_ANDROID_INSTALL_URL` unset until the public Play listing serves the Shopper release. The public listing still described the Business app during this review. Never direct new shoppers to that release.

Keep `SHOP_PUBLIC_ORIGIN` and `SHOP_PRODUCTION_ORIGIN` unchanged. The installed Shop release validates that host for incoming links. The website's app button uses the existing ID-based Android intent. New readable links first open the preview page. They do not automatically open the app without this button. This requires no new APK for existing compatible Shop installations.

When the Shopper Play release is publicly available, set the matching Play URL in `SHOP_ANDROID_INSTALL_URL`. Existing install-referrer handling retains the store/item target. Official signing fingerprints remain deployment configuration. No guessed certificate was added.

The main domain already proxies `/api/v1` to the business service. Product and booking view events reuse the public session-scoped analytics endpoints. Corporate marketing/auth widgets mount only on the existing website routes, outside `(shared)`.

## Behavior

- Server rendering includes title, description, canonical URL, Open Graph image and Twitter image metadata.
- Reads use no-store and an eight-second timeout. Hidden products and inactive branches resolve to 404. Network/service failures show a retry page.
- Existing `/shop/<id>/<id>` links redirect to the readable preview after normal publication checks.
- Store and listing handles remain reserved through renames/unpublishing. Duplicate names get a short collision suffix. Main-domain routes are reserved.
- Desktop visitors see a QR code. Android visitors see the app button. iOS visitors see Android availability information.
- No website cart, checkout, marketplace directory, payment processing or homepage promotion was added.

## Validation

- Website production build passed using the existing CI placeholder Stripe key.
- `node node_modules/typescript/bin/tsc -p tsconfig.shared-pages.json --noEmit` passed.
- Backend build and 51 relevant catalog, share, booking, app-link and setup tests passed.
- Production SSR tested against the actual PublicShop service with a local PostgreSQL-compatible fixture: metadata, canonical URL, image URLs, existing-link redirects, listing-ID redirects and missing-listing 404 passed.
- Desktop and 390px mobile server-rendered layouts reviewed in the supported browser preview. A store-header wrap defect was fixed.
- Native Android launch and installation require a physical device / released compatible Shop build. They were not executed here. Browser visual review used server-rendered snapshots, not a production checkout session.
- Whole-site TypeScript reports existing legacy diagnostics outside the changed shared pages. The baseline has the same source error locations. The existing Next configuration still skips these during production build. This release does not claim a clean whole-site type check.

## Rollback

Unset backend `SHOP_SHARE_ORIGIN` to restore old share URL generation and old storefront handlers. Keep the new mapping tables so existing handles retain ownership. Roll back the public service only together with the backend share switch. Never delete/reassign handles during rollback.
