import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/kids-nutrition-2", destination: "/kids-nutrition", permanent: true },
      { source: "/book", destination: "/book-free-consultation", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      {
        source: "/diabetes-reversal-meals-plan",
        destination: "/diabetes-reversal-meals-plan-2",
        permanent: false,
      },
      {
        source: "/muscle-gain-meals-plan",
        destination: "/muscle-gain-meals-plan-2",
        permanent: false,
      },
      { source: "/fat-loss-meals-plan", destination: "/fat-loss-meals", permanent: false },
      { source: "/pregnancy-wellness", destination: "/pregnancy-wellness-page", permanent: false },
      { source: "/privacy-policy-2", destination: "/privacy-policy", permanent: true },
    ];
  },
};

export default nextConfig;
