import type { MetadataRoute } from "next";

const SITE_URL = "https://www.graphicsnepal.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/products", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
