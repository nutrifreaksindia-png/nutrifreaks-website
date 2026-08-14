import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
