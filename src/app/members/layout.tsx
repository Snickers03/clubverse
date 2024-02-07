import { ReactNode } from "react";
import type { Metadata } from "next";

import Navigation from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "ClubVerse | Members",
  description: "ClubVerse - Dein Verein im Überblick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
