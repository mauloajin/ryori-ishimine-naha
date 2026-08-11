export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://ryori-ishimine-naha.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
