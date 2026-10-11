"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CONSENT_COOKIE = "fp_ad_measurement_consent";
const CONSENT_VALUE = "v1:granted";
const ANALYTICS_COOKIE = "fp_first_party_analytics_consent";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function readConsentValue() {
  if (typeof document === "undefined") return "";
  const value = document.cookie.split("; ").find((cookie) => cookie.startsWith(CONSENT_COOKIE + "="))?.slice(CONSENT_COOKIE.length + 1);
  try { return decodeURIComponent(value || ""); } catch { return ""; }
}
function readConsent() { return readConsentValue() === CONSENT_VALUE; }
function hasConsentChoice() { return readConsentValue() === CONSENT_VALUE || readConsentValue() === "v1:denied"; }
function readAnalyticsConsent() {
  if (typeof document === "undefined") return false;
  const value = document.cookie.split("; ").find((cookie) => cookie.startsWith(ANALYTICS_COOKIE + "="))?.slice(ANALYTICS_COOKIE.length + 1);
  try { return decodeURIComponent(value || "") === CONSENT_VALUE; } catch { return false; }
}
function hasAnalyticsChoice() {
  if (typeof document === "undefined") return true;
  const value = document.cookie.split("; ").find((cookie) => cookie.startsWith(ANALYTICS_COOKIE + "="))?.slice(ANALYTICS_COOKIE.length + 1);
  try { return [CONSENT_VALUE, "v1:denied"].includes(decodeURIComponent(value || "")); } catch { return false; }
}
function sharedCookieDomain() {
  const host = window.location.hostname;
  return host === "fahampesa.com" || host.endsWith(".fahampesa.com") ? "; Domain=.fahampesa.com" : "";
}

function writeAnalyticsConsent(granted: boolean) {
  const domain = sharedCookieDomain();
  document.cookie = ANALYTICS_COOKIE + "=" + encodeURIComponent(granted ? CONSENT_VALUE : "v1:denied") + "; Path=/; Max-Age=31536000; SameSite=Lax; Secure" + domain;
}

function writeConsent(granted: boolean) {
  const value = granted ? CONSENT_VALUE : "v1:denied";
  const domain = sharedCookieDomain();
  document.cookie = CONSENT_COOKIE + "=" + encodeURIComponent(value) + "; Path=/; Max-Age=31536000; SameSite=Lax; Secure" + domain;
}

function clearMetaMeasurement() {
  if (window.fbq) window.fbq("consent", "revoke");
  const names = ["_fbp", "_fbc", "fp_campaign_id", "fp_adset_id", "fp_ad_id"];
  const attributes = "; Path=/; Max-Age=0; SameSite=Lax; Secure";
  const domain = sharedCookieDomain();
  for (const name of names) {
    document.cookie = name + "=" + attributes;
    if (domain) document.cookie = name + "=" + attributes + domain;
  }
}

function persistFirstTouch() {
  const params = new URLSearchParams(window.location.search);
  const domain = sharedCookieDomain();
  const write = (name: string, value: string) => {
    document.cookie = name + "=" + encodeURIComponent(value) + "; Path=/; Max-Age=7776000; SameSite=Lax; Secure" + domain;
  };
  const fbclid = params.get("fbclid");
  if (fbclid && !document.cookie.split("; ").some((part) => part.startsWith("_fbc=")) && /^[A-Za-z0-9_-]{1,300}$/.test(fbclid)) {
    write("_fbc", "fb.1." + Date.now() + "." + fbclid);
  }
  for (const key of ["campaign_id", "adset_id", "ad_id"]) {
    const value = params.get(key);
    if (value && !document.cookie.split("; ").some((part) => part.startsWith("fp_" + key + "=")) && /^[A-Za-z0-9_.-]{1,100}$/.test(value)) {
      write("fp_" + key, value);
    }
  }
}

function enablePixel() {
  if (!PIXEL_ID) return;
  if (window.fbq) {
    window.fbq("consent", "grant");
    window.fbq("track", "PageView");
    return;
  }
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
  const pathname = usePathname();
  useEffect(() => {
    if (readConsent()) { persistFirstTouch(); enablePixel(); }
    if (readAnalyticsConsent()) startFirstPartyAnalytics(pathname);
    if (!hasConsentChoice() || !hasAnalyticsChoice()) setVisible(true);
    const openSettings = () => setVisible(true);
    window.addEventListener("fahampesa:privacy-settings", openSettings);
    return () => window.removeEventListener("fahampesa:privacy-settings", openSettings);
  }, [pathname]);

  function choose(choice: "essential" | "analytics" | "ads" | "both") {
    const analyticsGranted = choice === "analytics" || choice === "both";
    const adsGranted = choice === "ads" || choice === "both";
    writeAnalyticsConsent(analyticsGranted);
    writeConsent(adsGranted); setVisible(false);
    if (adsGranted) { persistFirstTouch(); enablePixel(); }
    else clearMetaMeasurement();
    if (analyticsGranted) startFirstPartyAnalytics(pathname);
    else revokeFirstPartyAnalytics();
    window.dispatchEvent(new CustomEvent("fahampesa:privacy-consent-changed"));
  }

  if (!visible) return <button type="button" onClick={() => setVisible(true)} className="fixed bottom-3 left-3 z-[99] rounded-md border border-slate-300 bg-white px-3 py-2 text-xs shadow">Privacy choices</button>;
  return (
    <section aria-label="Advertising measurement preferences" className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
      <h2 className="text-lg font-semibold text-slate-900">Privacy choices</h2>
      <p className="mt-2 text-sm leading-6 text-slate-700">Choose optional first-party analytics and Meta advertising measurement separately. First-party analytics records page views and selected action categories to improve signup and payment journeys. Meta measurement may use ad activity and, where permitted, confirmed payment amount and currency. We do not collect passwords, contact details, M-Pesa receipts, or business records for these analytics. Change your choice at any time.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("essential")} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">Essential only</button>
        <button type="button" onClick={() => choose("analytics")} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">Allow analytics</button>
        <button type="button" onClick={() => choose("ads")} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">Allow ad measurement</button>
        <button type="button" onClick={() => choose("both")} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">Allow both</button>
        <a href="/privacy" className="self-center text-sm underline">Privacy policy</a>
      </div>
    </section>
  );
}

function startFirstPartyAnalytics(pathname: string | null) {
  if (!readAnalyticsConsent() || typeof window === "undefined") return;
  const host = "app.fahampesa.com";
  const api = `https://${host}/api/v1/analytics/events`;
  const cookieValue = (name: string) => {
    const part = document.cookie.split("; ").find((item) => item.startsWith(name + "="));
    try { return decodeURIComponent(part?.slice(name.length + 1) || ""); } catch { return ""; }
  };
  const setCookie = (name: string, value: string) => {
    const domain = sharedCookieDomain();
    document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=15552000; SameSite=Lax; Secure${domain}`;
  };
  const makeId = () => window.crypto.randomUUID ? window.crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  let visitor = cookieValue("fp_growth_visitor");
  if (!/^[A-Za-z0-9-]{10,80}$/.test(visitor)) { visitor = makeId(); setCookie("fp_growth_visitor", visitor); }
  let session = sessionStorage.getItem("fp_growth_session") || "";
  if (!/^[A-Za-z0-9-]{10,80}$/.test(session)) { session = makeId(); sessionStorage.setItem("fp_growth_session", session); }
  const query = new URLSearchParams(window.location.search);
  const safe = (value: string | null) => value && /^[A-Za-z0-9 _.-]{1,100}$/.test(value) ? value : null;
  const referrerHost = (() => { try { return document.referrer ? new URL(document.referrer).hostname.slice(0, 100) : null; } catch { return null; } })();
  const captureFirstTouch = (key: string, value: string | null) => {
    const name = `fp_growth_${key}`;
    const stored = cookieValue(name);
    if (!stored && value) setCookie(name, value);
    return safe(stored) || value;
  };
  const firstSource = safe(query.get("utm_source")) || (query.has("fbclid") ? "facebook" : referrerHost ? "referral" : "direct");
  const source = captureFirstTouch("source", firstSource);
  const medium = captureFirstTouch("medium", safe(query.get("utm_medium")) || (query.has("fbclid") ? "paid_social" : null));
  const campaign = captureFirstTouch("campaign", safe(query.get("utm_campaign")));
  const campaignId = captureFirstTouch("campaign_id", safe(query.get("campaign_id")));
  const adsetId = captureFirstTouch("adset_id", safe(query.get("adset_id")));
  const adId = captureFirstTouch("ad_id", safe(query.get("ad_id")));
  captureFirstTouch("referrer_host", referrerHost);
  const ua = navigator.userAgent;
  const deviceType = /iPad|Tablet/i.test(ua) ? "tablet" : /Mobi|Android/i.test(ua) ? "mobile" : "desktop";
  const browserFamily = /Edg\//.test(ua) ? "edge" : /Firefox\//.test(ua) ? "firefox" : /Chrome\//.test(ua) ? "chrome" : /Safari\//.test(ua) ? "safari" : "other";
  const safePaths = new Set(["/","/pricing","/features","/industries","/contact","/about","/privacy","/signup","/login","/terms","/faq","/download"]);
  const send = (eventName: string, actionName: string | null = null, errorCode: string | null = null) => {
    if (!readAnalyticsConsent()) return;
    const source = safe(query.get("utm_source")) || (query.has("fbclid") ? "facebook" : referrerHost ? "referral" : "direct");
    const livePath = window.location.pathname.replace(/\/$/, "") || pathname?.replace(/\/$/, "") || "/";
    const pagePath = safePaths.has(livePath) ? livePath : "/other";
    fetch(api, { method: "POST", mode: "cors", credentials: "omit", keepalive: true, headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId: makeId(), eventName, visitorId: visitor, sessionId: session,
        pagePath, actionName,
        source, medium, campaign, campaignId, adsetId, adId, referrerHost,
        deviceType, browserFamily, errorCode, consent: true, consentVersion: "v1" }) }).catch(() => {});
  };
  const globalWindow = window as Window & { __fpGrowthClickListener?: boolean };
  send("page_view");
  if (!globalWindow.__fpGrowthClickListener) {
    globalWindow.__fpGrowthClickListener = true;
    document.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target.closest("a,button,[role='button']") : null;
      if (!target) return;
      const label = `${target.getAttribute("aria-label") || ""} ${target.textContent || ""} ${target.getAttribute("href") || ""}`.toLowerCase();
      const action = /sign\s*up|create account/.test(label) ? "signup" : /\blog\s*in\b|sign\s*in/.test(label) ? "login" : /subscribe|subscription/.test(label) ? "subscribe" : /pay.*m.?pesa|m.?pesa.*pay/.test(label) ? "pay_mpesa" : null;
      if (action) send("cta_click", action);
    }, { capture: true, passive: true });
    window.addEventListener("error", () => send("application_error", null, "CLIENT_ERROR"), true);
    window.addEventListener("unhandledrejection", () => send("application_error", null, "UNHANDLED_REJECTION"));
  }
}

function revokeFirstPartyAnalytics() {
  const part = document.cookie.split("; ").find((item) => item.startsWith("fp_growth_visitor="));
  let visitorId = "";
  try { visitorId = decodeURIComponent(part?.slice("fp_growth_visitor=".length) || ""); } catch { /* ignore malformed cookie */ }
  if (/^[A-Za-z0-9-]{10,80}$/.test(visitorId)) {
    fetch("https://app.fahampesa.com/api/v1/analytics/revoke", { method: "POST", mode: "cors", credentials: "omit", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ visitorId }) }).catch(() => {});
  }
  const domain = sharedCookieDomain();
  for (const name of ["fp_growth_visitor","fp_growth_source","fp_growth_medium","fp_growth_campaign","fp_growth_campaign_id","fp_growth_adset_id","fp_growth_ad_id","fp_growth_referrer_host"]) {
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax; Secure${domain}`;
  }
  try { sessionStorage.removeItem("fp_growth_session"); } catch { /* storage may be blocked */ }
}

declare global {
  interface Window { fbq?: { (...args: unknown[]): void; callMethod?: (...args: unknown[]) => void; queue: unknown[][]; loaded: boolean; version: string; }; _fbq?: Window["fbq"]; }
}
