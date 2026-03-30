import type { ReactNode } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { STATES, getStateBySlug, CONDITIONS } from "@/data/states";
import { STATE_UNIQUE_CONTENT } from "@/data/state-unique-content";
import { STATE_STATUTE_LINKS } from "@/data/state-statute-links";
import {
  Scale,
  ArrowRight,
  MapPin,
  AlertTriangle,
  Shield,
  ExternalLink,
  Car,
  BookOpen,
  Stethoscope,
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

  const unique = STATE_UNIQUE_CONTENT[state.slug];
  const statute = STATE_STATUTE_LINKS[state.slug];

  const faqs: { q: string; a: string; content?: ReactNode }[] = [
    {
      q: `What is the legal tint limit in ${state.name}?`,
      a: `${state.name} allows ${state.tintLaws.frontSide} on front side windows, ${state.tintLaws.backSide} on back side windows, and ${state.tintLaws.rearWindow} on the rear window. The windshield limit is ${state.tintLaws.windshield}.`,
      content: (
        <>
          {state.name} allows {state.tintLaws.frontSide} on front side windows, {state.tintLaws.backSide} on back side windows, and {state.tintLaws.rearWindow} on the rear window. The windshield limit is {state.tintLaws.windshield}.{statute && (<> View the full statute: <a href={statute.statuteUrl} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-medium">{statute.statuteCode}</a>.</>)}
        </>
      ),
    },
    {
      q: `Can I get a medical exemption for darker tint in ${state.name}?`,
      a: state.hasExemption
        ? `Yes, ${state.name} allows medical exemptions for window tint. If you have a qualifying condition like photosensitivity, lupus, migraines, or melanoma, a licensed physician can certify your need for darker tint. MyEyeRx offers online evaluations starting at $${state.price}.`
        : `${state.name} does not currently have a formal medical exemption program for window tint. However, regulations can change — check with the ${state.dmvName} for the most current information.`,
      content: state.hasExemption ? (
        <>
          Yes, {state.name} allows medical exemptions for window tint. If you have a qualifying condition like{" "}
          <Link href="/conditions/photosensitivity" className="text-amber-600 hover:underline font-medium">photosensitivity</Link>,{" "}
          <Link href="/conditions/lupus" className="text-amber-600 hover:underline font-medium">lupus</Link>,{" "}
          <Link href="/conditions/migraines" className="text-amber-600 hover:underline font-medium">migraines</Link>, or{" "}
          <Link href="/conditions/melanoma" className="text-amber-600 hover:underline font-medium">melanoma</Link>,{" "}
          a licensed physician can certify your need for darker tint.{" "}
          <Link href={`/${state.slug}-window-tint-medical-exemption`} className="text-amber-600 hover:underline font-medium">
            Get your {state.abbreviation} medical exemption through MyEyeRx
          </Link>{" "}
          — online evaluations starting at ${state.price}.
        </>
      ) : (
        <>
          {state.name} does not currently have a formal medical exemption program for window tint. However, regulations can change — check with the{" "}
          <a href={state.dmvUrl} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-medium">{state.dmvName}</a>{" "}
          for the most current information. View all{" "}
          <Link href="/conditions" className="text-amber-600 hover:underline font-medium">qualifying conditions</Link>.
        </>
      ),
    },
    {
      q: `What happens if I get pulled over with illegal tint in ${state.name}?`,
      a: `${state.penalty} You may also be required to remove the illegal tint and provide proof of removal. A valid medical exemption certificate protects you from these penalties.`,
      content: (
        <>
          {state.penalty} You may also be required to remove the illegal tint and provide proof of removal. A valid{" "}
          <Link href={`/${state.slug}-window-tint-medical-exemption`} className="text-amber-600 hover:underline font-medium">medical exemption certificate</Link>{" "}
          protects you from these penalties. Learn more about{" "}
          <Link href="/resources/pulled-over-tinted-windows" className="text-amber-600 hover:underline font-medium">what to do if you get pulled over with tinted windows</Link>.
        </>
      ),
    },
    {
      q: `How is window tint darkness measured in ${state.name}?`,
      a: `Window tint darkness is measured by VLT (Visible Light Transmission) — the percentage of light that passes through the film. A lower VLT means darker tint. ${state.name} law enforcement uses a tint meter to check VLT during traffic stops.`,
      content: (
        <>
          Window tint darkness is measured by{" "}
          <Link href="/resources/understanding-vlt-window-tint" className="text-amber-600 hover:underline font-medium">VLT (Visible Light Transmission)</Link>{" "}
          — the percentage of light that passes through the film. A lower VLT means darker tint. {state.name} law enforcement uses a tint meter to check VLT during traffic stops.
        </>
      ),
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
            {unique ? unique.lawIntro : `Understanding ${state.name}'s window tint regulations is important to avoid fines and ensure your vehicle is compliant. Below is a complete breakdown of the legal tint limits, penalties for violations, and how to obtain a medical exemption if you need darker tint.`}
          </p>
          {statute && (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={statute.statuteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 bg-amber-100 px-3 py-1.5 rounded-full hover:bg-amber-200 transition-colors"
              >
                <Scale className="w-3.5 h-3.5" />
                {statute.statuteCode}
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={state.dmvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                {state.dmvName}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
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
              {unique && (
                <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <p className="text-amber-800 text-sm font-semibold mb-1">Enforcement in {state.name}</p>
                  <p className="text-amber-700 text-sm leading-relaxed">{unique.enforcement}</p>
                </div>
              )}
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
                {unique && (
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed italic">
                    {unique.tip}
                  </p>
                )}
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
                  <p className="text-gray-400 text-[11px] mt-3">Includes physician evaluation &amp; certificate</p>
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
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.content || faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Resources & References */}
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-extrabold text-heading">Resources &amp; References</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Official & Legal */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Official &amp; Legal</p>
                <ul className="space-y-2.5">
                  {statute && (
                    <li>
                      <a href={statute.statuteUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 text-sm">
                        <Scale className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                          <strong>{statute.statuteCode}</strong> &mdash; Official {state.name} Window Tint Statute
                          <ExternalLink className="w-3 h-3 inline ml-1 opacity-40" />
                        </span>
                      </a>
                    </li>
                  )}
                  <li>
                    <a href={state.dmvUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 text-sm">
                      <Shield className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                        {state.dmvName}
                        <ExternalLink className="w-3 h-3 inline ml-1 opacity-40" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://windowtintlaws.us" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 text-sm">
                      <Car className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                        WindowTintLaws.us &mdash; Enforcement Guide &amp; Vehicle-Specific Rules
                        <ExternalLink className="w-3 h-3 inline ml-1 opacity-40" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Medical & Health Authority */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Medical &amp; Health Authority</p>
                <ul className="space-y-2.5">
                  <li>
                    <a href="https://www.aao.org/eye-health/tips-prevention/sun" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 text-sm">
                      <Stethoscope className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                        American Academy of Ophthalmology &mdash; Sun &amp; UV Eye Protection
                        <ExternalLink className="w-3 h-3 inline ml-1 opacity-40" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.aad.org/public/everyday-care/sun-protection" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 text-sm">
                      <Stethoscope className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                        American Academy of Dermatology &mdash; Sun Protection
                        <ExternalLink className="w-3 h-3 inline ml-1 opacity-40" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.skincancer.org/skin-cancer-prevention/sun-protection/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 text-sm">
                      <Stethoscope className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                        Skin Cancer Foundation &mdash; UV Protection Guidelines
                        <ExternalLink className="w-3 h-3 inline ml-1 opacity-40" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nei.nih.gov/learn-about-eye-health" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 text-sm">
                      <Stethoscope className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                        National Eye Institute (NIH) &mdash; Eye Health Information
                        <ExternalLink className="w-3 h-3 inline ml-1 opacity-40" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Internal: MyEyeRx Resources */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 md:col-span-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">MyEyeRx Resources</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  <Link href={`/${state.slug}-window-tint-medical-exemption`} className="group flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors font-medium">Get Your {state.abbreviation} Medical Exemption</span>
                  </Link>
                  <Link href="/conditions" className="group flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors font-medium">Qualifying Medical Conditions</span>
                  </Link>
                  <Link href="/resources/how-to-get-tint-exemption-online" className="group flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors font-medium">How to Get a Medical Exemption</span>
                  </Link>
                  <Link href="/resources/window-tint-exemption-cost" className="group flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors font-medium">Exemption Cost Guide</span>
                  </Link>
                  <Link href="/conditions/photosensitivity" className="group flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors font-medium">Photosensitivity &amp; Tint</span>
                  </Link>
                  <Link href="/conditions/lupus" className="group flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors font-medium">Lupus &amp; UV Protection</span>
                  </Link>
                  <Link href="/conditions/migraines" className="group flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors font-medium">Migraines &amp; Light Sensitivity</span>
                  </Link>
                  <Link href="/conditions/melanoma" className="group flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors font-medium">Melanoma &amp; Skin Cancer</span>
                  </Link>
                  <Link href="/faqs" className="group flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors font-medium">Frequently Asked Questions</span>
                  </Link>
                </div>
              </div>
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
