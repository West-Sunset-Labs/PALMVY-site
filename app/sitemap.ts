import type { MetadataRoute } from "next";
import { getSitemapUrls } from "@/core/data/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapUrls().map((url) => ({ url }));
}
