import Link from "next/link";

const articles = [
  {
    category: "Application Tips & Guides",
    title: "Window Tint Exemption for Light Sensitivity: Eligibility & Application Guide",
    excerpt:
      "Learn how to get a window tint exemption for light sensitivity via MyEyeRx. Discover which conditions qualify, severity requirements, and step-by-step application tips.",
    date: "February 5, 2026",
    color: "bg-amber-500",
  },
  {
    category: "Medical Exemptions",
    title: "How to Get a Window Tint Medical Exemption: The Complete Guide",
    excerpt:
      "For residents with light-sensitivity challenges, a window tint exemption is key to comfort and safety. It means driving without dreading the glare and UV exposure.",
    date: "February 5, 2026",
    color: "bg-amber-600",
  },
  {
    category: "State-by-State Requirements",
    title: "How to Apply for a Window Tint Exemption in Texas: A Complete Walkthrough",
    excerpt:
      "How to apply for window tint exemption in Texas? Discover form requirements, eligibility criteria, and the Texas medical exemption application process.",
    date: "January 25, 2026",
    color: "bg-amber-800",
  },
];

export default function Articles() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading">
            Latest Articles & Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <div
              key={i}
              className={`${article.color} rounded-2xl overflow-hidden text-white flex flex-col`}
            >
              {/* Category badge */}
              <div className="px-6 pt-6">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-4 flex-1 flex flex-col">
                <p className="text-white/70 text-sm mb-2">{article.date}</p>
                <h3 className="font-bold text-lg leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed flex-1">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/resources"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-amber-600 border-2 border-amber-500 rounded-full hover:bg-amber-50 transition-all"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
