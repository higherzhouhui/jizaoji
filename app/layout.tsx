import type { Metadata } from "next";
import { Instrument_Serif, Noto_Sans_SC, Syne } from "next/font/google";
import { SITE_NAME, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { DocumentLocaleMeta } from "@/components/seo/DocumentLocaleMeta";
import { TopProgressBar } from "@/components/layout/TopProgressBar";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { WhatsAppFloat } from "@/components/contact/WhatsAppFloat";
import { PreferencesProvider } from "@/lib/preferences";
import { THEME_BOOT } from "@/lib/theme-boot";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-sc",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});

const siteUrl =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://jizaoji.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      data-theme="night"
      data-locale="zh"
      suppressHydrationWarning
      className={`${notoSansSC.variable} ${syne.variable} ${instrument.variable}`}
    >
      <body className="antialiased font-sans">
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <PreferencesProvider>
          <DocumentLocaleMeta />
          <TopProgressBar />
          <JsonLd />
          {children}
          <ChatWidget />
          <WhatsAppFloat />
        </PreferencesProvider>
      </body>
    </html>
  );
}
