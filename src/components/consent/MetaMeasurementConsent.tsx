"use client";

import { useEffect, useState } from "react";

const CONSENT_COOKIE = "fp_ad_measurement_consent";
const CONSENT_VALUE = "v1:granted";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function readConsent() {
  return typeof document !== "undefined" && document.cookie.split("; ").some((cookie) => cookie === CONSENT_COOKIE + "=" + CONSENT_VALUE);
}

function writeConsent(granted: boolean) {
  const value = granted ? CONSENT_VALUE : "v1:denied";
  const domain = window.location.hostname.endsWith("fahampesa.com") ? "; Domain=.fahampesa.com" : "";
  document.cookie = CONSENT_COOKIE + "=" + value + "; Path=/; Max-Age=31536000; SameSite=Lax; Secure" + domain;
}

function enablePixel() {
  if (!PIXEL_ID || window.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
    else fbq.queue.push(args);
  } as NonNullable<Window["fbq"]>;
  fbq.queue = []; fbq.loaded = true; fbq.version = "2.0";
  window.fbq = fbq; window._fbq = fbq;
  const script = document.createElement("script"); script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  fbq("init", PIXEL_ID); fbq("track", "PageView");
}

export default function MetaMeasurementConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (readConsent()) enablePixel(); else setVisible(true);
    const openSettings = () => setVisible(true);
    window.addEventListener("fahampesa:privacy-settings", openSettings);
    return () => window.removeEventListener("fahampesa:privacy-settings", openSettings);
  }, []);

  function choose(granted: boolean) {
    writeConsent(granted); setVisible(false);
    if (granted) enablePixel();
    else if (window.fbq) window.fbq("consent", "revoke");
  }

  if (!visible) return <button type="button" onClick={() => setVisible(true)} className="fixed bottom-3 left-3 z-[99] rounded-md border border-slate-300 bg-white px-3 py-2 text-xs shadow">Privacy choices</button>;
  return (
    <section aria-label="Advertising measurement preferences" className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
      <h2 className="text-lg font-semibold text-slate-900">Privacy choices</h2>
      <p className="mt-2 text-sm leading-6 text-slate-700">Fahampesa uses optional Meta advertising measurement to understand which ads lead to subscriptions. If enabled, Meta may receive page activity, ad click identifiers, and confirmed subscription amount and currency. We do not send your contact details, M-Pesa receipt, or business records for this measurement. You can change your choice at any time.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose(false)} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">Essential only</button>
        <button type="button" onClick={() => choose(true)} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">Allow ad measurement</button>
        <a href="/privacy" className="self-center text-sm underline">Privacy policy</a>
      </div>
    </section>
  );
}

declare global {
  interface Window { fbq?: { (...args: unknown[]): void; callMethod?: (...args: unknown[]) => void; queue: unknown[][]; loaded: boolean; version: string; }; _fbq?: Window["fbq"]; }
}
