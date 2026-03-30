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
            <div className="flex items-center gap-3 rounded-xl bg-gray-100 border border-gray-200 border-l-4 border-l-green-400 p-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="font-bold text-heading text-sm">
                  {state.name} — Medical Tint Exemptions Available
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  MyEyeRx serves {state.name}. You can apply 100% online.
                </p>
              </div>
            </div>
          ) : state.hasExemption ? (
            <div className="flex items-center gap-3 rounded-xl bg-gray-100 border border-gray-200 border-l-4 border-l-amber-400 p-4">
              <Shield className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <div>
                <p className="font-bold text-heading text-sm">
                  {state.name} — Exemptions Exist
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  {state.name} has a medical exemption program, but MyEyeRx does not currently serve this state.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-xl bg-gray-100 border border-gray-200 border-l-4 border-l-red-400 p-4">
              <Shield className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <p className="font-bold text-heading text-sm">
                  {state.name} — No Formal Exemption Program
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Check with the {state.dmvName} for updates, as regulations may change.
                </p>
              </div>
            </div>
          )}

          {/* Details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center">
              <DollarSign className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <p className="font-bold text-heading text-sm">${state.price}</p>
              <p className="text-gray-500 text-[10px]">Evaluation price</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center">
              <Clock className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <p className="font-bold text-heading text-xs">{state.exemptionDuration}</p>
              <p className="text-gray-500 text-[10px]">Exemption duration</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center">
              <FileText className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <p className="font-bold text-heading text-xs">{state.tintLaws.frontSide}</p>
              <p className="text-gray-500 text-[10px]">Front side VLT</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center">
              <Shield className="w-4 h-4 text-amber-500 mx-auto mb-1" />
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
                    className="text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-2 py-1 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA button */}
          {state.served && state.hasExemption && (
            <div className="pt-2">
              <Link
                href={`/${state.slug}-window-tint-medical-exemption#exemption-form`}
                className="block w-full text-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-white hover:bg-amber-600 transition-colors no-underline"
              >
                Start Your Evaluation — ${state.price}
              </Link>
            </div>
          )}
        </div>
      )}
    </ToolWrapper>
  );
}
