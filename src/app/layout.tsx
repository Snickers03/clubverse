import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import { ReactNode } from "react";
import clsx from "clsx";
import { Toaster } from "sonner";

import Navigation from "@/components/layout/Navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClubVerse",
  description: "ClubVerse - Dein Verein im Überblick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='de'>
      <Toaster richColors position='top-center' />
      <body className={clsx("container mx-auto mt-4", montserrat.className)}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
