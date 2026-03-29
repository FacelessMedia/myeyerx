import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/get-started", "/_next/"],
      },
      // OpenAI crawlers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic (Claude)
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Google AI (Gemini)
      { userAgent: "Google-Extended", allow: "/" },
      // Apple Intelligence
      { userAgent: "Applebot-Extended", allow: "/" },
      // Microsoft Copilot (uses Bing crawler)
      { userAgent: "Bingbot", allow: "/" },
      // Meta AI
      { userAgent: "FacebookBot", allow: "/" },
    ],
    sitemap: "https://myeyerx.net/sitemap.xml",
  };
}
