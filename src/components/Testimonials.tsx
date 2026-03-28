"use client";

import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah",
    state: "Florida",
    text: "It was easy to complete the required information and the response was very quick.",
    rating: 5,
  },
  {
    name: "James",
    state: "California",
    text: "It was easy, full of instructions along the way and good customer assistance that was very responsive when called upon.",
    rating: 5,
  },
  {
    name: "Maria",
    state: "Texas",
    text: "The process is very easy with proof of your medical conditions. Have medical records available for download and the process is very simple",
    rating: 5,
  },
  {
    name: "David",
    state: "New York",
    text: "I was skeptical at first, but the entire process was legitimate and easy. The physician was knowledgeable and the paperwork was DMV-ready.",
    rating: 5,
  },
  {
    name: "Linda",
    state: "Georgia",
    text: "Customer service was very responsive and the doctor took time to understand my eye condition. Got approved quickly!",
    rating: 5,
  },
  {
    name: "Michael",
    state: "Oregon",
    text: "So much easier than trying to get a referral through my regular doctor. Everything was handled online and my exemption was approved fast.",
    rating: 5,
  },
  {
    name: "Jessica",
    state: "Ohio",
    text: "I have lupus and the sun sensitivity is real. MyEyeRx understood my condition and the doctor signed off quickly. Very grateful for this service.",
    rating: 5,
  },
  {
    name: "Robert",
    state: "Arizona",
    text: "Living in Arizona, darker tint is a necessity for my eye condition. This service made the legal process painless. A+ experience.",
    rating: 5,
  },
  {
    name: "Karen",
    state: "Michigan",
    text: "Straightforward process with clear instructions. I was matched with a doctor quickly and my signed forms were ready the same day.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-heading leading-tight">
            See What Our <span className="text-amber-500">Customers Are Saying!</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base mt-4">
            See why our clients recommend us as their trusted partner in
            medical window tint exemption evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={`${page}-${i}`}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Big quote mark */}
              <div className="text-5xl font-serif text-amber-400 leading-none mb-4">&ldquo;</div>

              <p className="text-gray-600 leading-relaxed mb-auto text-[15px] flex-1">
                {t.text}
              </p>

              {/* Name and rating */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="font-bold text-heading text-sm">
                    {t.name} – {t.state}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-500">{t.rating}</span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-11 h-11 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-11 h-11 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
