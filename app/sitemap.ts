import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://abdarwish-portfolio.vercel.app";
  const routes = ["/", "/#projects", "/#experience", "/#achievements", "/#contact" ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "/" ? 1 : 0.7,
  }));
}
