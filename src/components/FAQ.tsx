"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Do I qualify for a window tint exemption?",
    answer:
      "You may qualify for a window tint exemption if you have a medical condition that makes you sensitive to sunlight or UV exposure. This can include:\n\n• Photosensitivity or chronic light sensitivity\n• Lupus (Systemic Lupus Erythematosus)\n• Melanoma or history of skin cancer\n• Severe migraines triggered by sunlight\n• Post-surgical eye conditions (e.g., cataract surgery, LASIK complications)\n• Xeroderma Pigmentosum\n• Other dermatological or ophthalmological conditions\n\nA licensed physician must evaluate your condition and certify that it meets your state's requirements for a window tint medical exemption.\n\nPlease note: Eligibility criteria may vary slightly depending on your state's regulations. Our platform will help you with the process based on where you are. It will also make sure your application meets local standards.",
  },
  {
    question: "How long does it take to get my exemption?",
    answer:
      "After your evaluation, you'll typically receive your signed medical exemption certificate within 24 to 48 hours. Once you have that, you can present it to law enforcement or your state's DMV as needed.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "To apply, you generally need a valid photo ID and any medical records that support your condition (e.g., doctor's notes, prescriptions, diagnosis records). Our online process will guide you step-by-step based on your state's specific requirements.",
  },
  {
    question: "Is this service legal?",
    answer:
      "Yes. Most states allow medical exemptions for window tint that exceeds standard legal limits. Our licensed physicians evaluate your condition and provide legitimate medical documentation that is compliant with your state's laws.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-amber-500">
            FAQs
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left - Visual */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50 aspect-[4/3] flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="w-32 h-32 mx-auto text-amber-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <p className="text-amber-700 font-bold">Window Tint Exemption</p>
              <p className="text-amber-500 text-sm">Frequently Asked Questions</p>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden transition-all ${
                  openIndex === i
                    ? "bg-amber-900 text-white"
                    : "bg-white border border-gray-200 text-heading"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-bold pr-4 text-[15px] ${openIndex === i ? "text-white" : "text-amber-600"}`}>
                    {faq.question}
                  </span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <p className="text-amber-100 leading-relaxed whitespace-pre-line text-sm">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* See More FAQs button */}
        <div className="text-center mt-12">
          <Link
            href="/faqs"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            See More FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
