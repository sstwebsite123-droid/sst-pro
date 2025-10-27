
import Footer from "./Components/Uiux/Footer";
import Header from "./Components/Uiux/Header";
import TermsGuard from "./Components/TermsGuard";
import "./globals.css";
import "./Animations.css"
import localFont from "next/font/local";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sst.pro'),
  title: "SST Pro - Professional Investment Solutions | Forex & Real Estate Trading",
  description: "SST Pro offers professional investment solutions in Forex trading and Real Estate. Get 10-12% monthly returns with expert market analysis and risk management. Start your investment journey today.",
  keywords: "investment, forex trading, real estate investment, SST Pro, professional trading, monthly returns, risk management",
  authors: [{ name: "SST Pro" }],
  creator: "SST Pro",
  publisher: "SST Pro",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sst.pro',
    siteName: 'SST Pro',
    title: 'SST Pro - Professional Investment Solutions | Forex & Real Estate Trading',
    description: 'SST Pro offers professional investment solutions in Forex trading and Real Estate. Get 10-12% monthly returns with expert market analysis and risk management.',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'SST Pro - Professional Investment Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SST Pro - Professional Investment Solutions',
    description: 'Professional investment solutions in Forex trading and Real Estate with expert market analysis and risk management.',
    images: ['/images/og-image.webp'],
    creator: '@sstpro',
  },
  alternates: {
    canonical: 'https://www.sst.pro',
  },
};
const monaSansnormal = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-MediumWide.ttf" }],

  variable: "--font-mona-sans-normal"
});
const monaSansnormallight = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-LightWide.ttf" }],

  variable: "--font-mona-sans-normallight"
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${monaSansnormallight.variable} ${monaSansnormal.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <TermsGuard>
          {children}
        </TermsGuard>
      </body>
    </html>
  );
}
