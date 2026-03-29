import { MetadataRoute } from "next";
import { STATES, CONDITIONS } from "@/data/states";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://myeyerx.net";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/refund-policy`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/faqs`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: "2026-03-28", changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/conditions`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/window-tint-laws-by-state`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: "2026-03-28", changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: "2026-03-28", changeFrequency: "yearly", priority: 0.2 },
  ];

  const servedStates = STATES.filter((s) => s.served);

  const stateExemptionPages: MetadataRoute.Sitemap = servedStates.map((state) => ({
    url: `${baseUrl}/${state.slug}-window-tint-medical-exemption`,
    lastModified: state.lastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const stateLawPages: MetadataRoute.Sitemap = STATES.map((state) => ({
    url: `${baseUrl}/window-tint-laws-by-state/${state.slug}`,
    lastModified: state.lastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const conditionPages: MetadataRoute.Sitemap = CONDITIONS.map((condition) => ({
    url: `${baseUrl}/conditions/${condition.slug}`,
    lastModified: "2026-03-28",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...stateExemptionPages, ...stateLawPages, ...conditionPages];
}
