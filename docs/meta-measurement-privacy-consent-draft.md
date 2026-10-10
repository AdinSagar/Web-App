# Meta measurement privacy and consent draft

Status: draft for product and privacy review. Do not publish or enable Meta tracking until the Fahampesa portfolio and Dataset are verified.

## Proposed notice

Fahampesa uses Meta advertising measurement tools, including the Meta Pixel and Conversions API, only when you allow advertising measurement cookies. These tools help us measure whether Fahampesa advertisements lead to website visits, registrations, and paid subscriptions.

If you allow this use, Fahampesa may share page and registration events, Meta click and browser IDs, and a subscription purchase event containing its amount and currency. Fahampesa does not send your name, phone number, email address, M-Pesa receipt number, payment credentials, inventory, sales records, or customer transaction data to Meta. A subscription purchase is reported only after the payment provider confirms payment and Fahampesa activates the subscription.

You may decline advertising measurement and still use Fahampesa. You may change your choice through Cookie Settings. Declining or withdrawing consent stops future optional tracking. It does not reverse events already sent to Meta.

Meta processes information under its applicable terms and privacy practices. Fahampesa must verify the appropriate data-sharing roles, international-transfer safeguards, retention, and contact details before publishing this notice.

## Consent interface

- Default to essential storage only. Do not load the Meta Pixel or persist ad click IDs before a clear opt-in.
- Present equal, clear actions: “Essential only”, “Allow advertising measurement”, and “Manage choices”.
- Keep an always-available Cookie Settings link.
- Store the choice, consent notice version, and timestamp in a secure first-party preference shared across Fahampesa subdomains. Do not store names, phone numbers, or payment details in the consent cookie.
- Provide a withdrawal path that stops future Pixel and CAPI events.
- Use the same behavior on `fahampesa.com` and `app.fahampesa.com`.

## Before publication

Fahampesa's current policy says user data is not shared for advertising. Replace that claim only after the actual consent and event controls work on both domains, and after privacy-owner review. Confirm the company's legal contact, Meta data-sharing role, applicable safeguards, and retention schedule. Do not claim legal compliance based on this draft alone.
