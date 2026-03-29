import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { STATES, getStateBySlug } from "@/data/states";
import {
  Scale,
  ArrowRight,
  MapPin,
  AlertTriangle,
  Shield,
  ExternalLink,
  Car,
} from "lucide-react";

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};

  const title = `${state.name} Window Tint Laws ${new Date().getFullYear()} | Legal Tint Limits & Penalties`;
  const description = `${state.name} window tint laws: Front side ${state.tintLaws.frontSide}, back side ${state.tintLaws.backSide}, rear ${state.tintLaws.rearWindow}. Penalties: ${state.penalty}. Learn how to get a medical exemption.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://myeyerx.net/window-tint-laws-by-state/${state.slug}`,
      siteName: "MyEyeRx",
      type: "article",
    },
    alternates: {
      canonical: `https://myeyerx.net/window-tint-laws-by-state/${state.slug}`,
    },
  };
}

export default async function StateLawPage({ params }: PageProps) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  const faqs = [
    {
      q: `What is the legal tint limit in ${state.name}?`,
      a: `${state.name} allows ${state.tintLaws.frontSide} VLT on front side windows, ${state.tintLaws.backSide} VLT on back side windows, and ${state.tintLaws.rearWindow} VLT on the rear window. The windshield limit is ${state.tintLaws.windshield}.`,
    },
    {
      q: `Can I get a medical exemption for darker tint in ${state.name}?`,
      a: state.hasExemption
        ? `Yes, ${state.name} allows medical exemptions for window tint. If you have a qualifying condition like photosensitivity, lupus, migraines, or melanoma, a licensed physician can certify your need for darker tint. MyEyeRx offers online evaluations starting at $${state.price}.`
        : `${state.name} does not currently have a formal medical exemption program for window tint. However, regulations can change — check with the ${state.dmvName} for the most current information.`,
    },
    {
      q: `What happens if I get pulled over with illegal tint in ${state.name}?`,
      a: `${state.penalty} You may also be required to remove the illegal tint and provide proof of removal. A valid medical exemption certificate protects you from these penalties.`,
    },
    {
      q: `How is window tint darkness measured in ${state.name}?`,
      a: `Window tint darkness is measured by VLT (Visible Light Transmission) — the percentage of light that passes through the film. A lower VLT means darker tint. ${state.name} law enforcement uses a tint meter to check VLT during traffic stops.`,
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${state.name} Window Tint Laws`,
      description: `Complete guide to ${state.name} window tint laws including VLT limits, penalties, and medical exemption information.`,
      url: `https://myeyerx.net/window-tint-laws-by-state/${state.slug}`,
      author: { "@type": "Person", name: "Toriano Dewberry", jobTitle: "Licensed Optician" },
      publisher: {
        "@type": "Organization",
        name: "MyEyeRx",
        url: "https://myeyerx.net",
        logo: { "@type": "ImageObject", url: "https://myeyerx.net/logo.png" },
      },
      dateModified: state.lastUpdated,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myeyerx.net" },
        { "@type": "ListItem", position: 2, name: "Window Tint Laws by State", item: "https://myeyerx.net/window-tint-laws-by-state" },
        { "@type": "ListItem", position: 3, name: `${state.name}`, item: `https://myeyerx.net/window-tint-laws-by-state/${state.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/window-tint-laws-by-state" className="hover:text-amber-600 transition-colors">Tint Laws</Link></li>
            <li>/</li>
            <li className="text-heading font-medium">{state.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">{state.name} ({state.abbreviation})</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            {state.name}{" "}
            <span className="text-amber-500">Window Tint Laws</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Understanding {state.name}&apos;s window tint regulations is important to avoid fines and ensure your vehicle is compliant. Below is a complete breakdown of the legal tint limits, penalties for violations, and how to obtain a medical exemption if you need darker tint.
          </p>
        </div>
      </section>

      {/* VLT Limits */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Legal Limits</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-4">
                {state.name} VLT Requirements
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                VLT (Visible Light Transmission) measures the percentage of light that passes through your window tint. A lower VLT percentage means darker tint. {state.name} sets specific VLT minimums for each window position on your vehicle.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These limits apply to passenger vehicles. Commercial vehicles, SUVs, and vans may have different regulations for rear windows. Always check your specific vehicle type with local law enforcement or the {state.dmvName}.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-amber-500 px-6 py-4 flex items-center gap-3">
                <Car className="w-5 h-5 text-white" />
                <h3 className="text-white font-bold text-lg">{state.name} Legal Tint Limits</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { label: "Windshield", value: state.tintLaws.windshield, desc: "Top strip only in most states" },
                  { label: "Front Side Windows", value: state.tintLaws.frontSide, desc: "Driver and passenger windows" },
                  { label: "Back Side Windows", value: state.tintLaws.backSide, desc: "Behind the driver" },
                  { label: "Rear Window", value: state.tintLaws.rearWindow, desc: "Back windshield" },
                ].map((row) => (
                  <div key={row.label} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-heading font-semibold text-sm">{row.label}</span>
                        <span className="text-gray-400 text-xs block">{row.desc}</span>
                      </div>
                      <span className="text-heading font-bold text-sm bg-gray-100 px-3 py-1 rounded-full">{row.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-heading mb-3">
                  Penalties for Illegal Tint in {state.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Driving with window tint darker than {state.name}&apos;s legal limits without a valid medical exemption can result in:
                </p>
                <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                  <p className="text-red-800 font-semibold">{state.penalty}</p>
                </div>
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  In addition to fines, you may be required to remove the illegal tint and present proof of removal. Repeat offenses may carry higher penalties. A valid medical exemption protects you from these penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Exemption CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-4">
                  Need Darker Tint in {state.name}?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have a medical condition that requires UV or light protection, you may qualify for a medical exemption that allows darker tint than {state.name}&apos;s standard limits. MyEyeRx connects you with a licensed physician who can evaluate your condition online.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    `Valid ${state.formName} provided`,
                    "Licensed physician evaluation",
                    "24-48 hour turnaround",
                    "100% online process",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <Shield className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${state.slug}-window-tint-medical-exemption`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  Get Your {state.abbreviation} Exemption <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white rounded-2xl shadow-lg p-6 border border-amber-200">
                  <p className="text-gray-500 text-sm mb-1">Online Evaluation Fee</p>
                  <p className="text-4xl font-extrabold text-amber-600">${state.price}</p>
                  <p className="text-gray-400 text-xs mt-1">One-time fee • No hidden costs</p>
                  <a
                    href={state.dmvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-amber-600 mt-4 transition-colors"
                  >
                    {state.dmvName} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-8">
            Frequently Asked Questions About {state.name} Tint Laws
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl border border-gray-100 group"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-heading pr-4">{faq.q}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Link to windowtintlaws.us for deeper info */}
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4">
            <ExternalLink className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-heading font-semibold text-sm mb-1">Want a deeper dive into {state.name} tint regulations?</p>
              <p className="text-gray-600 text-sm">
                Visit{" "}
                <a
                  href={`https://windowtintlaws.us`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 font-semibold hover:underline"
                >
                  WindowTintLaws.us
                </a>{" "}
                for detailed enforcement guidance, vehicle-specific rules, and the latest {state.name} tint law updates.
              </p>
            </div>
          </div>

          {/* Author byline */}
          <p className="text-gray-400 text-xs mt-6">
            Written by Toriano Dewberry, Licensed Optician &amp; Founder of MyEyeRx. Last updated {state.lastUpdated}.
          </p>
        </div>
      </section>

      {/* Other State Laws — all 49 */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-heading mb-6">Window Tint Laws in Other States</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {STATES.filter((s) => s.slug !== state.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/window-tint-laws-by-state/${s.slug}`}
                className="text-sm text-gray-600 hover:text-amber-600 font-medium py-2 px-3 rounded-lg hover:bg-amber-50 transition-all"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
