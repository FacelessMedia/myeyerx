"use client";

import { CalendarCheck, MonitorSmartphone, FileCheck, ChevronsDown, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    num: 1,
    title: "Book Your Appointment",
    description:
      "Skip the wait at the doctor's office. Schedule your medical window tint exemption evaluation from home.",
  },
  {
    icon: MonitorSmartphone,
    num: 2,
    title: "Match With a Licensed Doctor",
    description:
      "Find the right doctor in minutes. You can easily chat with your provider on a smartphone, computer, or tablet. connect through a phone call or video.",
  },
  {
    icon: FileCheck,
    num: 3,
    title: "Get Approved & Your Signed DMV-Ready Forms",
    description:
      "Once approved, we'll send you your physician-signed forms so you're DMV-ready in no time. Download them instantly or have them mailed to you.",
  },
];

export default function Steps() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chevron icon */}
        <div className="flex justify-center mb-6">
          <ChevronsDown className="w-10 h-10 text-gray-400" />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-heading leading-tight">
            3 Simple Steps to Get Your
            <span className="text-amber-500"> Window Tint Exemption</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-gradient-to-b from-gray-50 to-white rounded-2xl border-2 border-amber-300 p-8 pt-10 hover:shadow-lg transition-shadow"
            >
              {/* Number badge */}
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {step.num}
              </div>

              {/* Icon */}
              <div className="flex justify-end mb-6">
                <step.icon className="w-14 h-14 text-amber-400 stroke-[1.5]" />
              </div>

              <h3 className="text-lg font-bold text-amber-600 mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* And that's it! */}
        <div className="text-center mt-14">
          <p className="text-3xl sm:text-4xl font-extrabold text-heading mb-2">
            And <span className="text-amber-500 italic">that&apos;s it!</span>
          </p>
          <p className="text-gray-600 mb-8 text-base">
            Get a Window Tint Exemption evaluation in minutes.
          </p>
          <a
            href="#state-selector"
            onClick={(e) => { e.preventDefault(); document.getElementById('state-selector')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            Select Your State <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
