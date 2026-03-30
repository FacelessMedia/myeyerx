import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs | Window Tint Medical Exemption Questions Answered",
  description:
    "Frequently asked questions about medical window tint exemptions. Learn about qualifying conditions, the evaluation process, pricing, and how MyEyeRx works.",
  alternates: { canonical: "https://myeyerx.net/faqs" },
};

const faqCategories = [
  {
    title: "Eligibility & Qualification",
    faqs: [
      {
        question: "Do I qualify for a medical window tint exemption?",
        answer:
          "You may qualify if you have a medical condition that makes you sensitive to sunlight or UV exposure. Common qualifying conditions include photosensitivity, lupus, melanoma or skin cancer history, albinism, severe migraines triggered by sunlight, post-surgical eye conditions, xeroderma pigmentosum, and other dermatological or ophthalmological conditions. A licensed physician must evaluate your condition and certify that it meets your state's requirements.",
      },
      {
        question: "What medical conditions qualify?",
        answer:
          "Conditions that commonly qualify include: Photosensitivity or chronic light sensitivity, Lupus (SLE), Melanoma or history of skin cancer, Albinism, Severe migraines triggered by sunlight, Post-surgical eye conditions (cataract surgery, LASIK complications), Xeroderma Pigmentosum, Rosacea with photosensitivity, Porphyria, and other conditions where UV/sunlight exposure causes medical harm.",
      },
      {
        question: "Can I get an exemption for cosmetic reasons?",
        answer:
          "No. Medical window tint exemptions are only available for documented medical conditions. Our licensed physicians will evaluate whether your condition qualifies under your state's laws. The exemption must be medically justified.",
      },
    ],
  },
  {
    title: "Process & Timeline",
    faqs: [
      {
        question: "How long does it take to get my exemption certificate?",
        answer:
          "After your evaluation, you'll typically receive your signed medical exemption certificate within 24 to 48 hours. Once you have that, you can present it to law enforcement or your state's DMV as needed.",
      },
      {
        question: "What happens during the evaluation?",
        answer:
          "You'll be matched with a licensed physician who will review your medical history and discuss your condition via a telemedicine consultation (phone or video). The physician will determine if your condition qualifies for a medical window tint exemption under your state's laws.",
      },
      {
        question: "What documents do I need to apply?",
        answer:
          "You'll generally need a valid photo ID and any medical records that support your condition (doctor's notes, prescriptions, diagnosis records). Our online process will guide you step-by-step based on your state's specific requirements.",
      },
    ],
  },
  {
    title: "Legal & Compliance",
    faqs: [
      {
        question: "Is this service legal?",
        answer:
          "Yes. Most states allow medical exemptions for window tint that exceeds standard legal limits. Our licensed physicians evaluate your condition and provide legitimate medical documentation. The exemption certificate is signed by a real, licensed healthcare provider and is compliant with your state's laws.",
      },
      {
        question: "How dark can my window tint be with a medical exemption?",
        answer:
          "The allowable tint darkness varies by state. Some states allow any darkness with a valid medical exemption, while others still have minimum VLT (Visible Light Transmission) requirements even with an exemption. We'll provide guidance specific to your state during the process.",
      },
      {
        question: "Will police accept my exemption certificate?",
        answer:
          "Yes. Your exemption certificate is a legitimate medical document signed by a licensed physician. Keep the original or a copy in your vehicle at all times. If pulled over, present it to the officer along with your driver's license and registration.",
      },
      {
        question: "How long is my exemption valid?",
        answer:
          "Validity periods vary by state. Some states issue exemptions that are valid for 1-2 years and require renewal, while others may be valid indefinitely. We'll inform you of your state's specific requirements when you receive your certificate.",
      },
    ],
  },
  {
    title: "Pricing & Refunds",
    faqs: [
      {
        question: "How much does it cost?",
        answer:
          "The physician evaluation fee starts at $225 depending on your state (up to $350 for New York). This is a one-time fee that covers your telemedicine consultation and, if approved, your signed medical exemption certificate.",
      },
      {
        question: "What if I'm not approved?",
        answer:
          "Before purchasing, you are informed that legitimate medical documentation is required. Our physician reviews your existing medical paperwork to determine if your state will accept it for an exemption. If you proceed without valid medical documentation supporting a qualifying condition, your evaluation will be declined and the fee is non-refundable. Please ensure you have appropriate medical records before purchasing.",
      },
      {
        question: "Do you accept insurance?",
        answer:
          "At this time, we do not accept insurance. The evaluation fee (starting at $225) is an out-of-pocket expense. Because medical window tint exemption evaluations are a newer category of telehealth service, standardized billing codes for insurance reimbursement do not yet exist for this type of consultation. However, since this is a legitimate medical service provided by a licensed physician, your HSA or FSA may still cover it. We recommend contacting your HSA/FSA plan administrator directly to confirm eligibility before purchasing.",
      },
    ],
  },
];

// Build FAQPage schema from all questions
const allFaqs = faqCategories.flatMap((cat) => cat.faqs);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-heading font-medium">FAQs</li>
          </ol>
        </div>
      </nav>

      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            Frequently Asked{" "}
            <span className="text-amber-500">Questions</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about getting your medical window tint
            exemption through MyEyeRx.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((cat, ci) => (
            <div key={ci} className="mb-12">
              <h2 className="text-2xl font-extrabold text-amber-500 mb-6 pb-3 border-b-2 border-amber-200">
                {cat.title}
              </h2>
              <div className="space-y-4">
                {cat.faqs.map((faq, fi) => (
                  <details
                    key={`${ci}-${fi}`}
                    className="bg-surface rounded-2xl border border-gray-100 group"
                    {...(ci === 0 && fi === 0 ? { open: true } : {})}
                  >
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                      <span className="font-semibold text-heading pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200 text-center">
            <h3 className="text-xl font-bold text-heading mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Contact us or start your application.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:Tory@myeyerx.net"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-heading border-2 border-heading rounded-full hover:bg-gray-50 transition-all"
              >
                Email Us
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
