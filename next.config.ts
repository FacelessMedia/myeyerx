import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const states = [
      "alabama","alaska","arizona","arkansas","california","colorado",
      "connecticut","delaware","florida","georgia","hawaii","idaho",
      "illinois","indiana","iowa","kansas","kentucky","louisiana",
      "maine","maryland","massachusetts","michigan","minnesota",
      "mississippi","missouri","montana","nebraska","nevada",
      "new-hampshire","new-jersey","new-mexico","new-york",
      "north-carolina","north-dakota","ohio","oklahoma","oregon",
      "pennsylvania","rhode-island","south-carolina","south-dakota",
      "tennessee","texas","utah","vermont","virginia","washington",
      "west-virginia","wisconsin","wyoming",
    ];

    const stateRedirects = states.map((s) => ({
      source: `/${s}-window-tint-medical-exemption/`,
      destination: `/${s}-window-tint-medical-exemption`,
      permanent: true,
    }));

    return [
      ...stateRedirects,
      // Old WooCommerce product pages → get-started
      { source: "/product/:path*", destination: "/get-started", permanent: true },
      { source: "/product-tag/:path*", destination: "/get-started", permanent: true },
      { source: "/product-category/:path*", destination: "/get-started", permanent: true },
      { source: "/shop/:path*", destination: "/get-started", permanent: true },
      { source: "/cart", destination: "/get-started", permanent: true },
      { source: "/checkout/:path*", destination: "/get-started", permanent: true },
      { source: "/my-account/:path*", destination: "/get-started", permanent: true },
      // Old blog/category paths
      { source: "/category/:path*", destination: "/resources", permanent: true },
      { source: "/tag/:path*", destination: "/resources", permanent: true },
      { source: "/uncategorized/:path*", destination: "/", permanent: true },
      // Old WordPress blog posts about exemptions
      { source: "/online-medical-exemption-for-window-tint", destination: "/", permanent: true },
      { source: "/online-medical-exemption-for-window-tint/:path*", destination: "/", permanent: true },
      { source: "/qualifying-medical-conditions-for-tint-exemption-in-ny", destination: "/new-york-window-tint-medical-exemption", permanent: true },
      { source: "/qualifying-medical-conditions-for-tint-exemption-in-ny/:path*", destination: "/new-york-window-tint-medical-exemption", permanent: true },
      { source: "/understanding-texas-law-on-window-tint-medical-exemptions", destination: "/texas-window-tint-medical-exemption", permanent: true },
      { source: "/understanding-texas-law-on-window-tint-medical-exemptions/:path*", destination: "/texas-window-tint-medical-exemption", permanent: true },
      // Old condition blog post patterns
      { source: "/can-you-get-a-window-tint-exemption-for-astigmatism", destination: "/conditions/astigmatism", permanent: true },
      { source: "/can-you-get-a-window-tint-exemption-for-migraines", destination: "/conditions/migraines", permanent: true },
      { source: "/can-you-get-a-window-tint-exemption-for-lupus", destination: "/conditions/lupus", permanent: true },
      // Old page slugs
      { source: "/window-tint-laws", destination: "/window-tint-laws-by-state", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/in-school-exams", destination: "/", permanent: true },
      { source: "/in-school-exams/:path*", destination: "/", permanent: true },
      // Common WordPress artifacts
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/:path*", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/comments/feed/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
