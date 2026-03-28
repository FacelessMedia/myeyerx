"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

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
          "The physician evaluation fee is $79. This is a one-time fee that covers your telemedicine consultation and, if approved, your signed medical exemption certificate.",
      },
      {
        question: "What if I'm not approved?",
        answer:
          "If the physician determines that your condition does not qualify for a medical window tint exemption, you will receive a full refund of the evaluation fee. We want to ensure you only pay for results.",
      },
      {
        question: "Do you accept insurance?",
        answer:
          "At this time, we do not accept insurance. The $79 evaluation fee is an out-of-pocket expense. However, you may be able to use your HSA or FSA card to cover the cost.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "0-0": true,
  });

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto">
            Everything you need to know about getting your medical window tint
            exemption through MyEyeRx.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {faqCategories.map((cat, ci) => (
          <div key={ci} className="mb-12">
            <h2 className="text-xl font-bold text-primary-dark mb-6 pb-2 border-b border-gray-200">
              {cat.title}
            </h2>
            <div className="space-y-4">
              {cat.faqs.map((faq, fi) => {
                const key = `${ci}-${fi}`;
                return (
                  <div
                    key={key}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-primary-dark pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                          openItems[key] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openItems[key] && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20 text-center">
          <h3 className="text-xl font-bold text-primary-dark mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Contact us or start your application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@myeyerx.net"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-accent border-2 border-accent rounded-full hover:bg-accent hover:text-white transition-all"
            >
              Contact Support
            </a>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-light rounded-full transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
