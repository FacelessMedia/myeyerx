import { MetadataRoute } from "next";
import { STATES, CONDITIONS } from "@/data/states";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://myeyerx.net";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/get-started`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/refund-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/conditions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/window-tint-laws-by-state`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const stateExemptionPages: MetadataRoute.Sitemap = STATES.map((state) => ({
    url: `${baseUrl}/${state.slug}-window-tint-medical-exemption`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const stateLawPages: MetadataRoute.Sitemap = STATES.map((state) => ({
    url: `${baseUrl}/window-tint-laws-by-state/${state.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const conditionPages: MetadataRoute.Sitemap = CONDITIONS.map((condition) => ({
    url: `${baseUrl}/conditions/${condition.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...stateExemptionPages, ...stateLawPages, ...conditionPages];
}
