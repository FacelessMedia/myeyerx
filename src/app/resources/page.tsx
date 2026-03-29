import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { ARTICLES } from "@/data/articles";

export const metadata: Metadata = {
  title: "Resources | Window Tint Exemption Guides & Articles",
  description:
    "Helpful guides, state-specific requirements, and medical condition resources for window tint exemptions. Learn everything you need to know about medical tint exemptions.",
  alternates: { canonical: "https://myeyerx.net/resources" },
};

export default function ResourcesPage() {
  const featured = ARTICLES[0]; // pillar article
  const rest = ARTICLES.slice(1);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-heading font-medium">Resources</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            Resources &{" "}
            <span className="text-amber-500">Insights</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expert guides, state-specific requirements, and everything you need
            to know about medical window tint exemptions.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/resources/${featured.slug}`}
            className="block bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border border-amber-200 p-8 lg:p-10 hover:shadow-lg transition-shadow group"
          >
            <span className="inline-block bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Featured Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-3 group-hover:text-amber-600 transition-colors">
              {featured.title}
            </h2>
            <p className="text-gray-600 text-lg mb-4 max-w-3xl">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featured.readTime}</span>
              <span>By {featured.author}</span>
            </div>
            <span className="inline-flex items-center gap-2 text-amber-600 font-bold mt-4">
              Read the Full Guide <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-heading mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
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
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-heading mb-8">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/conditions" className="bg-surface rounded-2xl p-6 border border-gray-100 hover:border-amber-200 transition-colors group">
              <h3 className="font-bold text-heading mb-2 group-hover:text-amber-600">Qualifying Conditions</h3>
              <p className="text-sm text-gray-500">Learn which medical conditions qualify for a tint exemption.</p>
            </Link>
            <Link href="/window-tint-laws-by-state" className="bg-surface rounded-2xl p-6 border border-gray-100 hover:border-amber-200 transition-colors group">
              <h3 className="font-bold text-heading mb-2 group-hover:text-amber-600">Tint Laws by State</h3>
              <p className="text-sm text-gray-500">Check VLT limits and exemption rules for all 50 states.</p>
            </Link>
            <Link href="/faqs" className="bg-surface rounded-2xl p-6 border border-gray-100 hover:border-amber-200 transition-colors group">
              <h3 className="font-bold text-heading mb-2 group-hover:text-amber-600">FAQs</h3>
              <p className="text-sm text-gray-500">Get answers to the most common tint exemption questions.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-8 sm:p-12 text-center border border-amber-200">
            <h2 className="text-2xl font-extrabold text-heading mb-4">
              Ready to Get Your Exemption?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Start your application today and get your physician-signed medical
              exemption certificate within 24-48 hours.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
