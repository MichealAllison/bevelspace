import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import "./globals.css";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
