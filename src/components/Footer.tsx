"use client";

import Link from "next/link";
import { Eye } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-500">
      {/* Top row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Logo + contact */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                <Eye className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                MyEyeRx
              </span>
            </Link>
            <div className="flex items-center gap-4 mt-1">
              <a href="tel:7346441804" className="text-white font-medium text-sm hover:underline">
                (734) 644-1804
              </a>
              <a href="mailto:Tory@myeyerx.net" className="text-white text-sm underline hover:no-underline">
                Tory@myeyerx.net
              </a>
            </div>
          </div>

          {/* HIPAA Badge */}
          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/30">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-xs uppercase tracking-wider">HIPAA</p>
              <p className="text-white font-bold text-xs uppercase tracking-wider">Compliant</p>
            </div>
          </div>

          {/* Subscribe */}
          <div className="w-full lg:w-auto">
            <h3 className="font-bold text-white text-base mb-1">Subscribe to MyEyeRx</h3>
            <p className="text-white/80 text-xs mb-3">
              Get reliable updates on window tint laws, renewals, and exemption guidelines.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address *"
                className="flex-1 min-w-0 px-4 py-3 rounded-full text-sm bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-300 hover:bg-amber-200 text-amber-900 font-bold text-sm rounded-full transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-amber-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-white/90 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/90 hover:text-white transition-colors">
                Terms &amp; Condition
              </Link>
              <Link href="/hipaa-compliance" className="text-white/90 hover:text-white transition-colors">
                HIPAA Compliance
              </Link>
            </div>
            <p className="text-white/80 text-sm">
              &copy; 2026 MyEyeRx
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
