import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/get-started",
          "/_next/",
        ],
      },
    ],
    sitemap: "https://myeyerx.net/sitemap.xml",
  };
}
