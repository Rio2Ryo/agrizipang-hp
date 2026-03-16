import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "アグリ・ジパング | 地域と企業をつなぐ農業共創プラットフォーム",
  description:
    "アグリ・ジパングは、自治体と企業の共創を通じて持続可能な農業と地域経済を推進するB2B向けプラットフォームです。調達、実証、拠点づくりまで一気通貫で支援します。",
  keywords: [
    "アグリ・ジパング",
    "自治体",
    "企業連携",
    "農業DX",
    "持続可能性",
    "地域創生",
    "B2B"
  ],
  openGraph: {
    title: "アグリ・ジパング",
    description:
      "自治体と企業の共創で、持続可能な農業と地域経済を推進するB2Bプラットフォーム。",
    type: "website",
    locale: "ja_JP"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
