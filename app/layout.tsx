import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Jordan | Clubhouse Operations & Member Experience",
  description: "A considered profile of James Jordan, Clubhouse Manager at Balcones Country Club.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
