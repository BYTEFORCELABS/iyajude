// ============================================================
// SITE CONFIG — single source of truth for SEO
//
// Everything that needs the public URL (canonicals, sitemap,
// robots, Open Graph, JSON-LD) reads it from here. If the domain
// ever changes, change SITE_URL and nothing else.
// ============================================================

export const SITE_URL = "https://iyajude.com";

export const SITE_NAME = "Iya Jude";

export const SITE_FULL_NAME = "Angela Osamor";

export const SITE_TAGLINE =
  "Gospel Minister, Prayer Warrior & Inspirational Content Creator";

export const SITE_DESCRIPTION =
  "Official website of Angela Osamor, known as Iya Jude — Nigerian gospel minister, prayer warrior and inspirational content creator with over 62,000 followers. Join her for daily prayers, devotionals, and Spirit-filled ministry. Book her for your church service, prayer meeting or gospel event.";

// Used for Open Graph and Twitter cards across the site.
export const SITE_OG_IMAGE = "/images/live_praise_fire.jpg";

// Verified official accounts. These become `sameAs` in the JSON-LD,
// which is how search engines tie the site to the real person and
// show the knowledge panel.
export const SOCIAL_PROFILES = [
  "https://www.instagram.com/iya_jude/",
  "https://www.facebook.com/iya_jude",
  "https://www.youtube.com/@iya_jude",
  "https://www.tiktok.com/@iya_jude",
  "https://x.com/iya_jude",
  "https://threads.net/@iya_jude",
];

export const CONTACT = {
  emails: ["angela.osamor@gmail.com"],
  // Primary line first
  phones: ["+234 000 000 0000"],
  locality: "Nigeria",
  region: "Nigeria",
  country: "NG",
};

// Paste the token from Google Search Console -> HTML tag verification.
// Leaving it empty simply omits the tag.
export const GOOGLE_SITE_VERIFICATION = "";

/**
 * Builds a page's metadata with the canonical URL, Open Graph and
 * Twitter card filled in consistently.
 */
export function pageMetadata({ title, description, path = "/", image = SITE_OG_IMAGE }) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 2400, height: 1600, alt: title }],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
