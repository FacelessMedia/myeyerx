import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { STATES, getStateBySlug, CONDITIONS } from "@/data/states";
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

  const title = `${state.name} Window Tint Medical Exemption`;
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${state.name} Window Tint Medical Exemption`,
    description: state.metaDescription,
    url: `https://myeyerx.net/${state.slug}-window-tint-medical-exemption`,
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
        { "@type": "ListItem", position: 2, name: `${state.name} Window Tint Medical Exemption`, item: `https://myeyerx.net/${state.slug}-window-tint-medical-exemption` },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do I get a window tint medical exemption in ${state.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `To get a window tint medical exemption in ${state.name}, you need a licensed physician to certify your medical condition requires darker tint. MyEyeRx connects you with a licensed physician online who can evaluate your condition and provide the necessary ${state.formName} documentation.` },
      },
      {
        "@type": "Question",
        name: `What medical conditions qualify for a tint exemption in ${state.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `${state.name} recognizes conditions including photosensitivity, lupus (SLE), melanoma/skin cancer, chronic migraines, post-surgical eye conditions, and other documented light-sensitive conditions.` },
      },
      {
        "@type": "Question",
        name: `What are the window tint laws in ${state.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `${state.name} tint laws: Windshield - ${state.tintLaws.windshield}; Front side windows - ${state.tintLaws.frontSide}; Back side windows - ${state.tintLaws.backSide}; Rear window - ${state.tintLaws.rearWindow}. With a medical exemption, darker tint may be permitted.` },
      },
      {
        "@type": "Question",
        name: `How long does a ${state.name} window tint exemption last?`,
        acceptedAnswer: { "@type": "Answer", text: `In ${state.name}, the window tint medical exemption duration is: ${state.exemptionDuration}. Check your documentation for the specific expiration date.` },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Get a Window Tint Medical Exemption in ${state.name}`,
    description: `Step-by-step guide to obtaining a medical window tint exemption in ${state.name} through MyEyeRx.`,
    step: [
      { "@type": "HowToStep", position: 1, name: "Start Your Application", text: `Select ${state.name} and begin your online evaluation.` },
      { "@type": "HowToStep", position: 2, name: "Complete Physician Evaluation", text: "A licensed physician reviews your medical history and condition." },
      { "@type": "HowToStep", position: 3, name: "Receive Your Certificate", text: `Once approved, you receive your signed ${state.formName} within 24-48 hours.` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

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

      {/* Hero */}
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
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{state.processSummary}</p>

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
                    Get Your {state.abbreviation} Exemption <ArrowRight className="w-5 h-5" />
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
            <div className="lg:col-span-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-4">
            How to Get Your {state.name} Exemption
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our simple 3-step process connects you with a licensed physician who can evaluate your condition and provide the documentation you need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, icon: Eye, title: "Start Your Application", description: `Select ${state.name} as your state and fill out a brief medical questionnaire about your condition and symptoms.` },
              { step: 2, icon: Stethoscope, title: "Physician Evaluation", description: "A licensed physician reviews your medical information and determines if you qualify for a window tint medical exemption." },
              { step: 3, icon: FileText, title: "Receive Your Certificate", description: `Once approved, your signed ${state.formName} is delivered within 24-48 hours, ready to carry in your vehicle.` },
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

      {/* Tint Laws */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Tint Regulations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-4">{state.name} Window Tint Laws</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {state.name} regulates the darkness of vehicle window tint measured by Visible Light Transmission (VLT) percentage. Lower VLT means darker tint. With a medical exemption, you may be permitted darker tint than these standard limits.
              </p>
              <Link
                href={`/window-tint-laws-by-state/${state.slug}`}
                className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors"
              >
                View Full {state.name} Tint Laws <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-amber-500 px-6 py-4">
                <h3 className="text-white font-bold text-lg">{state.name} VLT Limits</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { label: "Windshield", value: state.tintLaws.windshield },
                  { label: "Front Side Windows", value: state.tintLaws.frontSide },
                  { label: "Back Side Windows", value: state.tintLaws.backSide },
                  { label: "Rear Window", value: state.tintLaws.rearWindow },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between px-6 py-4">
                    <span className="text-gray-600 font-medium text-sm">{row.label}</span>
                    <span className="text-heading font-bold text-sm">{row.value}</span>
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

      {/* Qualifying Conditions */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-4">
            Qualifying Medical Conditions in {state.name}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            The following conditions are commonly recognized for medical window tint exemptions. A licensed physician must certify that your condition requires UV or light protection.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.qualifyingConditions.map((condition) => {
              const condData = CONDITIONS.find(
                (c) => condition.toLowerCase().includes(c.slug.replace(/-/g, " ")) ||
                  c.name.toLowerCase().includes(condition.toLowerCase().split(" ")[0])
              );
              const href = condData ? `/conditions/${condData.slug}` : "/get-started";
              return (
                <Link
                  key={condition}
                  href={href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all group"
                >
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm group-hover:text-amber-700 transition-colors">{condition}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-12">
            {state.name} Tint Exemption FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: `How do I get a window tint medical exemption in ${state.name}?`,
                a: `To get a window tint medical exemption in ${state.name}, you need a licensed physician to certify your medical condition requires darker tint. MyEyeRx connects you with a licensed physician online who can evaluate your condition and provide the necessary ${state.formName} documentation. The entire process can be completed online in minutes.`,
              },
              {
                q: `What medical conditions qualify for a tint exemption in ${state.name}?`,
                a: `${state.name} recognizes conditions including photosensitivity, lupus (SLE), melanoma/skin cancer, chronic migraines, post-surgical eye conditions (LASIK, cataract surgery), xeroderma pigmentosum, porphyria, albinism, and other documented light-sensitive conditions.`,
              },
              {
                q: `How long does a ${state.name} window tint exemption last?`,
                a: `In ${state.name}, the window tint medical exemption duration is: ${state.exemptionDuration}. We recommend starting the renewal process before it expires to maintain continuous coverage.`,
              },
              {
                q: `What happens if I get pulled over with dark tint in ${state.name}?`,
                a: `Without a valid medical exemption, illegal window tint in ${state.name} can result in: ${state.penalty}. If you have a valid medical exemption, keep your ${state.formName} in your vehicle at all times.`,
              },
              {
                q: `How much does a ${state.name} tint exemption cost through MyEyeRx?`,
                a: `The online physician evaluation for a ${state.name} window tint medical exemption through MyEyeRx is $${state.price}. This includes the physician evaluation, medical documentation, and your signed exemption certificate delivered within 24-48 hours.`,
              },
            ].map((faq, i) => (
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
                Connect with a licensed physician online and receive your signed {state.formName} within 24-48 hours.
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

      {/* Related States (internal linking) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-heading mb-6">Window Tint Exemptions in Other States</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {STATES.filter((s) => s.slug !== state.slug).slice(0, 12).map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}-window-tint-medical-exemption`}
                className="text-sm text-gray-600 hover:text-amber-600 font-medium py-2 px-3 rounded-lg hover:bg-amber-50 transition-all"
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/" className="text-sm text-amber-600 font-semibold hover:text-amber-700 transition-colors">
              View all 50 states →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
