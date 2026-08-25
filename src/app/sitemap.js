export default function sitemap() {
  const siteUrl = "https://www.fronteradelosandes.com";
  const routes = ["", "/cabins", "/whatDo", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
