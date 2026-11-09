import type {Metadata} from "next";
import {PUBLIC_BRAND} from "./public-brand";
import {publicPageMetadata} from "./public-page-metadata";

export const publicRootMetadata: Metadata = {
  metadataBase: new URL(PUBLIC_BRAND.origin),
  ...publicPageMetadata('/', PUBLIC_BRAND.title, PUBLIC_BRAND.description),
  applicationName: PUBLIC_BRAND.name,
  verification: {
    google: "_AdKkqlOgla5oUdDrE-t0OEE1av9CFEUvC24Fnb-BOg",
    other: { "msvalidate.01": "FFDDA27B1C8D5C0D6681293A62D030ED" },
  },
  icons: {
    icon: [{url: PUBLIC_BRAND.icon, type: 'image/png', sizes: '192x192'}, {url: '/favicon.ico', sizes: '16x16 32x32 48x48'}],
    shortcut: PUBLIC_BRAND.icon,
    apple: '/assets/brand/fahampesa-logo-180.png',
  },
};
