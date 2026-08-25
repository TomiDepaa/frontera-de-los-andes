export default function robots() {
  const siteUrl = "https://www.fronteradelosandes.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
