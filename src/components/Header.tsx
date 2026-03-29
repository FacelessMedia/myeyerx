"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Eye } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#how-it-works", label: "Benefits" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b-[3px] border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-heading">MyEye</span>
                <span className="text-amber-500">Rx</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-gray-600 hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-heading border-2 border-heading rounded-full hover:bg-gray-50 transition-all"
              >
                Patient Login
              </Link>
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Qualify Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-amber-600 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 py-2">
              <span className="text-sm text-gray-500">Night Mode</span>
              <ThemeToggle />
            </div>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-heading border-2 border-heading rounded-full hover:bg-gray-50 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Patient Login
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all mt-1"
              onClick={() => setMobileOpen(false)}
            >
              Qualify Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
