"use client";

import Link from "next/link";
import { CheckCircle, X, DollarSign } from "lucide-react";
import { STATES } from "@/data/states";
import { ToolWrapper } from "./ToolWrapper";
import { StateSelector, useSelectedState } from "./StateSelector";

const INCLUDED = [
  "Licensed physician evaluation (Dr. Elizabeth Rose Borowiec, OD)",
  "Comprehensive medical review of your condition",
  "Physician-signed exemption certificate",
  "State-specific forms completed for you",
  "Email delivery within 24-48 hours",
  "HIPAA-compliant telehealth service",
];

const NOT_INCLUDED = [
  "Window tint installation (separate cost with your installer)",
  "DMV registration fees (if your state requires registration)",
  "Follow-up or renewal evaluations (if exemption expires)",
];

const IN_PERSON_COSTS = [
  { label: "Doctor office visit", range: "$150–300" },
  { label: "Separate form/letter fee", range: "$50–100" },
  { label: "Time off work + travel", range: "$50–150" },
  { label: "Follow-up if forms rejected", range: "$75–200" },
];

export function CostCalculator() {
  const { slug, setSlug, state } = useSelectedState();

  const inPersonMin = 250;
  const inPersonMax = 750;

  return (
    <ToolWrapper
      title="Cost Calculator"
      description="Select your state to see your exact price and what's included in your evaluation."
    >
      <StateSelector value={slug} onChange={setSlug} label="Your State" />

      {state && state.served && state.hasExemption && (
        <div className="mt-5 space-y-5 animate-in fade-in duration-300">
          {/* Price display */}
          <div className="text-center rounded-2xl bg-gray-100 border border-gray-200 p-6">
            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              {state.name} Evaluation Price
            </p>
            <p className="text-4xl font-extrabold text-heading">${state.price}</p>
            <p className="text-gray-500 text-xs mt-1">One-time fee. No hidden charges.</p>
          </div>

          {/* What's included / not included */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2">
                What&apos;s Included
              </p>
              <div className="space-y-1.5">
                {INCLUDED.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                Not Included
              </p>
              <div className="space-y-1.5">
                {NOT_INCLUDED.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison vs in-person */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              MyEyeRx vs. In-Person Doctor
            </p>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-4 py-2.5 font-bold text-heading">Cost Item</th>
                    <th className="text-right px-4 py-2.5 font-bold text-heading">In-Person</th>
                    <th className="text-right px-4 py-2.5 font-bold text-amber-600">MyEyeRx</th>
                  </tr>
                </thead>
                <tbody>
                  {IN_PERSON_COSTS.map((item, i) => (
                    <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 text-gray-600">{item.label}</td>
                      <td className="px-4 py-2 text-right text-gray-600">{item.range}</td>
                      <td className="px-4 py-2 text-right text-amber-600 font-semibold">
                        {i === 0 ? `$${state.price}` : "Included"}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-200 bg-gray-100">
                    <td className="px-4 py-2.5 font-bold text-heading">Total</td>
                    <td className="px-4 py-2.5 text-right font-bold text-gray-600">
                      ${inPersonMin}–${inPersonMax}+
                    </td>
                    <td className="px-4 py-2.5 text-right font-extrabold text-amber-600">
                      ${state.price}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/get-started"
            className="block w-full text-center rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-amber-600 transition-colors no-underline"
          >
            Start Your Evaluation — ${state.price}
          </Link>
        </div>
      )}

      {state && (!state.served || !state.hasExemption) && (
        <div className="mt-5 rounded-xl bg-gray-100 border border-gray-200 p-5 text-center">
          <p className="text-sm font-semibold text-heading">
            {state.hasExemption
              ? `${state.name} has a medical exemption program, but MyEyeRx doesn't currently serve this state.`
              : `${state.name} doesn't currently have a formal medical tint exemption program.`}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Check back — we&apos;re expanding to new states regularly.
          </p>
        </div>
      )}
    </ToolWrapper>
  );
}
