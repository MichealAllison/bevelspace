import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import "./globals.css";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Bevel Space",
  description: "Where Real Estate Meets Clarity.",
  keywords: ["real estate", "property management", "real estate technology", "property listings"],
  authors: [{ name: "Bevel Space" }],
  openGraph: {
    title: "Bevel Space - Where Real Estate Meets Clarity",
    description: "Transform your real estate experience with Bevel Space's innovative platform.",
    type: "website",
    url: "https://bevelspace.vercel.app/",
    siteName: "Bevel Space",
    locale: "en_US",
    images: [
      {
       url:'images/bevelspacelogo.png',
        width: 1200,
        height: 630,
        alt: "Bevel Space - Where Real Estate Meets Clarity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bevel Space - Where Real Estate Meets Clarity",
    description: "Transform your real estate experience with Bevel Space's innovative platform.",
    images: [
      {
        url: "images/bevelspacelogo.png",
        width: 1200,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}