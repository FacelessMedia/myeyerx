import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES, getArticleBySlug } from "@/data/articles";
import { ArticleContent } from "@/data/article-content";
import {
  ArrowRight,
  Clock,
  User,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://myeyerx.net/resources/${article.slug}`,
      siteName: "MyEyeRx",
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author],
    },
    alternates: {
      canonical: `https://myeyerx.net/resources/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      url: `https://myeyerx.net/resources/${article.slug}`,
      author: {
        "@type": "Person",
        name: article.author,
        jobTitle: article.authorTitle,
        url: "https://myeyerx.net/about",
        sameAs: ["https://www.linkedin.com/in/toriano-dewberry-33882939/"],
      },
      reviewedBy: {
        "@type": "Person",
        name: article.reviewer,
        jobTitle: article.reviewerTitle,
        sameAs: [
          "https://www.linkedin.com/in/elizabeth-borowiec-02a5b9293/",
          "https://doctor.webmd.com/doctor/elizabeth-borowiec-acb041d9-6953-41e9-a9b3-378dda9a95b5-overview",
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "MyEyeRx",
        url: "https://myeyerx.net",
        logo: { "@type": "ImageObject", url: "https://myeyerx.net/logo.png" },
      },
      datePublished: article.publishedDate,
      dateModified: article.updatedDate,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myeyerx.net" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://myeyerx.net/resources" },
        { "@type": "ListItem", position: 3, name: article.title, item: `https://myeyerx.net/resources/${article.slug}` },
      ],
    },
  ];

  const related = ARTICLES.filter((a) => a.categorySlug === article.categorySlug && a.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/resources" className="hover:text-amber-600 transition-colors">Resources</Link></li>
            <li>/</li>
            <li className="text-heading font-medium truncate max-w-[200px]">{article.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {article.author}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {article.readTime}</span>
            <span>Updated {article.updatedDate}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Medically reviewed by {article.reviewer}, {article.reviewerTitle}
          </p>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none prose-headings:text-heading prose-headings:font-extrabold prose-a:text-amber-600 prose-a:font-semibold">
            <ArticleContent slug={slug} />
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-8 lg:p-10 border border-amber-200 text-center">
            <h2 className="text-2xl font-extrabold text-heading mb-3">Ready to Get Your Medical Exemption?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Connect with a licensed physician for an online evaluation. Certificates delivered in 24-48 hours.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md"
            >
              Start Your Evaluation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Author box */}
          <div className="mt-12 bg-surface rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="font-bold text-heading text-sm">{article.author}</p>
              <p className="text-gray-500 text-xs mb-2">{article.authorTitle}</p>
              <p className="text-gray-600 text-sm">
                Toriano Dewberry is the founder and CEO of MyEyeRx, bringing his expertise as a licensed optician to help patients access medical window tint exemptions through telehealth.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-heading mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow group"
                >
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{r.category}</span>
                  <h3 className="text-heading font-bold mt-2 mb-2 group-hover:text-amber-600 transition-colors">{r.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{r.excerpt}</p>
                  <span className="text-amber-600 text-sm font-semibold mt-3 inline-flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
