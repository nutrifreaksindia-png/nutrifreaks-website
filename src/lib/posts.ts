import posts from "@/content/posts.json";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
  lang: "en" | "ta";
  categories: string[];
};

export function getPosts(): Post[] {
  return posts as Post[];
}

export function getPost(slug: string): Post | undefined {
  const decoded = decodeURIComponent(slug);
  return getPosts().find((p) => p.slug === slug || p.slug === decoded);
}

export function getPostsByLang(lang: "en" | "ta") {
  return getPosts().filter((p) => p.lang === lang);
}
