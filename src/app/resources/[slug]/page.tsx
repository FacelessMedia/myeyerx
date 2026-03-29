import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES, getArticleBySlug } from "@/data/articles";
import { STATES, CONDITIONS } from "@/data/states";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  User,
  BookOpen,
  CheckCircle,
  Shield,
  Phone,
  MapPin,
  DollarSign,
  FileText,
  AlertTriangle,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://myeyerx.net/resources/${article.slug}`,
      siteName: "MyEyeRx",
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author],
    },
    alternates: {
      canonical: `https://myeyerx.net/resources/${article.slug}`,
    },
  };
}

/* ───── helper: top served states for internal linking ───── */
const topStates = STATES.filter((s) => s.served).slice(0, 12);

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      url: `https://myeyerx.net/resources/${article.slug}`,
      author: { "@type": "Person", name: article.author, jobTitle: article.authorTitle },
      publisher: {
        "@type": "Organization",
        name: "MyEyeRx",
        url: "https://myeyerx.net",
        logo: { "@type": "ImageObject", url: "https://myeyerx.net/logo.png" },
      },
      datePublished: article.publishedDate,
      dateModified: article.updatedDate,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myeyerx.net" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://myeyerx.net/resources" },
        { "@type": "ListItem", position: 3, name: article.title, item: `https://myeyerx.net/resources/${article.slug}` },
      ],
    },
  ];

  /* Related articles (exclude current) */
  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/resources" className="hover:text-amber-600 transition-colors">Resources</Link></li>
            <li>/</li>
            <li className="text-heading font-medium truncate max-w-[200px]">{article.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {article.author}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {article.readTime}</span>
            <span>Updated {article.updatedDate}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Medically reviewed by {article.reviewer}, {article.reviewerTitle}
          </p>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none prose-headings:text-heading prose-headings:font-extrabold prose-a:text-amber-600 prose-a:font-semibold">
            {slug === "complete-guide-to-window-tint-medical-exemptions" && <CompleteGuideContent />}
            {slug === "how-to-get-tint-exemption-online" && <HowToGetContent />}
            {slug === "states-that-allow-window-tint-exemptions" && <StatesAllowContent />}
            {slug === "window-tint-exemption-cost" && <CostGuideContent />}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-8 lg:p-10 border border-amber-200 text-center">
            <h2 className="text-2xl font-extrabold text-heading mb-3">Ready to Get Your Medical Exemption?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Connect with a licensed physician for an online evaluation. Certificates delivered in 24-48 hours.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md"
            >
              Start Your Evaluation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Author box */}
          <div className="mt-12 bg-surface rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="font-bold text-heading text-sm">{article.author}</p>
              <p className="text-gray-500 text-xs mb-2">{article.authorTitle}</p>
              <p className="text-gray-600 text-sm">
                Toriano Dewberry is the founder and CEO of MyEyeRx, bringing his expertise as a licensed optician to help patients access medical window tint exemptions through telehealth.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-heading mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow group"
                >
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{r.category}</span>
                  <h3 className="text-heading font-bold mt-2 mb-2 group-hover:text-amber-600 transition-colors">{r.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{r.excerpt}</p>
                  <span className="text-amber-600 text-sm font-semibold mt-3 inline-flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   ARTICLE CONTENT COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function CompleteGuideContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        If you suffer from a medical condition that makes you sensitive to sunlight or UV radiation, you may qualify for a <strong>medical window tint exemption</strong> that allows your vehicle windows to be tinted darker than your state normally permits. This comprehensive guide covers everything you need to know about the process, from qualifying conditions to state-by-state requirements to what happens after you receive your certificate.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <h3 className="font-bold text-heading text-lg mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-amber-500" /> What You&apos;ll Learn in This Guide</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["What medical tint exemptions are and how they work", "Which medical conditions qualify", "State-by-state requirements and processes", "How to apply online through telehealth", "Costs and what's included", "How to use your exemption certificate", "Renewal requirements", "Frequently asked questions"].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>What Is a Medical Window Tint Exemption?</h2>
      <p>
        A medical window tint exemption is an official document — typically signed by a licensed physician — that certifies you have a medical condition requiring additional protection from sunlight or UV radiation while in your vehicle. This certificate allows you to have your vehicle&apos;s windows tinted darker than the standard Visible Light Transmission (VLT) limits set by your state.
      </p>
      <p>
        Every U.S. state has laws regulating how dark vehicle window tint can be. These laws are measured in VLT — the percentage of visible light that passes through the tint. For example, a state might require front side windows to allow at least 35% VLT. With a medical exemption, you may be permitted to go darker, sometimes significantly so, depending on your state&apos;s regulations.
      </p>
      <p>
        The exemption is not a &quot;loophole&quot; or a way to bypass the law — it&apos;s a legitimate medical accommodation, similar to a handicap parking permit. It&apos;s designed to protect people with genuine medical conditions that make normal sun exposure dangerous or debilitating while driving.
      </p>

      <h2>Which Medical Conditions Qualify?</h2>
      <p>
        While specific qualifying conditions vary by state, most states recognize conditions that cause photosensitivity (sensitivity to light) or an increased vulnerability to UV radiation. The most commonly accepted conditions include:
      </p>

      <h3>Photosensitivity Disorders</h3>
      <p>
        <strong>Photosensitivity</strong> is an abnormal sensitivity to light, particularly sunlight and UV radiation. People with photosensitivity may experience pain, burning, rashes, or other adverse reactions when exposed to sunlight. This is one of the most widely recognized qualifying conditions across all states.
      </p>

      <h3>Lupus (Systemic Lupus Erythematosus)</h3>
      <p>
        <strong>Lupus</strong> causes the immune system to attack healthy tissue, and UV exposure is a known trigger for flares. Lupus patients often experience the classic &quot;butterfly rash&quot; across the face, joint pain, and fatigue — all of which can be triggered or worsened by sunlight. The Lupus Foundation of America recommends comprehensive UV protection, including vehicle window tint.
      </p>

      <h3>Migraines with Photophobia</h3>
      <p>
        Sunlight is one of the most common <strong>migraine</strong> triggers. For people with chronic migraines accompanied by photophobia (light sensitivity), driving in bright conditions can trigger debilitating episodes. Medical window tint reduces light entering the vehicle, helping prevent migraine attacks while driving.
      </p>

      <h3>Melanoma and Skin Cancer</h3>
      <p>
        Patients with a history of <strong>melanoma</strong> or other skin cancers need maximum UV protection at all times, including while driving. Dermatologists frequently recommend window tint as part of a comprehensive sun protection strategy for cancer patients and survivors.
      </p>

      <h3>Post-Surgical Eye Conditions (LASIK, Cataract Surgery)</h3>
      <p>
        After eye surgeries like <strong>LASIK</strong>, cataract removal, or corneal procedures, patients often experience increased light sensitivity that can last months or longer. Window tint provides ongoing protection during the healing period.
      </p>

      <h3>Other Qualifying Conditions</h3>
      <ul>
        <li><strong>Xeroderma Pigmentosum (XP)</strong> — A rare genetic condition where the body cannot repair UV damage</li>
        <li><strong>Porphyria</strong> — A group of disorders causing extreme sunlight sensitivity</li>
        <li><strong>Albinism</strong> — Reduced melanin production causing extreme sun sensitivity</li>
        <li><strong>Rosacea with photosensitivity</strong> — Chronic skin condition triggered by sunlight</li>
        <li><strong>Astigmatism with significant glare sensitivity</strong> — Causing dangerous driving conditions</li>
      </ul>
      <p>
        <Link href="/conditions" className="text-amber-600 font-semibold hover:underline">See our full list of qualifying conditions →</Link>
      </p>

      <h2>State-by-State Requirements</h2>
      <p>
        Each state has its own regulations governing medical tint exemptions. Some states have very specific forms that must be completed, while others accept a general physician&apos;s letter. Key differences between states include:
      </p>
      <ul>
        <li><strong>Required documentation</strong> — Some states have specific forms (like New York&apos;s MV-80W), while others accept any physician&apos;s letter</li>
        <li><strong>Exemption duration</strong> — Ranges from 1 year to permanent, depending on the state</li>
        <li><strong>Who can certify</strong> — Most states require an MD or DO, some accept optometrists</li>
        <li><strong>How dark you can go</strong> — Some states allow any darkness with an exemption, others still set minimums</li>
        <li><strong>Carry requirements</strong> — Most states require you to keep the exemption certificate in the vehicle</li>
      </ul>
      <p>
        <Link href="/window-tint-laws-by-state" className="text-amber-600 font-semibold hover:underline">Check your state&apos;s specific tint laws and exemption requirements →</Link>
      </p>

      <div className="bg-surface rounded-xl p-6 border border-gray-200 not-prose my-8">
        <h3 className="font-bold text-heading mb-4">Popular State Exemption Pages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {topStates.map((s) => (
            <Link key={s.slug} href={`/${s.slug}-window-tint-medical-exemption`} className="text-sm text-amber-600 font-medium hover:underline py-1">
              {s.name} Exemption →
            </Link>
          ))}
        </div>
      </div>

      <h2>How to Apply for a Medical Window Tint Exemption Online</h2>
      <p>
        Traditionally, getting a medical tint exemption required an in-person visit to your doctor, then a trip to the DMV. Today, telehealth has simplified this process dramatically. Here&apos;s how it works with MyEyeRx:
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          { step: "1", title: "Select Your State", desc: "Visit myeyerx.net and choose your state. We'll show you the specific requirements and pricing for your state." },
          { step: "2", title: "Complete Medical Questionnaire", desc: "Answer questions about your medical condition, symptoms, and how sunlight affects your daily life. This takes about 10-15 minutes." },
          { step: "3", title: "Physician Review", desc: "A licensed physician (Dr. Elizabeth Rose Borowiec, OD) reviews your case. This is a real medical evaluation, not a rubber stamp." },
          { step: "4", title: "Receive Your Certificate", desc: "If approved, your signed exemption certificate is delivered by email within 24-48 hours. Print it and keep it in your vehicle." },
        ].map((s) => (
          <div key={s.step} className="flex items-start gap-4 bg-surface rounded-xl p-5 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 font-extrabold">{s.step}</span>
            </div>
            <div>
              <p className="font-bold text-heading text-sm">{s.title}</p>
              <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>How Much Does a Medical Tint Exemption Cost?</h2>
      <p>
        The cost of a medical window tint exemption varies by provider and state. At MyEyeRx, pricing is based on your state&apos;s requirements:
      </p>
      <ul>
        <li><strong>$225</strong> — Arkansas, Idaho, Illinois, Michigan, Minnesota, New Mexico, Oregon, South Carolina, Texas, Washington, West Virginia, Wisconsin</li>
        <li><strong>$250</strong> — Alabama, Arizona, California, Connecticut, Delaware, Florida, Georgia, Indiana, Iowa, Kansas, Louisiana, Maine, Maryland, Massachusetts, Mississippi, Missouri, Montana, Nevada, New Hampshire, New Jersey, North Carolina, Ohio, Oklahoma, Pennsylvania, Rhode Island, Tennessee, Vermont, Virginia, DC</li>
        <li><strong>$350</strong> — New York</li>
      </ul>
      <p>
        This is a one-time fee that includes the physician evaluation, the signed exemption certificate, and delivery. There are no hidden fees, subscription costs, or renewal charges (though some states require periodic renewal, which would be a separate evaluation).
      </p>
      <p>
        <Link href="/resources/window-tint-exemption-cost" className="text-amber-600 font-semibold hover:underline">Read our detailed pricing guide →</Link>
      </p>

      <h2>What to Do After You Receive Your Exemption Certificate</h2>
      <p>Once your exemption certificate is delivered:</p>
      <ol>
        <li><strong>Print two copies</strong> — Keep one in your vehicle at all times and one at home as backup</li>
        <li><strong>Register with your DMV</strong> (if required) — Some states require you to register the exemption. Check your state&apos;s requirements.</li>
        <li><strong>Get your windows tinted</strong> — Take the certificate to a reputable tint shop. They may want to see it before applying darker tint.</li>
        <li><strong>Keep it in the vehicle</strong> — If you&apos;re pulled over, you&apos;ll need to present the certificate to law enforcement</li>
        <li><strong>Know the renewal date</strong> — If your state requires renewal, set a reminder before it expires</li>
      </ol>

      <h2>What Happens If You Get Pulled Over?</h2>
      <p>
        If a law enforcement officer pulls you over for window tint that appears to exceed legal limits:
      </p>
      <ol>
        <li>Stay calm and cooperative</li>
        <li>Inform the officer that you have a medical exemption</li>
        <li>Present your exemption certificate (this is why you keep it in the vehicle)</li>
        <li>The officer may still check your tint with a meter, but your certificate should resolve any issue</li>
      </ol>
      <p>
        In some states, if you receive a citation despite having a valid exemption, you can typically have it dismissed by presenting your certificate in court. However, this situation is rare when you keep the certificate readily accessible.
      </p>

      <h2>Exemption Renewal Requirements</h2>
      <p>
        Renewal requirements vary significantly by state:
      </p>
      <ul>
        <li><strong>Annual renewal</strong> — Some states require yearly re-certification</li>
        <li><strong>Biennial (every 2 years)</strong> — Several states use this timeline</li>
        <li><strong>Permanent</strong> — Some states issue permanent exemptions for chronic conditions</li>
        <li><strong>Condition-dependent</strong> — Some states issue permanent exemptions for permanent conditions but require renewal for temporary ones</li>
      </ul>
      <p>
        Your exemption certificate will indicate its validity period. If renewal is required, you&apos;ll need a new physician evaluation — the process is the same as the initial application.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Is a medical tint exemption the same as a tint prescription?</h3>
      <p>
        The terms are often used interchangeably, but technically a &quot;tint exemption&quot; or &quot;tint waiver&quot; is the more accurate term. It&apos;s a medical certification that exempts you from standard tint laws — not a prescription for a specific product.
      </p>

      <h3>Can I get an exemption for cosmetic reasons?</h3>
      <p>
        No. Medical tint exemptions are strictly for documented medical conditions. Wanting darker tint for privacy, aesthetics, or general comfort does not qualify. A physician must certify that you have a legitimate medical need.
      </p>

      <h3>Will my exemption work in other states?</h3>
      <p>
        Generally, medical tint exemptions are state-specific. However, many states have reciprocity agreements or will accept out-of-state exemptions. If you drive frequently in multiple states, consider getting an exemption in each state you regularly visit.
      </p>

      <h3>Can I transfer my exemption to a new vehicle?</h3>
      <p>
        In most states, the exemption is issued to the person, not the vehicle. This means it applies to any vehicle you drive. However, some states tie the exemption to a specific vehicle registration. Check your state&apos;s specific rules.
      </p>

      <h3>How dark can I go with a medical exemption?</h3>
      <p>
        This depends on your state. Some states allow any darkness level with a valid exemption, while others still set minimums (e.g., 20% VLT even with an exemption). Your physician&apos;s recommendation and your state&apos;s regulations both factor in.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult with a licensed healthcare provider regarding your specific medical condition and treatment options. Window tint exemption requirements vary by state and are subject to change.
        </p>
      </div>
    </>
  );
}

function HowToGetContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Getting a medical window tint exemption used to require multiple in-person visits — first to your doctor, then to the DMV. Today, telehealth makes it possible to complete the entire process online in about 15 minutes. Here&apos;s exactly how to do it.
      </p>

      <h2>Who Qualifies for an Online Tint Exemption?</h2>
      <p>
        You may qualify for a medical window tint exemption if you have a documented medical condition that causes sensitivity to sunlight or UV radiation. Common qualifying conditions include:
      </p>
      <ul>
        <li>Photosensitivity disorders</li>
        <li>Lupus (SLE)</li>
        <li>Chronic migraines with photophobia</li>
        <li>Melanoma or skin cancer history</li>
        <li>Post-LASIK or post-surgical light sensitivity</li>
        <li>Xeroderma Pigmentosum, Porphyria, or Albinism</li>
        <li>Rosacea with sun sensitivity</li>
      </ul>
      <p>
        <Link href="/conditions" className="text-amber-600 font-semibold hover:underline">See all qualifying conditions →</Link>
      </p>

      <h2>Step 1: Check Your State&apos;s Requirements</h2>
      <p>
        Before starting, check whether your state allows medical tint exemptions and what specific documentation is required. Most states have their own forms or documentation requirements. At MyEyeRx, we handle the state-specific paperwork for you — just select your state and we take care of the rest.
      </p>
      <p>
        <Link href="/window-tint-laws-by-state" className="text-amber-600 font-semibold hover:underline">Check your state&apos;s tint laws →</Link>
      </p>

      <h2>Step 2: Start Your Online Evaluation</h2>
      <p>
        Visit <Link href="/get-started">myeyerx.net/get-started</Link> and select your state. You&apos;ll be guided through a brief medical questionnaire that covers:
      </p>
      <ul>
        <li>Your medical condition and diagnosis</li>
        <li>How long you&apos;ve had the condition</li>
        <li>How sunlight or UV exposure affects your symptoms</li>
        <li>Current treatments and medications</li>
        <li>How the condition impacts your ability to drive safely</li>
      </ul>
      <p>
        This questionnaire takes about 10-15 minutes to complete. Be thorough and honest — the physician needs accurate information to make a proper evaluation.
      </p>

      <h2>Step 3: Physician Review</h2>
      <p>
        Once you submit your questionnaire, a licensed physician reviews your case. At MyEyeRx, every evaluation is conducted by Dr. Elizabeth Rose Borowiec, OD — a licensed optometrist and our Medical Director. This is a real medical evaluation, not an automated approval system.
      </p>
      <p>
        The physician may follow up with additional questions if your case requires clarification. The review typically takes 24-48 hours.
      </p>

      <h2>Step 4: Receive Your Certificate</h2>
      <p>
        If your evaluation is approved, your signed medical exemption certificate is delivered to you by email. The certificate includes:
      </p>
      <ul>
        <li>Your name and identifying information</li>
        <li>The physician&apos;s signature and credentials</li>
        <li>Your qualifying medical condition</li>
        <li>The state-specific form or documentation your state requires</li>
        <li>The validity period of the exemption</li>
      </ul>

      <h2>Step 5: What to Do Next</h2>
      <ol>
        <li><strong>Print your certificate</strong> and keep it in your vehicle at all times</li>
        <li><strong>Register with your DMV</strong> if your state requires it (check your state&apos;s specific requirements)</li>
        <li><strong>Get your windows tinted</strong> by a professional installer</li>
        <li><strong>Set a renewal reminder</strong> if your exemption has an expiration date</li>
      </ol>

      <h2>What If I&apos;m Not Approved?</h2>
      <p>
        You are informed before purchasing that legitimate medical documentation is required. Our physician reviews your existing medical paperwork to determine if your state will accept it for an exemption. If you proceed without valid medical documentation supporting a qualifying condition, your evaluation will be declined and the fee is non-refundable. Please ensure you have appropriate medical records ready before starting your application.
      </p>

      <h2>How Long Does the Process Take?</h2>
      <p>
        The entire process — from starting your questionnaire to receiving your certificate — typically takes <strong>24-48 hours</strong>. The questionnaire itself takes about 15 minutes, and the physician review is completed within 1-2 business days.
      </p>

      <h2>Is It Legitimate?</h2>
      <p>
        Yes. MyEyeRx is a HIPAA-compliant telehealth service. All evaluations are conducted by a licensed physician (Dr. Elizabeth Rose Borowiec, OD, NPI: 1558578559). The exemption certificates we provide are physician-signed medical documents that are recognized by state DMVs and law enforcement.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. A licensed physician will evaluate your specific condition to determine if you qualify for a medical window tint exemption.
        </p>
      </div>
    </>
  );
}

function StatesAllowContent() {
  const servedStates = STATES.filter((s) => s.served && s.hasExemption);
  const exemptionStates = STATES.filter((s) => s.hasExemption);
  const noExemptionStates = STATES.filter((s) => !s.hasExemption);

  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Most U.S. states allow some form of medical exemption for window tint, but the requirements, qualifying conditions, and processes vary significantly. This guide breaks down every state so you know exactly where you stand.
      </p>

      <h2>How Many States Allow Medical Tint Exemptions?</h2>
      <p>
        <strong>{exemptionStates.length} out of 50 states</strong> currently allow medical exemptions for window tint. The states that do NOT have formal medical exemption programs are limited, and even those may have informal processes or be considering legislation.
      </p>

      {noExemptionStates.length > 0 && (
        <>
          <h3>States Without Formal Exemption Programs</h3>
          <p>The following states do not currently have a formal medical tint exemption program:</p>
          <ul>
            {noExemptionStates.map((s) => (
              <li key={s.slug}><strong>{s.name}</strong> — Check with the {s.dmvName} for the latest updates, as regulations change</li>
            ))}
          </ul>
        </>
      )}

      <h2>Complete State-by-State Breakdown</h2>
      <p>Below is every state that offers medical window tint exemptions, with key details about each state&apos;s program:</p>

      <div className="not-prose my-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-amber-50">
                <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">State</th>
                <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Front Side VLT</th>
                <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Exemption Duration</th>
                <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Price</th>
              </tr>
            </thead>
            <tbody>
              {servedStates.map((s, i) => (
                <tr key={s.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <Link href={`/${s.slug}-window-tint-medical-exemption`} className="text-amber-600 font-semibold hover:underline">
                      {s.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100">{s.tintLaws.frontSide}</td>
                  <td className="px-4 py-3 border-b border-gray-100">{s.exemptionDuration}</td>
                  <td className="px-4 py-3 border-b border-gray-100 font-semibold">${s.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2>Which Conditions Qualify Across States?</h2>
      <p>While specific qualifying conditions vary, these conditions are recognized by the vast majority of states:</p>
      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CONDITIONS.map((c) => (
          <Link
            key={c.slug}
            href={`/conditions/${c.slug}`}
            className="flex items-center gap-2 bg-surface rounded-lg px-4 py-3 border border-gray-100 hover:border-amber-200 transition-colors"
          >
            <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span className="text-sm font-medium text-heading">{c.name}</span>
          </Link>
        ))}
      </div>

      <h2>How to Get Your Exemption</h2>
      <p>
        MyEyeRx currently serves <strong>{servedStates.length} states</strong> with online medical tint exemption evaluations. The process is 100% online, HIPAA compliant, and certificates are delivered within 24-48 hours.
      </p>
      <p>
        <Link href="/resources/how-to-get-tint-exemption-online" className="text-amber-600 font-semibold hover:underline">Read our step-by-step guide to getting your exemption online →</Link>
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Disclaimer:</strong> State regulations change periodically. While we strive to keep this information current, always verify requirements with your state&apos;s DMV or motor vehicle agency. Last updated March 2026.
        </p>
      </div>
    </>
  );
}

function CostGuideContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        One of the most common questions we hear is &quot;how much does a window tint exemption cost?&quot; The short answer: it depends on your state and provider. Here&apos;s a transparent breakdown of what to expect.
      </p>

      <h2>MyEyeRx Pricing</h2>
      <p>
        MyEyeRx uses a straightforward, state-based pricing model. Your fee covers everything: the physician evaluation, the signed exemption certificate, and delivery. No hidden costs, no subscription fees.
      </p>

      <div className="not-prose my-8 space-y-4">
        <div className="bg-surface rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-amber-500" />
            <h3 className="font-bold text-heading text-lg">$225 States</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">Arkansas, Idaho, Illinois, Michigan, Minnesota, New Mexico, Oregon, South Carolina, Texas, Washington, West Virginia, Wisconsin</p>
          <p className="text-gray-500 text-xs">These states have streamlined exemption processes that require less administrative work.</p>
        </div>
        <div className="bg-surface rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-amber-500" />
            <h3 className="font-bold text-heading text-lg">$250 States</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">Alabama, Arizona, California, Connecticut, Delaware, Florida, Georgia, Indiana, Iowa, Kansas, Louisiana, Maine, Maryland, Massachusetts, Mississippi, Missouri, Montana, Nevada, New Hampshire, New Jersey, North Carolina, Ohio, Oklahoma, Pennsylvania, Rhode Island, Tennessee, Vermont, Virginia, DC</p>
          <p className="text-gray-500 text-xs">The majority of states fall in this tier.</p>
        </div>
        <div className="bg-surface rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-amber-500" />
            <h3 className="font-bold text-heading text-lg">$350 — New York</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">New York has the most complex exemption process, requiring the specific MV-80W form and additional documentation.</p>
        </div>
      </div>

      <h2>What&apos;s Included in the Fee?</h2>
      <ul>
        <li><strong>Full physician evaluation</strong> — A licensed optometrist reviews your medical history and condition</li>
        <li><strong>State-specific documentation</strong> — We handle your state&apos;s required forms and paperwork</li>
        <li><strong>Signed exemption certificate</strong> — A physician-signed document recognized by your state&apos;s DMV and law enforcement</li>
        <li><strong>Digital delivery</strong> — Certificate delivered by email within 24-48 hours</li>
        <li><strong>Documentation review</strong> — Our physician reviews your existing medical records to determine state acceptance</li>
      </ul>

      <h2>What&apos;s NOT Included</h2>
      <ul>
        <li><strong>Window tint installation</strong> — You&apos;ll need to have your windows tinted separately at a tint shop</li>
        <li><strong>DMV registration fees</strong> — Some states charge a small fee to register your exemption (typically $5-$25)</li>
        <li><strong>Future renewals</strong> — If your state requires renewal, that would be a separate evaluation</li>
      </ul>

      <h2>How Does This Compare to Other Options?</h2>

      <h3>In-Person Doctor Visit</h3>
      <p>
        Visiting your primary care physician or ophthalmologist for a tint exemption letter typically costs $100-$300 for the office visit copay or cash price, plus your time for scheduling and attending the appointment. Many doctors are unfamiliar with the specific state forms required, which can lead to rejections and re-visits.
      </p>

      <h3>Other Online Services</h3>
      <p>
        Several competitors offer similar online services. Prices range from $149-$400+. When comparing, look for:
      </p>
      <ul>
        <li>Is the evaluation done by a licensed physician (not a nurse or PA)?</li>
        <li>Is the service HIPAA compliant?</li>
        <li>Do they guarantee a refund if you don&apos;t qualify?</li>
        <li>Do they handle state-specific forms?</li>
        <li>What&apos;s their turnaround time?</li>
      </ul>

      <h2>Is It Worth the Investment?</h2>
      <p>Consider the alternative costs:</p>
      <ul>
        <li><strong>Tint tickets</strong> range from $25 to $500+ per violation, depending on your state</li>
        <li><strong>Multiple tickets</strong> can add up to more than the exemption cost in a single year</li>
        <li><strong>Insurance rate increases</strong> from traffic violations</li>
        <li><strong>Required tint removal</strong> and re-application costs ($100-$400+)</li>
        <li><strong>Health impacts</strong> from driving without adequate UV/light protection</li>
      </ul>
      <p>
        A one-time investment of $225-$350 protects you from all of these ongoing costs while also protecting your health.
      </p>

      <h2>Can I Use HSA or FSA Funds?</h2>
      <p>
        In many cases, yes. Since the evaluation is a medical service provided by a licensed physician, it may qualify as a medical expense under your HSA (Health Savings Account) or FSA (Flexible Spending Account). Check with your plan administrator to confirm.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Pricing Note:</strong> Prices shown are current as of March 2026 and are subject to change. Visit <Link href="/get-started" className="text-amber-600 hover:underline">myeyerx.net/get-started</Link> for the most current pricing for your state.
        </p>
      </div>
    </>
  );
}
