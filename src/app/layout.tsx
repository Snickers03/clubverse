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
        <body
          className={clsx("flex min-h-screen flex-col", montserrat.className)}
        >
          {/* ! NOTE: Dont apply main classnames to the body tag -> shadcn dialog bug */}
          <main className='mx-4 flex-grow md:container md:mx-auto'>
            <Navigation />
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
