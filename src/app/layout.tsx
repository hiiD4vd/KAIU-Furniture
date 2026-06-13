import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-cormorant" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "KAIU Furniture | Minimalist & Sustainable Design",
  description: "Discover refined, hand-crafted furniture at KAIU Furniture. Elevate your living, dining, and outdoor spaces with our sustainable and timeless modern designs.",
  keywords: ["furniture", "KAIU furniture", "minimalist furniture", "sustainable furniture", "modern design", "interior design", "hand-crafted"],
  authors: [{ name: "KAIU Furniture" }],
  openGraph: {
    title: "KAIU Furniture | Minimalist & Sustainable Design",
    description: "Discover refined, hand-crafted furniture at KAIU Furniture. Elevate your spaces with timeless modern designs.",
    url: "https://kaiu-furniture.vercel.app", // Domain Vercel resmi Anda
    siteName: "KAIU Furniture",
    images: [
      {
        url: "/assets/banner-seo.jpg", // Menggunakan banner yang sudah dikompres
        width: 1200,
        height: 630,
        alt: "KAIU Furniture Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAIU Furniture | Minimalist & Sustainable Design",
    description: "Discover refined, hand-crafted furniture at KAIU Furniture. Elevate your spaces with timeless modern designs.",
    images: ["/assets/banner-seo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable}`} style={{ fontFamily: "var(--font-cormorant), 'Didot', 'Bodoni MT', serif" }}>
        {children}
      </body>
    </html>
  );
}
