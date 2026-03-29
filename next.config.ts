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
      { source: "/shop/:path*", destination: "/get-started", permanent: true },
      { source: "/cart", destination: "/get-started", permanent: true },
      { source: "/checkout/:path*", destination: "/get-started", permanent: true },
      { source: "/my-account/:path*", destination: "/get-started", permanent: true },
      // Old blog/category paths
      { source: "/category/:path*", destination: "/resources", permanent: true },
      { source: "/tag/:path*", destination: "/resources", permanent: true },
      // Old page slugs
      { source: "/window-tint-laws", destination: "/window-tint-laws-by-state", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      // Common WordPress artifacts
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/:path*", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
