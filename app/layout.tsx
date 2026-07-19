import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://james.nard.uk"),
  title: "James Jordan | Clubhouse Operations & Member Experience",
  description: "A considered profile of James Jordan, Clubhouse Manager at Balcones Country Club.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "profile",
    url: "/",
    title: "James Jordan | Clubhouse Operations & Member Experience",
    description: "A considered profile of James Jordan, Clubhouse Manager at Balcones Country Club.",
    siteName: "James Jordan",
    images: [{ url: "/james-jordan-og.png", width: 1200, height: 630, alt: "James Jordan — Clubhouse Operations & Member Experience" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Jordan | Clubhouse Operations & Member Experience",
    description: "A considered profile of James Jordan, Clubhouse Manager at Balcones Country Club.",
    images: ["/james-jordan-og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
