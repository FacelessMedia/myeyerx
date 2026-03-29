import { Metadata } from "next";
import Link from "next/link";
import { CONDITIONS } from "@/data/states";
import { ArrowRight, Eye, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Conditions for Window Tint Exemptions",
  description:
    "Learn which medical conditions qualify for a window tint exemption. Photosensitivity, lupus, migraines, melanoma, and more. Get evaluated online by a licensed physician.",
  openGraph: {
    title: "Medical Conditions for Window Tint Exemptions",
    description:
      "Learn which medical conditions qualify for a window tint exemption. Get evaluated online by a licensed physician.",
    url: "https://myeyerx.net/conditions",
    siteName: "MyEyeRx",
    type: "website",
  },
  alternates: {
    canonical: "https://myeyerx.net/conditions",
  },
};

export default function ConditionsHub() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li className="text-heading font-medium">Qualifying Conditions</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-6">
            <Eye className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Medical Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            Qualifying Conditions for{" "}
            <span className="text-amber-500">Window Tint Exemptions</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Many medical conditions that involve light sensitivity or UV vulnerability may qualify you for a window tint medical exemption. Learn about each condition and how it relates to tint exemptions.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONDITIONS.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-bold text-heading mb-3 group-hover:text-amber-600 transition-colors">
                  {condition.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {condition.description}
                </p>
                <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-amber-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Not Sure If You Qualify?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Start your evaluation online. A licensed physician will review your condition and determine if you qualify for a medical window tint exemption.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-amber-900 bg-white hover:bg-amber-50 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Evaluation — $79 <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/70 text-xs mt-4 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> HIPAA Compliant</span>
          </p>
        </div>
      </section>
    </>
  );
}
