"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  BookOpen,
  Smartphone,
  Home,
  Briefcase,
  Brain,
  Car,
} from "lucide-react";
import type { Article } from "@/data/articles";
import { CATEGORIES } from "@/data/articles";

const ICON_MAP: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  Home: <Home className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
  Brain: <Brain className="w-4 h-4" />,
  Car: <Car className="w-4 h-4" />,
};

export function ResourcesFilter({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all"
    ? articles
    : articles.filter((a) => a.categorySlug === active);

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive("all")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            active === "all"
              ? "bg-amber-500 text-white shadow-md"
              : "bg-white border border-gray-200 text-gray-600 hover:border-amber-300 hover:text-amber-600"
          }`}
        >
          All ({articles.length})
        </button>
        {CATEGORIES.map((cat) => {
          const count = articles.filter((a) => a.categorySlug === cat.slug).length;
          return (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat.slug
                  ? "bg-amber-500 text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              {ICON_MAP[cat.icon]}
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/resources/${article.slug}`}
            className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow group flex flex-col"
          >
            <div className="w-full h-36 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl mb-5 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-amber-300" />
            </div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{article.category}</span>
            <h3 className="font-bold text-heading mt-2 mb-2 group-hover:text-amber-600 transition-colors leading-snug">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
              <span className="text-amber-600 font-semibold flex items-center gap-1">
                Read <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">No articles found in this category.</p>
      )}
    </>
  );
}
