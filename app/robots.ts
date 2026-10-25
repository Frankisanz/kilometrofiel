import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Search and AI answer crawlers are welcome: being cited by ChatGPT,
// Perplexity, Gemini or Claude needs the same access Google gets. They are
// listed explicitly so a future blanket rule can't shut them out by accident.
const AI_CRAWLERS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
