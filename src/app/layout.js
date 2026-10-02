import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  GOOGLE_SITE_VERIFICATION,
} from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  // A template means every page gets its own title without repeating
  // the brand, and the home page uses the full default.
  title: {
    default:
      "Iya Jude | Official Website \u2022 Gospel Minister & Prayer Warrior",
    template: "%s",
  },
  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Music",

  keywords: [
    "Iya Jude",
    "Angela Osamor",
    "Iya Jude gospel minister",
    "Iya Jude prayers",
    "Nigerian gospel minister",
    "Nigerian prayer warrior",
    "Christian content creator Nigeria",
    "Angela Osamor minister",
    "gospel preacher Nigeria",
    "book Iya Jude",
    "inspirational minister Nigeria",
  ],

  alternates: { canonical: SITE_URL },

  openGraph: {
    title: "Iya Jude | Official Website",
    description:
      "Angela Osamor, known as Iya Jude, is a Spirit-filled Nigerian gospel minister and prayer warrior. Join 62K+ followers for daily prayers, devotionals, and powerful ministrations. Book her for your church or gospel event.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 2400,
        height: 1600,
        alt: "Iya Jude (Angela Osamor) ministering",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Iya Jude | Official Website",
    description:
      "Angela Osamor (Iya Jude) — Nigerian gospel minister, prayer warrior and inspirational content creator. Book her for your church, prayer meeting or gospel event.",
    images: [SITE_OG_IMAGE],
    creator: "@iya_jude",
  },

  // Explicitly invite full indexing and rich previews.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
};

// Applies the saved theme before first paint so the page never flashes the
// wrong palette. Dark is the brand default; light is opt-in.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t==="light"?"light":"dark")}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`;

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ArtistSchema } from "@/components/StructuredData";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-black text-ink min-h-screen flex flex-col font-sans selection:bg-[#F88E14] selection:text-on-gold antialiased">
        <ArtistSchema />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
