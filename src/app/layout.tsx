import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import "./globals.css";
import Footer from "@/components/layout/footer/footer";
export const metadata: Metadata = {
  title: "Bevel Space",
  description: "Where Real Estate Meets Clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
