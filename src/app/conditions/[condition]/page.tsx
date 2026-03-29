import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CONDITIONS, STATES, getConditionBySlug } from "@/data/states";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Eye,
  AlertCircle,
} from "lucide-react";

interface PageProps {
  params: Promise<{ condition: string }>;
}

export async function generateStaticParams() {
  return CONDITIONS.map((c) => ({ condition: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { condition: slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return {};

  return {
    title: `Window Tint Exemption for ${condition.name}`,
    description: condition.metaDescription,
    openGraph: {
      title: `Window Tint Exemption for ${condition.name}`,
      description: condition.metaDescription,
      url: `https://myeyerx.net/conditions/${condition.slug}`,
      siteName: "MyEyeRx",
      type: "article",
    },
    alternates: {
      canonical: `https://myeyerx.net/conditions/${condition.slug}`,
    },
  };
}

export default async function ConditionPage({ params }: PageProps) {
  const { condition: slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `Window Tint Exemption for ${condition.name}`,
    description: condition.metaDescription,
    url: `https://myeyerx.net/conditions/${condition.slug}`,
    about: {
      "@type": "MedicalCondition",
      name: condition.name,
      signOrSymptom: condition.symptoms.map((s) => ({
        "@type": "MedicalSignOrSymptom",
        name: s,
      })),
    },
    provider: {
      "@type": "MedicalBusiness",
      name: "MyEyeRx",
      url: "https://myeyerx.net",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myeyerx.net" },
        { "@type": "ListItem", position: 2, name: "Conditions", item: "https://myeyerx.net/conditions" },
        { "@type": "ListItem", position: 3, name: condition.name, item: `https://myeyerx.net/conditions/${condition.slug}` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/conditions" className="hover:text-amber-600 transition-colors">Conditions</Link></li>
            <li>/</li>
            <li className="text-heading font-medium">{condition.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-6">
            <Eye className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Qualifying Condition</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            Window Tint Exemption for{" "}
            <span className="text-amber-500">{condition.name}</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">{condition.description}</p>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Get Evaluated Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Symptoms & How It Relates */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Symptoms */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-6">
                Common Symptoms
              </h2>
              <div className="space-y-3">
                {condition.symptoms.map((symptom) => (
                  <div key={symptom} className="flex items-start gap-3 p-3 rounded-xl bg-surface">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Relates */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-6">
                How {condition.name} Relates to Window Tint
              </h2>
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <p className="text-gray-700 leading-relaxed">{condition.howItRelates}</p>
              </div>
              <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-heading mb-3">Why Medical Window Tint Helps</h3>
                <ul className="space-y-2">
                  {[
                    "Reduces UV radiation entering the vehicle",
                    "Decreases glare and bright light exposure",
                    "Provides consistent protection while driving",
                    "Medically documented and physician-approved",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* States That Recognize This Condition */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-4">
            Get Your Exemption by State
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            {condition.name} is recognized as a qualifying condition for window tint medical exemptions in most U.S. states. Select your state to learn about the specific process and requirements.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {STATES.map((state) => (
              <Link
                key={state.slug}
                href={`/${state.slug}-window-tint-medical-exemption`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all text-sm font-medium text-gray-700 hover:text-amber-700"
              >
                <span className="text-xs text-gray-400 font-bold">{state.abbreviation}</span>
                {state.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Conditions */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-heading mb-6">Other Qualifying Conditions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CONDITIONS.filter((c) => c.slug !== condition.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all group"
              >
                <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm group-hover:text-amber-700 transition-colors">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-amber-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Have {condition.name}? Get Your Exemption Today
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Connect with a licensed physician online who can evaluate your {condition.name.toLowerCase()} and provide the medical documentation you need.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-amber-900 bg-white hover:bg-amber-50 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Evaluation — $79 <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/70 text-xs mt-4 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> HIPAA Compliant</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 24-48hr Turnaround</span>
          </p>
        </div>
      </section>
    </>
  );
}
