import { pageMetadata } from "@/lib/site";
import { BreadcrumbSchema, AwardsSchema } from "@/components/StructuredData";

export const metadata = pageMetadata({
  title: "Awards & Honours | Iya Jude",
  description:
    "The awards of Iya Jude — Africa Outstanding Music Minister of the Year and Africa Praise Artiste of the Year at the Clima Africa Awards, the YouTube Silver Creator Award, the ALM Gospel Award and more.",
  path: "/awards",
  image: "/images/awards/clima-2025-trophy.jpg",
});

export default function AwardsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Awards", path: "/awards" }]} />
      <AwardsSchema />
      {children}
    </>
  );
}
