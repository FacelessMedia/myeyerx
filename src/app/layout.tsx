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
  title: "MyEyeRx | Medical Window Tint Exemptions Online",
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
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
