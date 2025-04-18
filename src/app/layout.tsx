import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
