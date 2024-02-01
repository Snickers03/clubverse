import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ReactNode } from "react";
import clsx from "clsx";
import { Toaster } from "sonner";

import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClubFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='de'>
      <Toaster richColors position='top-center' />
      <body className={clsx("container mx-auto mt-4", inter.className)}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
