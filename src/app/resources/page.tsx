import Link from "next/link";
import { BookOpen, FileText, MapPin, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Application Tips & Guides",
    icon: FileText,
    description: "Step-by-step guides to help you through the exemption process.",
    articles: [
      {
        title: "How to Apply for a Medical Window Tint Exemption: Complete Guide",
        excerpt: "A comprehensive walkthrough covering everything from eligibility to receiving your signed certificate.",
      },
      {
        title: "5 Tips to Get Your Window Tint Exemption Approved Fast",
        excerpt: "Learn what physicians look for and how to prepare your medical documentation for a smooth process.",
      },
      {
        title: "Understanding Window Tint VLT Percentages & What They Mean",
        excerpt: "What is VLT? How dark is too dark? Learn the basics of window tint measurements and legal limits.",
      },
    ],
  },
  {
    title: "State-by-State Requirements",
    icon: MapPin,
    description: "Learn the specific window tint exemption rules for your state.",
    articles: [
      {
        title: "Window Tint Medical Exemption in Florida: What You Need to Know",
        excerpt: "Florida allows medical exemptions for window tint. Here's how to apply and what conditions qualify.",
      },
      {
        title: "California Window Tint Laws & Medical Exemptions Explained",
        excerpt: "California has strict tint laws but does allow medical exemptions. Learn the requirements.",
      },
      {
        title: "Texas Window Tint Exemption: Eligibility, Process & Forms",
        excerpt: "A complete walkthrough for getting your medical window tint exemption in the state of Texas.",
      },
    ],
  },
  {
    title: "Medical Conditions & Eye Health",
    icon: BookOpen,
    description: "Learn about conditions that may qualify you for a tint exemption.",
    articles: [
      {
        title: "Photosensitivity and Window Tint: Why Darker Tint Can Help",
        excerpt: "Understanding how photosensitivity affects daily driving and why medical tint exemptions exist.",
      },
      {
        title: "Lupus & Sun Sensitivity: Protecting Yourself While Driving",
        excerpt: "For lupus patients, UV exposure through car windows can trigger flares. Medical tint exemptions can help.",
      },
      {
        title: "Post-LASIK Light Sensitivity: Do You Qualify for a Tint Exemption?",
        excerpt: "After LASIK or cataract surgery, light sensitivity is common. Learn if you qualify for darker window tint.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Resources & Insights
          </h1>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto">
            Helpful articles, guides, and information about medical window tint
            exemptions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((cat, ci) => (
          <div key={ci} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <cat.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary-dark">
                  {cat.title}
                </h2>
                <p className="text-sm text-gray-500">{cat.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cat.articles.map((article, ai) => (
                <div
                  key={ai}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl mb-5 flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-accent/30" />
                  </div>
                  <h3 className="font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Get Your Exemption?
          </h3>
          <p className="text-amber-100 mb-8 max-w-lg mx-auto">
            Start your application today and get your physician-signed medical
            exemption certificate.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-primary bg-white hover:bg-amber-50 rounded-full transition-all shadow-xl"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
