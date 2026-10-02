// The dashboard must never be indexed. robots.txt asks crawlers not to
// fetch it; this tag covers the case where a link to it is found anyway.
export const metadata = {
  title: "Admin | Iya Jude",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }) {
  return children;
}
