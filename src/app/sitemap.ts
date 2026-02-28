import { routing } from "@/i18n/routing";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://quickhire.example.com";

  const localeRoutes = routing.locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/jobs`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ]);

  return localeRoutes;
}
