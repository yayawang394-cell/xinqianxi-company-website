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
    default: "杭州萧山新千西人工智能应用软件有限公司",
    template: "%s · 杭州萧山新千西人工智能应用软件有限公司",
  },
  description: "AI应用开发、智能体、数字员工与自动化系统，让AI真正服务企业增长。",
  keywords: ["新千西", "人工智能", "AI智能体", "数字员工", "AI自动化", "杭州萧山"],
  openGraph: {
    title: "杭州萧山新千西人工智能应用软件有限公司",
    description: "AI应用开发、智能体、数字员工与自动化系统，让AI真正服务企业增长。",
    url: siteUrl,
    siteName: "杭州萧山新千西人工智能应用软件有限公司",
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
