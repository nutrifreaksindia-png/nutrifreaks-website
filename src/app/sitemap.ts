import type { MetadataRoute } from "next";
import { plans } from "@/content/plans";
import { policies } from "@/content/policies";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "about",
    "contact",
    "gallery",
    "blog",
    "choose-your-health-goal",
    "meal-plans",
    "book-free-consultation",
    "food-facts-and-myths",
    "english-blogs",
    "tamil-blogs",
    "subscribe",
    "all-meal-plans",
    "our-policies",
    "body-fat-calculator",
    ...Object.keys(plans),
    ...Object.keys(policies),
  ];

  const pages = staticPaths.map((path) => ({
    url: `https://nutrifreaks.com/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = getPosts().map((p) => ({
    url: `https://nutrifreaks.com/${encodeURIComponent(p.slug)}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...pages, ...posts];
}
