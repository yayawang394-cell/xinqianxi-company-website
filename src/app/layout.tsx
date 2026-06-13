import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.xinqianxi.world";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "新千西科技 · AI原生内容与数字资产创新",
    template: "%s · 新千西科技",
  },
  description:
    "新千西科技是一家 AI 原生内容与数字资产创新公司，专注 AI 内容生产、协同创作系统、AI 原生产品与数字资产探索。",
  keywords: ["新千西科技", "AI原生内容", "数字资产创新", "协同创作", "多元宇宙叙事平台", "AI内容生产"],
  openGraph: {
    title: "新千西科技 · AI原生内容与数字资产创新",
    description:
      "AI 原生内容与数字资产创新公司。自研 AI 内容生产、协同创作与数字资产产品。",
    url: siteUrl,
    siteName: "新千西科技",
    locale: "zh_CN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020817",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-dvh font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
