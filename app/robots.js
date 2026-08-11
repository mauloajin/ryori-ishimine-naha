export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ryori-ishimine-naha.vercel.app/sitemap.xml",
    host: "https://ryori-ishimine-naha.vercel.app",
  };
}
