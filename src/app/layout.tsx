import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { site } from "@/content/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://web.nutrifreaks.com"),
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
    <html lang="en-IN" className={poppins.variable}>
      <body className={`${poppins.className} min-h-screen bg-black text-ink antialiased`}>
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
