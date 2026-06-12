import type { Metadata } from "next";
import "./globals.css";

// UPDATE: customise title, description, and Open Graph for SEO
export const metadata: Metadata = {
  title: "Alexander E. Vásquez | Retail Operations & Visual Merchandising Leader",
  description:
    "15+ years of experience driving store performance, visual execution, team development, and operational excellence in high-volume retail environments.",
  keywords: [
    "Retail Operations",
    "Visual Merchandising",
    "Store Leadership",
    "KPI Performance",
    "Old Navy",
    "Gap Inc",
    "Team Development",
  ],
  authors: [{ name: "Alexander E. Vásquez" }],
  openGraph: {
    title: "Alexander E. Vásquez | Retail Operations Leader",
    description:
      "15+ years driving store performance, visual execution, and team development.",
    type: "website",
    // UPDATE: add real URL once deployed
    url: "https://alexvasquez.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#e5e5e5]">
        {children}
      </body>
    </html>
  );
}
