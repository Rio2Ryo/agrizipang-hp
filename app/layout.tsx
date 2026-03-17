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
  title: "アグリ・ジパング | 営農型太陽光発電・CO2削減ソリューション",
  description:
    "農事組合法人アグリ・ジパングは、栃木県宇都宮市を拠点に営農型太陽光発電とCO2削減ソリューションを提供。自治体・企業への実行支援から運用まで一気通貫で伴走します。",
  keywords: [
    "アグリ・ジパング",
    "営農型太陽光発電",
    "CO2削減",
    "自治体連携",
    "地域脱炭素",
    "農業共創",
    "栃木県",
    "宇都宮市",
    "B2B",
    "ESG"
  ],
  openGraph: {
    title: "アグリ・ジパング | 営農型太陽光発電・CO2削減ソリューション",
    description:
      "栃木県宇都宮市を拠点に、営農型太陽光発電とCO2削減ソリューションで自治体・企業の脱炭素を支援します。",
    type: "website",
    url: "https://agrizipang-hp.vercel.app",
    siteName: "アグリ・ジパング",
    locale: "ja_JP",
    images: [
      {
        url: "https://agrizipang-hp.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "アグリ・ジパング"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "アグリ・ジパング | 営農型太陽光発電・CO2削減ソリューション",
    description:
      "栃木県宇都宮市を拠点に、営農型太陽光発電とCO2削減ソリューションで自治体・企業の脱炭素を支援します。"
  },
  icons: {
    icon: "/favicon.ico"
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
