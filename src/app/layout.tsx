import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myeyerx.net"),
  title: {
    default: "MyEyeRx | Medical Window Tint Exemptions Online",
    template: "%s | MyEyeRx",
  },
  description:
    "Get your medical window tint exemption online with MyEyeRx. Quick, HIPAA-compliant service to help you apply with ease and confidence.",
  openGraph: {
    title: "MyEyeRx | Medical Window Tint Exemptions Online",
    description:
      "Get your medical window tint exemption online with MyEyeRx. Quick, HIPAA-compliant service to help you apply with ease and confidence.",
    url: "https://myeyerx.net",
    siteName: "MyEyeRx",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "MyEyeRx | Medical Window Tint Exemptions Online",
    description: "Get your medical window tint exemption online. Quick, HIPAA-compliant physician evaluations.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "MyEyeRx",
  url: "https://myeyerx.net",
  logo: "https://myeyerx.net/logo.png",
  telephone: "(734) 644-1804",
  email: "Tory@myeyerx.net",
  description: "MyEyeRx connects patients with licensed physicians for online medical window tint exemption evaluations. HIPAA compliant, 24-48 hour turnaround.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  sameAs: [],
  medicalSpecialty: "Ophthalmology",
  priceRange: "$79",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
