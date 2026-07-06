import type { MetadataRoute } from "next";

import { contact } from "@/data/contact";

const pages = [
  "",
  "/sobre",
  "/servicos",
  "/urnas-funerarias",
  "/traslado-funerario",
  "/transporte-aereo-funerario",
  "/planos-funerarios",
  "/velorio-online",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${contact.siteUrl}${page}`,
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
    lastModified: new Date(),
  }));
}
