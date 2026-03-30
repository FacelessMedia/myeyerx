import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { STATES, getStateBySlug, CONDITIONS, getNearbyStates } from "@/data/states";
import { STATE_UNIQUE_CONTENT } from "@/data/state-unique-content";
import {
  Shield,
  Clock,
  FileText,
  CheckCircle,
  ArrowRight,
  MapPin,
  AlertTriangle,
  ExternalLink,
  Scale,
  Eye,
  Stethoscope,
  Phone,
  Award,
  BookOpen,
  Car,
  BadgeCheck,
  HeartPulse,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function extractStateSlug(fullSlug: string): string | null {
  const match = fullSlug.match(/^(.+)-window-tint-medical-exemption$/);
  return match ? match[1] : null;
}

export async function generateStaticParams() {
  return STATES.map((s) => ({
    slug: `${s.slug}-window-tint-medical-exemption`,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const stateSlug = extractStateSlug(slug);
  if (!stateSlug) return {};
  const state = getStateBySlug(stateSlug);
  if (!state) return {};

  const title = `${state.name} Window Tint Medical Exemption | Get Yours Online — MyEyeRx`;
  const description = state.metaDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://myeyerx.net/${state.slug}-window-tint-medical-exemption`,
      siteName: "MyEyeRx",
      type: "article",
    },
    alternates: {
      canonical: `https://myeyerx.net/${state.slug}-window-tint-medical-exemption`,
    },
    ...(state.served ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const stateSlug = extractStateSlug(slug);
  if (!stateSlug) notFound();

  const state = getStateBySlug(stateSlug);
  if (!state) notFound();

  const nearbyStates = getNearbyStates(state.slug);
  const pageUrl = `https://myeyerx.net/${state.slug}-window-tint-medical-exemption`;
  const unique = STATE_UNIQUE_CONTENT[state.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${state.name} Window Tint Medical Exemption`,
    description: state.metaDescription,
    url: pageUrl,
    dateModified: state.lastUpdated,
    author: {
      "@type": "Person",
      name: "Toriano Dewberry",
      jobTitle: "CEO & Licensed Optician",
      url: "https://myeyerx.net/about",
    },
    reviewedBy: {
      "@type": "Person",
      name: "Dr. Elizabeth Rose Borowiec, OD",
      jobTitle: "Licensed Optometrist",
      url: "https://www.linkedin.com/in/elizabeth-borowiec-02a5b9293/",
    },
    provider: { "@type": "MedicalBusiness", name: "MyEyeRx", url: "https://myeyerx.net", telephone: "(734) 644-1804" },
    about: { "@type": "MedicalCondition", name: "Photosensitivity" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myeyerx.net" },
        { "@type": "ListItem", position: 2, name: `${state.name} Window Tint Medical Exemption`, item: pageUrl },
      ],
    },
  };

  const faqItems = [
    {
      q: `How do I get a window tint medical exemption in ${state.name}?`,
      a: `To get a window tint medical exemption in ${state.name}, you need a licensed physician to certify your medical condition requires darker tint. MyEyeRx connects you with a licensed physician online who can evaluate your condition and provide the necessary ${state.formName} documentation. The entire process can be completed online in minutes.`,
    },
    {
      q: `What medical conditions qualify for a tint exemption in ${state.name}?`,
      a: `${state.name} recognizes conditions including photosensitivity, lupus (SLE), melanoma/skin cancer, chronic migraines, post-surgical eye conditions (LASIK, cataract surgery), xeroderma pigmentosum, porphyria, albinism, rosacea with photosensitivity, and other documented light-sensitive conditions. A licensed physician must certify that your specific condition requires UV or light protection through darker window tint.`,
    },
    {
      q: `What are the window tint laws in ${state.name}?`,
      a: `${state.name} tint laws: Windshield — ${state.tintLaws.windshield}; Front side windows — ${state.tintLaws.frontSide}; Back side windows — ${state.tintLaws.backSide}; Rear window — ${state.tintLaws.rearWindow}. With a valid medical exemption, you may be permitted darker tint than these standard limits on some or all windows.`,
    },
    {
      q: `How long does a ${state.name} window tint exemption last?`,
      a: `In ${state.name}, the window tint medical exemption duration is: ${state.exemptionDuration}. We recommend starting the renewal process before your exemption expires to maintain continuous legal coverage for your tinted windows.`,
    },
    {
      q: `What happens if I get pulled over with dark tint in ${state.name}?`,
      a: `Without a valid medical exemption, illegal window tint in ${state.name} can result in: ${state.penalty}. If you have a valid medical exemption, keep your ${state.formName} in your vehicle at all times and present it to law enforcement upon request. Officers are trained to recognize valid medical exemption documentation.`,
    },
    {
      q: `How much does a ${state.name} tint exemption cost through MyEyeRx?`,
      a: `The online physician evaluation for a ${state.name} window tint medical exemption through MyEyeRx is $${state.price}. This one-time fee includes the physician evaluation, medical documentation review, and your signed ${state.formName} exemption certificate delivered within 24-48 hours. There are no hidden fees or recurring charges.`,
    },
    {
      q: `Can I get a ${state.name} tint exemption online?`,
      a: `Yes. MyEyeRx provides a fully online telehealth evaluation for ${state.name} window tint medical exemptions. You complete a medical questionnaire from home, a licensed physician reviews your information, and if approved, your signed ${state.formName} is delivered digitally within 24-48 hours. No in-office visit is required.`,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Get a Window Tint Medical Exemption in ${state.name}`,
    description: `Step-by-step guide to obtaining a medical window tint exemption in ${state.name} through MyEyeRx.`,
    totalTime: "PT48H",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: state.price },
    step: [
      { "@type": "HowToStep", position: 1, name: "Start Your Application", text: `Select ${state.name} and begin your online evaluation. Complete a brief medical questionnaire about your condition and symptoms.` },
      { "@type": "HowToStep", position: 2, name: "Complete Physician Evaluation", text: "A licensed physician reviews your medical history, condition documentation, and determines if you qualify for a medical tint exemption." },
      { "@type": "HowToStep", position: 3, name: "Receive Your Certificate", text: `Once approved, you receive your signed ${state.formName} within 24-48 hours, ready to carry in your vehicle.` },
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${state.name} Window Tint Medical Exemption — Online Evaluation`,
    description: `Online physician evaluation for a ${state.name} window tint medical exemption. Receive your signed ${state.formName} within 24-48 hours.`,
    url: pageUrl,
    brand: { "@type": "Organization", name: "MyEyeRx" },
    offers: {
      "@type": "Offer",
      price: state.price,
      priceCurrency: "USD",
      availability: state.served ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: `https://myeyerx.net/get-started?state=${state.slug}`,
      seller: { "@type": "Organization", name: "MyEyeRx" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-heading font-medium">{state.name} Window Tint Medical Exemption</li>
          </ol>
        </div>
      </nav>

      {/* H1 Hero */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">{state.name} ({state.abbreviation})</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
                {state.name}{" "}
                <span className="text-amber-500">Window Tint Medical Exemption</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{state.processSummary}</p>
              {unique && (
                <p className="text-gray-600 leading-relaxed mb-4">{unique.climate}</p>
              )}
              <p className="text-gray-600 leading-relaxed mb-6">
                If you suffer from a medical condition that makes you sensitive to light or UV radiation — such as photosensitivity, lupus, chronic migraines, or a history of skin cancer — you may legally qualify for darker window tint in {state.name}. MyEyeRx provides a fast, fully online physician evaluation so you can get your {state.formName} without leaving home.
              </p>

              {!state.served && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-amber-800 font-semibold text-sm">Service Not Yet Available in {state.name}</p>
                      <p className="text-amber-700 text-sm mt-1">We do not currently have licensed physicians available to serve {state.name}. We are actively working to expand our provider network to this state. Check back soon!</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {state.served ? (
                  <Link
                    href={`/get-started?state=${state.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md hover:shadow-lg"
                  >
                    Get Your {state.abbreviation} Exemption — ${state.price} <ArrowRight className="w-5 h-5" />
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-heading bg-gray-200 hover:bg-gray-300 rounded-full transition-all"
                  >
                    Contact Us for Updates <ArrowRight className="w-5 h-5" />
                  </Link>
                )}
                <a
                  href={state.dmvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-amber-400 transition-all"
                >
                  Visit {state.dmvName} <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Author / Reviewer Byline */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-xs font-bold text-amber-700">TD</div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">EB</div>
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  <span>Written by <Link href="/about" className="text-amber-600 font-semibold hover:underline">Toriano Dewberry</Link></span>
                  <span className="mx-1">&middot;</span>
                  <span>Reviewed by <a href="https://www.linkedin.com/in/elizabeth-borowiec-02a5b9293/" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:underline">Dr. Elizabeth Borowiec, OD</a></span>
                  <span className="mx-1">&middot;</span>
                  <time dateTime={state.lastUpdated}>Updated {new Date(state.lastUpdated + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-heading mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-500" /> Quick Facts
                </h2>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gray-500 font-medium">Required Form</dt>
                    <dd className="text-heading font-semibold mt-0.5">{state.formName}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 font-medium">Exemption Duration</dt>
                    <dd className="text-heading font-semibold mt-0.5">{state.exemptionDuration}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 font-medium">Penalty Without Exemption</dt>
                    <dd className="text-heading font-semibold mt-0.5">{state.penalty}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 font-medium">Online Evaluation Fee</dt>
                    <dd className="text-amber-600 font-bold text-xl mt-0.5">${state.price}</dd>
                  </div>
                </dl>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> HIPAA Compliant</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 24-48hr Turnaround</span>
                </div>
              </div>

              {/* Inline Contact Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <p className="text-sm font-semibold text-heading mb-2">Questions? We can help.</p>
                <a href="tel:+17346441804" className="flex items-center gap-2 text-amber-600 font-bold text-sm hover:text-amber-700 transition-colors mb-2">
                  <Phone className="w-4 h-4" /> (734) 644-1804
                </a>
                <Link href="/contact" className="text-xs text-gray-500 hover:text-amber-600 transition-colors">
                  Or send us a message →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: How It Works */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-4">
            How to Get Your {state.name} Window Tint Exemption
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our simple 3-step process connects you with a licensed physician who reviews your existing medical documentation and provides the exemption certificate {state.name} requires. The entire process is completed online — no in-office visit necessary.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, icon: Eye, title: "Submit Your Information", description: `Select ${state.name} as your state, fill out a brief questionnaire, and upload supporting medical documentation — such as a prior diagnosis, medication list, or doctor's notes from your family physician or eye doctor. This gives our physicians the medical history they need to evaluate your case.` },
              { step: 2, icon: Stethoscope, title: "Physician Review", description: `A licensed physician reviews your existing medical documentation and determines if there is sufficient evidence of a qualifying condition to support a ${state.name} window tint medical exemption. Our medical director, Dr. Elizabeth Borowiec, OD, oversees all reviews. Note: our telehealth physicians do not diagnose or prescribe — they evaluate your documented medical history.` },
              { step: 3, icon: FileText, title: "Receive Your Certificate", description: `Once approved, your signed ${state.formName} is delivered digitally within 24-48 hours. Print it and keep it in your vehicle at all times. You can then have your windows tinted at any tint shop in ${state.name}.` },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">Step {item.step}</div>
                <h3 className="text-lg font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          {state.served && (
            <div className="text-center mt-12">
              <Link
                href={`/get-started?state=${state.slug}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Start Your {state.abbreviation} Application Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* H2: Understanding the Exemption Process */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Detailed Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-6">
            Understanding {state.name}&apos;s Medical Exemption Process
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              {state.name} allows individuals with qualifying medical conditions to apply for a medical exemption that permits window tint darker than the standard legal limits. The {state.dmvName} oversees this process, which requires certification from a licensed physician confirming that the patient&apos;s medical condition necessitates increased protection from sunlight and UV radiation.
            </p>
            {unique && (
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Local Enforcement Context:</strong> {unique.enforcement}
              </p>
            )}
            <p className="text-gray-600 leading-relaxed mb-4">
              The key document in this process is the <strong>{state.formName}</strong>. This form must be completed by a licensed physician who has evaluated your medical condition. It certifies that you have a legitimate medical need for darker window tint and authorizes your vehicle to have tint below the standard VLT limits set by {state.name} law. Without this documentation, your vehicle could be considered non-compliant during traffic stops or vehicle inspections.
            </p>
            {unique && (
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>What You Should Know:</strong> {unique.localInsight}
              </p>
            )}
            <p className="text-gray-600 leading-relaxed mb-4">
              Through MyEyeRx, this review is conducted entirely online via telehealth. You will need to provide existing medical documentation — such as a prior diagnosis, medication list, or notes from your family doctor or eye doctor — that demonstrates your qualifying condition. Our licensed physicians then review this documentation to determine whether there is sufficient medical evidence to support an exemption recommendation. It is important to understand that our telehealth physicians do not diagnose conditions or prescribe treatments; they evaluate your documented medical history and, when justified, provide a signed exemption recommendation that meets {state.name}&apos;s legal requirements.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Many patients already have the documentation they need from their regular doctor or eye doctor. Some eye care professionals will provide tint exemption paperwork directly, but most do not specialize in this area — which is exactly where MyEyeRx fills the gap. Once your {state.formName} is issued, it is valid for {state.exemptionDuration.toLowerCase()}.
            </p>
            <p className="text-gray-600 leading-relaxed">
              It is important to note that the exemption must be kept in your vehicle at all times. If you are stopped by law enforcement, you will need to present your {state.formName} to demonstrate that your darker tint is legally authorized. Failure to produce valid documentation may result in a citation: {state.penalty.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Tint Laws */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Tint Regulations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-4">{state.name} Window Tint Laws</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {state.name} regulates the darkness of vehicle window tint measured by Visible Light Transmission (VLT) percentage. A lower VLT percentage means darker tint — for example, 5% VLT is very dark (limo tint), while 70% VLT is nearly clear. With a valid medical exemption, you may be permitted darker tint than these standard limits.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                These limits apply to standard passenger vehicles. Commercial vehicles, SUVs, vans, and trucks may have different regulations, particularly for rear windows. For the most up-to-date {state.name} tint regulations, visit the {state.dmvName} website or consult local law enforcement.
              </p>
              <Link
                href={`/window-tint-laws-by-state/${state.slug}`}
                className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors"
              >
                View Complete {state.name} Tint Law Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-amber-500 px-6 py-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-white" />
                <h3 className="text-white font-bold text-lg">{state.name} VLT Limits</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { label: "Windshield", value: state.tintLaws.windshield, desc: "Top strip / AS-1 line" },
                  { label: "Front Side Windows", value: state.tintLaws.frontSide, desc: "Driver & passenger" },
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
              <div className="px-6 py-4 bg-amber-50">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700"><strong>Without an exemption:</strong> {state.penalty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Qualifying Conditions */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-4">
            Qualifying Medical Conditions in {state.name}
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
            The following medical conditions are commonly recognized for window tint medical exemptions in {state.name}. A licensed physician must certify that your specific condition requires protection from sunlight, UV radiation, or bright light to qualify for an exemption.
          </p>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Not sure if your condition qualifies? Visit our <Link href="/conditions" className="text-amber-600 font-semibold hover:underline">qualifying conditions guide</Link> for detailed information about each condition and how it relates to window tint exemptions, or <Link href="/get-started" className="text-amber-600 font-semibold hover:underline">start your evaluation</Link> and let our physician determine your eligibility.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.qualifyingConditions.map((condition) => {
              const condData = CONDITIONS.find(
                (c) => condition.toLowerCase().includes(c.slug.replace(/-/g, " ")) ||
                  c.name.toLowerCase().includes(condition.toLowerCase().split(" ")[0])
              );
              const href = condData ? `/conditions/${condData.slug}` : "/conditions";
              return (
                <Link
                  key={condition}
                  href={href}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all group"
                >
                  <HeartPulse className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-700 font-semibold text-sm group-hover:text-amber-700 transition-colors block">{condition}</span>
                    {condData && (
                      <span className="text-gray-400 text-xs mt-1 block line-clamp-2">{condData.description.slice(0, 100)}...</span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* H2: Required Documentation */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Documentation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-6">
            Required Documentation &amp; Official Forms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-heading mb-3">What You Provide</h3>
              <p className="text-xs text-gray-500 mb-4">Existing documentation from your family doctor or eye doctor to support your medical need.</p>
              <ul className="space-y-3">
                {[
                  "Prior diagnosis of a qualifying condition",
                  "Medication list from your doctor",
                  "Doctor's notes or medical records showing your condition",
                  "Any existing documentation of light sensitivity or related symptoms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-4">You can obtain these from your family physician or eye doctor. Some eye doctors may even provide tint exemption paperwork directly, but most do not — which is where MyEyeRx comes in.</p>
            </div>
            <div className="bg-surface rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-heading mb-3">What {state.name} Requires</h3>
              <p className="text-xs text-gray-500 mb-4">The state&apos;s requirements for a valid medical exemption — MyEyeRx handles this part.</p>
              <ul className="space-y-3">
                {[
                  `A completed ${state.formName} signed by a licensed physician`,
                  "Physician certification of your qualifying medical condition",
                  "The signed exemption kept in your vehicle at all times",
                  "Ability to present documentation during traffic stops",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h3 className="text-lg font-bold text-heading mb-3">What MyEyeRx Does</h3>
              <p className="text-xs text-amber-700 mb-4">Our physicians review your medical documentation and, if there is sufficient evidence, sign your exemption form.</p>
              <ul className="space-y-3">
                {[
                  "Reviews your existing medical documentation",
                  `Completes and signs your ${state.formName} if you qualify`,
                  "Delivered digitally within 24-48 hours",
                  `Formatted to meet ${state.name}'s specific legal requirements`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <BadgeCheck className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-amber-600 mt-4 font-medium">Our doctors do not diagnose or prescribe — they evaluate your documented medical history and provide exemption recommendations when medically justified.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {state.formUrl && (
              <a
                href={state.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
              >
                <FileText className="w-4 h-4" /> Download Official {state.formName} (PDF)
              </a>
            )}
            <a
              href={state.dmvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Visit {state.dmvName}
            </a>
          </div>
        </div>
      </section>

      {/* H2: After You Get Your Exemption */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-6">
            After You Receive Your {state.name} Exemption
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-heading mb-2">Keep Your Certificate in Your Vehicle</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once you receive your {state.formName}, print it and keep it in your glove compartment or another easily accessible location. {state.name} law requires you to present your medical exemption documentation if asked by law enforcement during a traffic stop. Having it readily available ensures a smooth interaction.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-heading mb-2">Get Your Windows Tinted</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With your exemption in hand, visit any window tint shop in {state.name} and request the tint level your physician has authorized. Most tint professionals are familiar with medical exemptions and will be happy to accommodate your request. Be sure to show them your {state.formName} so they know the tint level is legally authorized.
              </p>
              {unique && (
                <p className="text-amber-700 bg-amber-50 rounded-lg p-3 text-sm mt-3 leading-relaxed">
                  <strong>Pro Tip:</strong> {unique.tip}
                </p>
              )}
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-heading mb-2">Renewal &amp; Expiration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your {state.name} window tint medical exemption is valid for {state.exemptionDuration.toLowerCase()}. We recommend starting the renewal process 30 days before your exemption expires to maintain continuous legal coverage. MyEyeRx can handle renewals through the same simple online process — you will not need to start from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Why Choose MyEyeRx */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-4">
            Why Choose MyEyeRx for Your {state.name} Exemption?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            MyEyeRx is a HIPAA-compliant telehealth service specializing in window tint medical exemptions, backed by a licensed optometrist and serving patients across 42 states.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Stethoscope, title: "Licensed Physician Evaluation", desc: `Every evaluation is overseen by Dr. Elizabeth Borowiec, OD — a licensed, NPI-verified optometrist with expertise in photosensitive conditions. Your ${state.formName} is signed by a real, credentialed physician.` },
              { icon: Shield, title: "HIPAA Compliant & Secure", desc: "Your medical information is protected by HIPAA-compliant security protocols. We never share your health data with third parties, and all communications are encrypted." },
              { icon: Clock, title: "24-48 Hour Turnaround", desc: `Complete your evaluation from home and receive your signed ${state.name} exemption certificate within 24-48 hours. No waiting weeks for a doctor's appointment.` },
              { icon: Award, title: "Serving 42 States", desc: `MyEyeRx serves patients in 42 states including ${state.name}. Our physicians understand state-specific exemption requirements and ensure your documentation meets ${state.name}'s standards.` },
              { icon: Phone, title: "Real Human Support", desc: "Have questions about the process? Call us at (734) 644-1804 or email Tory@myeyerx.net. We provide real, personalized support — not chatbots." },
              { icon: BadgeCheck, title: "Transparent Pricing", desc: `The ${state.name} evaluation fee is $${state.price} — one time, no hidden charges, no subscription. This includes the physician evaluation, medical review, and your signed exemption certificate.` },
            ].map((item) => (
              <div key={item.title} className="bg-surface rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-base font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: FAQ */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-12">
            {state.name} Tint Exemption FAQ
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="text-heading font-semibold text-sm pr-4">{faq.q}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={`py-16 lg:py-20 ${state.served ? "bg-amber-500" : "bg-gray-700"}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {state.served ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Ready to Get Your {state.name} Exemption?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                Connect with a licensed physician online and receive your signed {state.formName} within 24-48 hours. No office visit required.
              </p>
              <Link
                href={`/get-started?state=${state.slug}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-amber-900 bg-white hover:bg-amber-50 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Start Your Application — ${state.price} <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/70 text-xs mt-4 flex items-center justify-center gap-4">
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> HIPAA Compliant</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 24-48hr Turnaround</span>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {state.name} Coming Soon
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                We are actively working to bring licensed physicians to {state.name}. Contact us to be notified when service becomes available.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-gray-900 bg-white hover:bg-gray-50 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Get Notified <ArrowRight className="w-5 h-5" />
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Nearby States + Conditions Internal Linking */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Nearby State Exemptions */}
            <div>
              <h2 className="text-xl font-bold text-heading mb-6">Nearby State Tint Exemptions</h2>
              <div className="space-y-2">
                {nearbyStates.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}-window-tint-medical-exemption`}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all group"
                  >
                    <span className="text-sm text-gray-700 font-medium group-hover:text-amber-700 transition-colors">
                      {s.name} Window Tint Exemption
                    </span>
                    <span className="text-xs text-gray-400 font-bold">{s.abbreviation}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/" className="text-sm text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                  View all 50 states →
                </Link>
              </div>
            </div>

            {/* Qualifying Conditions Links */}
            <div>
              <h2 className="text-xl font-bold text-heading mb-6">Qualifying Conditions</h2>
              <div className="space-y-2">
                {CONDITIONS.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/conditions/${c.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all group"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium group-hover:text-amber-700 transition-colors">{c.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/conditions" className="text-sm text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                  View all conditions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
