import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NGO Management Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isRed = true;
  return (
    <html lang='de'>
      <body className={inter.className}>{children}</body>

      <p>Price:</p>
      <p className={clsx("text-3xl", isRed ? "" : "")}>5€</p>
    </html>
  );
}
