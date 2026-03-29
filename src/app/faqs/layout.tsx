import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about medical window tint exemptions, eligibility, the application process, pricing, and legal compliance.",
  alternates: { canonical: "https://myeyerx.net/faqs" },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
