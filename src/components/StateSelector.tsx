"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

export default function StateSelector() {
  const [selectedState, setSelectedState] = useState("");
  const router = useRouter();

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value;
    setSelectedState(state);
    if (state) {
      router.push(`/get-started?state=${state.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading leading-tight mb-4">
              Apply for your{" "}
              <span className="text-amber-500">Window Tint Exemption</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Experience the benefits of a medical window tint exemption
              under professional guidance.
            </p>
          </div>

          {/* Right - Dropdown */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <select
                value={selectedState}
                onChange={handleStateChange}
                className="w-full appearance-none bg-white border-2 border-gray-200 rounded-full px-6 py-4 pr-12 text-gray-500 text-base font-medium focus:outline-none focus:border-amber-400 transition-colors cursor-pointer shadow-sm"
              >
                <option value="">Type your state</option>
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
