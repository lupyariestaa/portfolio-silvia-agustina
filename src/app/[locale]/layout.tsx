import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/content";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silviaagustina.id"),
  title: {
    default: "dr. Silvia Agustina — Dokter Umum",
    template: "%s · dr. Silvia Agustina",
  },
  description:
    "Website resmi dr. Silvia Agustina, Dokter Umum. Layanan konsultasi, jadwal praktik, dan edukasi kesehatan untuk Anda dan keluarga.",
  keywords: [
    "dokter umum",
    "dr. Silvia Agustina",
    "konsultasi kesehatan",
    "jadwal praktik dokter",
    "kesehatan keluarga",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/id",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    title: "dr. Silvia Agustina — Dokter Umum",
    description:
      "Pelayanan kesehatan yang empatik, profesional, dan berbasis bukti untuk Anda dan keluarga.",
    siteName: "dr. Silvia Agustina",
  },
  twitter: {
    card: "summary_large_image",
    title: "dr. Silvia Agustina — Dokter Umum",
    description:
      "Pelayanan kesehatan yang empatik, profesional, dan berbasis bukti untuk Anda dan keluarga.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "common" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.name,
    description: site.role,
    email: site.email,
    telephone: site.phone,
    url: site.website,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    medicalSpecialty: "Primary Care",
  };

  return (
    <html lang={locale} className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          {t("skipToContent")}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
