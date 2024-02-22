import { ReactNode } from "react";
import type { Metadata } from "next";

import Navigation from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "ClubVerse | Main",
  description: "ClubVerse - Dein Verein im Überblick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='container mx-auto mt-4'>
      <Navigation />
      {children}
    </div>
  );
}
