import "./globals.css";

const siteUrl = "https://ryori-ishimine-naha.vercel.app";
const siteName = "料理 いしみね 那覇本店｜極上の和食omakaseコース";
const description = "那覇市松尾の日本料理店。旬の食材、マグロ節と北海道真昆布の出汁、沖縄作家のやちむん、全国の日本酒とともに、おまかせ料理を味わえます。完全予約制。";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteName,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
