import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bee-Rich Consulting | Knowledge, Health, Freedom & Fortune",
  description:
    "Bee-Rich Consulting helps you build a life rich in knowledge, health, freedom, and fortune. Book your free consultation today.",
  openGraph: {
    title: "Bee-Rich Consulting",
    description:
      "Bee-Rich in Knowledge, Health, Freedom & Fortune",
    url: "https://bee-richconsulting.com",
    siteName: "Bee-Rich Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
