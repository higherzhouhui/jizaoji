import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-sc",
});

const siteName = "极造极信息科技有限公司";

export const metadata: Metadata = {
  title: { default: siteName, template: `%s | ${siteName}` },
  description: "用AI重塑企业数据未来 — 极造极信息科技有限公司",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={notoSansSC.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
