import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const GA_ID = "G-NFRXL0YBYG";

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
  sameAs: [
    "https://www.youtube.com/@myeyerx",
    "https://www.facebook.com/MyEyeRx",
    "https://www.instagram.com/myeyerx/",
    "https://www.tiktok.com/@myeyerx",
  ],
  founder: {
    "@type": "Person",
    name: "Toriano Dewberry",
    jobTitle: "CEO & Licensed Optician",
    url: "https://myeyerx.net/about",
    sameAs: ["https://www.linkedin.com/in/toriano-dewberry-33882939/"],
  },
  employee: {
    "@type": "Person",
    name: "Dr. Elizabeth Rose Borowiec, OD",
    jobTitle: "Medical Director & Licensed Optometrist",
    sameAs: [
      "https://www.linkedin.com/in/elizabeth-borowiec-02a5b9293/",
      "https://doctor.webmd.com/doctor/elizabeth-borowiec-acb041d9-6953-41e9-a9b3-378dda9a95b5-overview",
    ],
  },
  medicalSpecialty: "Optometry",
  priceRange: "$225-$350",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
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
