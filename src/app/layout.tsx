import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
  keywords: [
    "NutriFreaks",
    "customized meals Madurai",
    "diet meals delivery",
    "fat loss meals",
    "diabetes reversal meals",
    "muscle gain meals",
    "dietician meal plan",
  ],
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: site.name,
              description: site.description,
              url: site.url,
              telephone: site.phoneTel,
              email: site.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "14C, PT Rajan 8th Street, Narimedu",
                addressLocality: "Madurai",
                postalCode: "625002",
                addressCountry: "IN",
              },
              areaServed: "Madurai",
            }),
          }}
        />
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
