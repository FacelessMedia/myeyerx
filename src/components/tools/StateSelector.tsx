"use client";

import { STATES } from "@/data/states";
import { useLocalStorage } from "./useLocalStorage";
import { MapPin } from "lucide-react";

interface StateSelectorProps {
  value: string;
  onChange: (slug: string) => void;
  label?: string;
}

const servedStates = STATES.filter((s) => s.served && s.hasExemption);

export function StateSelector({ value, onChange, label }: StateSelectorProps) {
  return (
    <div>
      {label && (
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500 pointer-events-none" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm font-semibold text-heading focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-colors cursor-pointer"
        >
          <option value="">Select your state...</option>
          {servedStates.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name} — ${s.price}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function useSelectedState() {
  const [slug, setSlug] = useLocalStorage<string>("myeyerx-selected-state", "");
  const state = slug ? STATES.find((s) => s.slug === slug) : null;
  return { slug, setSlug, state };
}
