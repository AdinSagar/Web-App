import {publicRootMetadata} from "@/lib/public-root-metadata";
import "./globals.css";
import SiteExperience from '@/components/SiteExperience';

export const metadata = publicRootMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning={true}>
        <SiteExperience>{children}</SiteExperience>
      </body>
    </html>
  );
}
