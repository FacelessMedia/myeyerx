export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  author: string;
  authorTitle: string;
  reviewer: string;
  reviewerTitle: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "complete-guide-to-window-tint-medical-exemptions",
    title: "The Complete Guide to Window Tint Medical Exemptions (2026)",
    metaTitle: "Complete Guide to Window Tint Medical Exemptions 2026 | MyEyeRx",
    metaDescription:
      "Everything you need to know about medical window tint exemptions: qualifying conditions, state-by-state requirements, how to apply, costs, and what to expect. Updated for 2026.",
    excerpt:
      "A comprehensive guide covering everything about medical window tint exemptions — from qualifying conditions to state requirements to the application process.",
    category: "Guides",
    author: "Toriano Dewberry",
    authorTitle: "Licensed Optician & Founder of MyEyeRx",
    reviewer: "Dr. Elizabeth Rose Borowiec, OD",
    reviewerTitle: "Medical Director, MyEyeRx",
    publishedDate: "2026-03-28",
    updatedDate: "2026-03-28",
    readTime: "18 min read",
  },
  {
    slug: "how-to-get-tint-exemption-online",
    title: "How to Get a Window Tint Exemption Online in 2026",
    metaTitle: "How to Get a Window Tint Exemption Online | Step-by-Step Guide",
    metaDescription:
      "Learn how to get a medical window tint exemption online through telehealth. Step-by-step process, what you need, costs, and how long it takes.",
    excerpt:
      "A step-by-step walkthrough of the online process for obtaining a medical window tint exemption through a telehealth evaluation.",
    category: "How-To",
    author: "Toriano Dewberry",
    authorTitle: "Licensed Optician & Founder of MyEyeRx",
    reviewer: "Dr. Elizabeth Rose Borowiec, OD",
    reviewerTitle: "Medical Director, MyEyeRx",
    publishedDate: "2026-03-28",
    updatedDate: "2026-03-28",
    readTime: "8 min read",
  },
  {
    slug: "states-that-allow-window-tint-exemptions",
    title: "Which States Allow Medical Window Tint Exemptions? (Full List)",
    metaTitle: "States That Allow Window Tint Exemptions | Complete 2026 List",
    metaDescription:
      "Full list of U.S. states that allow medical exemptions for darker window tint. See which states offer exemptions, requirements, and how to apply in your state.",
    excerpt:
      "A complete breakdown of every U.S. state's medical window tint exemption policy, including which conditions qualify and how to apply.",
    category: "State Guides",
    author: "Toriano Dewberry",
    authorTitle: "Licensed Optician & Founder of MyEyeRx",
    reviewer: "Dr. Elizabeth Rose Borowiec, OD",
    reviewerTitle: "Medical Director, MyEyeRx",
    publishedDate: "2026-03-28",
    updatedDate: "2026-03-28",
    readTime: "12 min read",
  },
  {
    slug: "window-tint-exemption-cost",
    title: "Window Tint Exemption Cost: What to Expect in 2026",
    metaTitle: "Window Tint Exemption Cost | Pricing Guide 2026",
    metaDescription:
      "How much does a medical window tint exemption cost? Compare prices, understand what's included, and learn about the evaluation process. Prices from $225.",
    excerpt:
      "A transparent breakdown of what a medical window tint exemption costs, what's included, and how MyEyeRx pricing compares.",
    category: "Pricing",
    author: "Toriano Dewberry",
    authorTitle: "Licensed Optician & Founder of MyEyeRx",
    reviewer: "Dr. Elizabeth Rose Borowiec, OD",
    reviewerTitle: "Medical Director, MyEyeRx",
    publishedDate: "2026-03-28",
    updatedDate: "2026-03-28",
    readTime: "6 min read",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
