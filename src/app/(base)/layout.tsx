import HeaderWrapper from "@/components/layout/HeaderWrapper";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import MailPopup from "@/components/MailPopup";
import ContactIcons from "@/components/ContactIcons";
import Setglobalcookies from "@/shared/Setglobalcookies";
import Script from "next/script";
import { CanonicalTags } from "../../components/CanonicalTag";
import "react-photo-view/dist/react-photo-view.css";
import { MarkupSchemaScript } from "@/components/MarkupSchemaScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kingdom Capital - Leading Real Estate Company in Dubai",
  description: "Kingdom Capital Real Estate, a leading real estate company in Dubai. We offer smart property solutions to elevate your lifestyle",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://realestatewebsite-liart.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="facebook-domain-verification"
          content="4pfz4vl3lmg2mscorqzb17x6l3oww0"
        />
        <Script src="/translation.js" strategy="beforeInteractive" />
        {process.env.GOOGLE_TRANSLATION_CONFIG && (
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        )}
        {/* Canonical Tags */}
        <CanonicalTags />
        {/* Markup Schema Script */}
        <MarkupSchemaScript />
        <meta name="google-site-verification" content="dA6QoKQo1aqx-5rBe5tkqgXI_4GHR8F7h6vNu0SsYtQ" />
      </head>
      <body className={inter.className}>
        <Setglobalcookies />
        <MailPopup />
        <ContactIcons />
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
