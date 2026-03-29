import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Evaluation | Medical Window Tint Exemption",
  description:
    "Begin your online physician evaluation for a medical window tint exemption. HIPAA compliant, 24-48 hour turnaround.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://myeyerx.net/get-started",
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
