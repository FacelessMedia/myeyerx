"use client";

import Link from "next/link";
import { CheckCircle, Clock, Shield, DollarSign, FileText, ExternalLink } from "lucide-react";
import { ToolWrapper } from "./ToolWrapper";
import { StateSelector, useSelectedState } from "./StateSelector";

export function StateEligibilityChecker() {
  const { slug, setSlug, state } = useSelectedState();

  return (
    <ToolWrapper
      title="State Eligibility Checker"
      description="Select your state to instantly see if medical tint exemptions are available, what's required, and the exact cost."
    >
      <StateSelector value={slug} onChange={setSlug} label="Your State" />

      {state && (
        <div className="mt-5 space-y-4 animate-in fade-in duration-300">
          {/* Status banner */}
          {state.served && state.hasExemption ? (
            <div className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 p-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="font-bold text-heading text-sm">
                  {state.name} — Medical Tint Exemptions Available
                </p>
                <p className="text-green-700 text-xs mt-0.5">
                  MyEyeRx serves {state.name}. You can apply 100% online.
                </p>
              </div>
            </div>
          ) : state.hasExemption ? (
            <div className="flex items-center gap-3 rounded-xl bg-amber-50 border border-amber-200 p-4">
              <Shield className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <div>
                <p className="font-bold text-heading text-sm">
                  {state.name} — Exemptions Exist
                </p>
                <p className="text-amber-700 text-xs mt-0.5">
                  {state.name} has a medical exemption program, but MyEyeRx does not currently serve this state.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 p-4">
              <Shield className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <p className="font-bold text-heading text-sm">
                  {state.name} — No Formal Exemption Program
                </p>
                <p className="text-red-700 text-xs mt-0.5">
                  Check with the {state.dmvName} for updates, as regulations may change.
                </p>
              </div>
            </div>
          )}

          {/* Details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
              <DollarSign className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <p className="font-bold text-heading text-sm">${state.price}</p>
              <p className="text-gray-500 text-[10px]">Evaluation price</p>
            </div>
            <div className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
              <Clock className="w-4 h-4 text-blue-500 mx-auto mb-1" />
              <p className="font-bold text-heading text-xs">{state.exemptionDuration}</p>
              <p className="text-gray-500 text-[10px]">Exemption duration</p>
            </div>
            <div className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
              <FileText className="w-4 h-4 text-purple-500 mx-auto mb-1" />
              <p className="font-bold text-heading text-xs">{state.tintLaws.frontSide}</p>
              <p className="text-gray-500 text-[10px]">Front side VLT</p>
            </div>
            <div className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
              <Shield className="w-4 h-4 text-green-500 mx-auto mb-1" />
              <p className="font-bold text-heading text-xs">{state.formName || "See state page"}</p>
              <p className="text-gray-500 text-[10px]">Required form</p>
            </div>
          </div>

          {/* Qualifying conditions */}
          {state.qualifyingConditions.length > 0 && (
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Qualifying Conditions in {state.name}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {state.qualifyingConditions.map((c) => (
                  <span
                    key={c}
                    className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA buttons */}
          {state.served && state.hasExemption && (
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/get-started"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-white hover:bg-amber-600 transition-colors no-underline"
              >
                Start Your Evaluation — ${state.price}
              </Link>
              <Link
                href={`/${state.slug}-window-tint-medical-exemption`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-heading hover:border-amber-300 transition-colors no-underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {state.name} Details
              </Link>
            </div>
          )}
        </div>
      )}
    </ToolWrapper>
  );
}
