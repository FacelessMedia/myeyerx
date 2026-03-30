import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CONDITIONS, STATES, getConditionBySlug } from "@/data/states";
import { getArticlesForCondition } from "@/data/articles";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Eye,
  AlertCircle,
  Stethoscope,
  FileText,
  Phone,
  BadgeCheck,
  HeartPulse,
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
    title: `Window Tint Exemption for ${condition.name} | MyEyeRx`,
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

  const servedStates = STATES.filter((s) => s.served);
  const relatedArticles = getArticlesForCondition(condition.slug);
  const pageUrl = `https://myeyerx.net/conditions/${condition.slug}`;

  const faqItems = [
    {
      q: `Can I get a window tint exemption for ${condition.name.toLowerCase()}?`,
      a: `Yes. ${condition.name} is recognized as a qualifying condition for window tint medical exemptions in most U.S. states. A licensed physician must certify that your ${condition.name.toLowerCase()} requires protection from sunlight or UV radiation through darker vehicle window tint.`,
    },
    {
      q: `How does ${condition.name.toLowerCase()} qualify for a tint exemption?`,
      a: `${condition.howItRelates} A licensed physician evaluates the severity of your condition and determines whether darker window tint is medically necessary for your safety and well-being while driving.`,
    },
    {
      q: `What documentation do I need for a ${condition.name.toLowerCase()} tint exemption?`,
      a: `You need a medical exemption certificate signed by a licensed physician who has evaluated your ${condition.name.toLowerCase()}. The certificate must specify your medical condition and be carried in your vehicle at all times. MyEyeRx handles the entire documentation process online.`,
    },
    {
      q: `How much does a tint exemption for ${condition.name.toLowerCase()} cost?`,
      a: `Through MyEyeRx, the online physician evaluation starts at $225, depending on your state. This one-time fee includes the physician evaluation, medical documentation review, and your signed exemption certificate delivered within 24-48 hours.`,
    },
    {
      q: `Can I get the evaluation for ${condition.name.toLowerCase()} online?`,
      a: `Yes. MyEyeRx provides a fully online telehealth evaluation. You complete a medical questionnaire from home, a licensed physician reviews your information, and if approved, your signed exemption certificate is delivered digitally within 24-48 hours. No in-office visit is required.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `Window Tint Exemption for ${condition.name}`,
    description: condition.metaDescription,
    url: pageUrl,
    dateModified: "2026-03-28",
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
      telephone: "(734) 644-1804",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myeyerx.net" },
        { "@type": "ListItem", position: 2, name: "Conditions", item: "https://myeyerx.net/conditions" },
        { "@type": "ListItem", position: 3, name: condition.name, item: pageUrl },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
          <p className="text-gray-600 text-lg leading-relaxed mb-4">{condition.description}</p>
          <p className="text-gray-600 leading-relaxed mb-8">
            If you have been diagnosed with {condition.name.toLowerCase()}, you may qualify for a medical window tint exemption in your state. This exemption allows you to legally have darker window tint on your vehicle to protect against sunlight, UV radiation, and glare that can worsen your condition. MyEyeRx provides a fast, fully online physician evaluation — no office visit required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Get Evaluated Now — Starting at $225 <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+17346441804"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-amber-400 transition-all"
            >
              <Phone className="w-4 h-4" /> Call (734) 644-1804
            </a>
          </div>

          {/* Author / Reviewer Byline */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white flex-shrink-0"><Image src="/tory.jpg" alt="Toriano Dewberry" width={40} height={40} className="w-full h-full object-cover" /></div>
              <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">EB</div>
            </div>
            <div className="text-xs text-gray-500 leading-relaxed">
              <span>Written by <Link href="/about" className="text-amber-600 font-semibold hover:underline">Toriano Dewberry</Link></span>
              <span className="mx-1">&middot;</span>
              <span>Reviewed by <a href="https://www.linkedin.com/in/elizabeth-borowiec-02a5b9293/" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:underline">Dr. Elizabeth Borowiec, OD</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Symptoms & How It Relates */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Symptoms */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-6">
                Common {condition.name} Symptoms
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The following symptoms are commonly associated with {condition.name.toLowerCase()} and may contribute to your eligibility for a window tint medical exemption. If you experience one or more of these symptoms, especially while driving or exposed to sunlight, you may benefit from darker vehicle window tint.
              </p>
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
                    "Blocks up to 99% of harmful UV radiation entering the vehicle",
                    "Significantly reduces glare and bright light exposure while driving",
                    "Provides consistent, passive protection without requiring additional gear",
                    "Medically documented and physician-approved for legal compliance",
                    "Helps prevent symptom flare-ups triggered by sunlight exposure",
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

      {/* H2: The Exemption Process */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-6">
            How to Get a Tint Exemption for {condition.name}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Getting a window tint medical exemption for {condition.name.toLowerCase()} is straightforward with MyEyeRx. Our licensed physicians specialize in evaluating light-sensitive conditions and understand the documentation requirements for each state. Here is how the process works:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: 1, icon: Eye, title: "Complete Your Questionnaire", desc: `Tell us about your ${condition.name.toLowerCase()} diagnosis, symptoms, and how light sensitivity affects your daily life and driving. This takes about 5-10 minutes.` },
              { step: 2, icon: Stethoscope, title: "Physician Review", desc: `A licensed physician — overseen by Dr. Elizabeth Borowiec, OD — reviews your medical information and determines if your ${condition.name.toLowerCase()} qualifies for a tint exemption in your state.` },
              { step: 3, icon: FileText, title: "Receive Your Certificate", desc: "Once approved, your signed medical exemption certificate is delivered digitally within 24-48 hours. Print it and keep it in your vehicle." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">Step {item.step}</div>
                <h3 className="text-base font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Start Your Evaluation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* H2: Why Choose MyEyeRx */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-4">
            Why Choose MyEyeRx for Your {condition.name} Exemption?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            MyEyeRx specializes in window tint medical exemptions, serving patients with {condition.name.toLowerCase()} and other light-sensitive conditions across 42 states.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Stethoscope, title: "Specialized Physicians", desc: `Our licensed physicians are experienced in evaluating ${condition.name.toLowerCase()} and other photosensitive conditions. Dr. Elizabeth Borowiec, OD, oversees every evaluation.` },
              { icon: Shield, title: "HIPAA Compliant", desc: "Your medical information is protected by HIPAA-compliant security protocols. We never share your health data with third parties." },
              { icon: Clock, title: "24-48 Hour Turnaround", desc: "Complete your evaluation from home and receive your signed exemption certificate within 24-48 hours. No waiting weeks for a doctor's appointment." },
              { icon: BadgeCheck, title: "State-Specific Documentation", desc: "Your exemption certificate is formatted to meet your specific state's requirements, ensuring it's accepted by law enforcement and the DMV." },
              { icon: Phone, title: "Real Human Support", desc: "Questions? Call (734) 644-1804 or email Tory@myeyerx.net. We provide real, personalized support — not chatbots." },
              { icon: HeartPulse, title: "We Understand Your Condition", desc: `We know how ${condition.name.toLowerCase()} affects your daily life. Our physicians take your symptoms seriously and provide thorough, compassionate evaluations.` },
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
            {condition.name} Tint Exemption FAQ
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

      {/* H2: Get Your Exemption by State */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-4">
            Get Your {condition.name} Tint Exemption by State
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            {condition.name} is recognized as a qualifying condition for window tint medical exemptions across the United States. MyEyeRx currently serves {servedStates.length} states. Select your state below to learn about the specific process, required forms, and pricing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {STATES.filter((s) => s.served).map((state) => (
              <Link
                key={state.slug}
                href={`/${state.slug}-window-tint-medical-exemption`}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all text-sm font-medium text-gray-700 hover:text-amber-700"
              >
                <span>{state.name}</span>
                <span className="text-xs text-gray-400 font-bold">${state.price}</span>
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-xs text-center mt-6">
            Don&apos;t see your state? We are expanding our provider network. <Link href="/contact" className="text-amber-600 font-semibold hover:underline">Contact us</Link> to be notified when we add your state.
          </p>
        </div>
      </section>

      {/* H2: Related Resources */}
      {relatedArticles.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-4">
              Helpful Resources for {condition.name}
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Learn more about managing light sensitivity and protecting yourself with these in-depth guides.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="bg-surface rounded-2xl border border-gray-100 p-5 hover:border-amber-300 hover:shadow-md transition-all group flex flex-col"
                >
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{article.category}</span>
                  <h3 className="font-bold text-heading text-sm mt-2 mb-2 group-hover:text-amber-600 transition-colors leading-snug flex-1">
                    {article.title}
                  </h3>
                  <span className="text-amber-600 text-xs font-semibold flex items-center gap-1 mt-auto">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* H2: Other Qualifying Conditions */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-heading mb-4">Other Qualifying Conditions</h2>
          <p className="text-gray-600 text-sm mb-6">
            In addition to {condition.name.toLowerCase()}, several other medical conditions may qualify you for a window tint exemption. Learn more about each condition:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CONDITIONS.filter((c) => c.slug !== condition.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all group"
              >
                <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-700 font-semibold text-sm group-hover:text-amber-700 transition-colors block">{c.name}</span>
                  <span className="text-gray-400 text-xs mt-1 block line-clamp-2">{c.description.slice(0, 80)}...</span>
                </div>
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
            Connect with a licensed physician online who can evaluate your {condition.name.toLowerCase()} and provide the medical documentation you need. No office visit required.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-amber-900 bg-white hover:bg-amber-50 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Evaluation — Starting at $225 <ArrowRight className="w-5 h-5" />
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
