import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import { ReactNode } from "react";
import { deDE } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import { Toaster } from "sonner";

import Footer from "@/components/layout/Footer";
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
    <ClerkProvider localization={deDE}>
      <html lang='de'>
        <Toaster richColors position='top-center' />
        <body className={clsx("", montserrat.className)}>
          {/* ! NOTE: Dont apply main classnames to the body tag -> shadcn dialog bug */}
          <main className='container mx-auto mt-6 px-3 md:px-0'>
            <Navigation />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
