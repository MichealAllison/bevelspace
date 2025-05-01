import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import "./globals.css";
import Footer from "@/components/layout/footer/footer";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: {
    default: "Bevel Space | Modern Real Estate Platform",
    template: "%s | Bevel Space",
  },
  description: "Bevel Space - The innovative real estate platform that transforms property buying, selling, and management. Where Real Estate Meets Clarity with cutting-edge technology and seamless experience.",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    "bevel space",
    "bevelspace",
    "real estate platform",
    "property search",
    "property management",
    "real estate technology",
    "property listings",
    "buy property",
    "sell property",
    "rent property",
    "real estate agent",
    "real estate company",
    "property technology",
    "proptech",
    "real estate marketplace",
    "modern real estate",
    "digital real estate platform",
    "real estate solutions",
    "property search engine",
    "real estate innovation"
  ],
  authors: [{ name: "Bevel Space" }],
  creator: "Bevel Space",
  publisher: "Bevel Space",
  openGraph: {
    title: "Bevel Space | Where Real Estate Meets Clarity",
    description: "Transform your real estate experience with Bevel Space - the innovative platform revolutionizing property buying, selling, and management with cutting-edge technology.",
    type: "website",
    url: "https://bevelspace.vercel.app/",
    siteName: "Bevel Space",
    locale: "en_US",
    images: [
      {
        url: '/images/bevelspacelogo.png',
        width: 1200,
        height: 630,
        alt: "Bevel Space - Modern Real Estate Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bevelspace",
    title: "Bevel Space | Modern Real Estate Platform",
    description: "Transform your real estate experience with Bevel Space - the innovative platform revolutionizing property buying, selling, and management.",
    images: [
      {
        url: "/images/bevelspacelogo.png",
        width: 1200,
        height: 630,
        alt: "Bevel Space - Modern Real Estate Platform",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "Add-your-google-verification-code",
  },
  alternates: {
    canonical: 'https://bevelspace.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Bevel Space',
                url: 'https://bevelspace.vercel.app',
              })
            }}
          />
        </head>
        <body className="min-h-screen relative">
          <Header/>
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}