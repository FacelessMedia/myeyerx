"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Eye, Sun } from "lucide-react";

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

export default function Hero() {
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
    <section className="relative bg-surface overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] rounded-full bg-amber-100/60 hidden lg:block" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full bg-amber-100/60 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex items-center justify-between">
          {/* Left decorative - person with tinted car */}
          <div className="hidden lg:flex flex-col items-center gap-4 flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-amber-100 border-4 border-amber-200 flex items-center justify-center">
              <Sun className="w-20 h-20 text-amber-400" />
            </div>
          </div>

          {/* Center content */}
          <div className="text-center max-w-2xl mx-auto flex-1 px-4">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4">
              Welcome to MyEyeRx
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-heading mb-6">
              Get Your{" "}
              <span className="text-amber-500 italic">
                Window Tint Exemption
              </span>{" "}
              Online
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Connect with licensed physicians online to complete your
              medical window tint exemption evaluation, without ever leaving home.
            </p>

            {/* State Dropdown */}
            <div className="relative max-w-sm mx-auto">
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

          {/* Right decorative */}
          <div className="hidden lg:flex flex-col items-center gap-4 flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-amber-100 border-4 border-amber-200 flex items-center justify-center">
              <Eye className="w-20 h-20 text-amber-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 15C960 30 1200 30 1440 15V60H0Z" className="hero-curve-fill fill-white" />
        </svg>
      </div>
    </section>
  );
}
