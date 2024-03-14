import { ReactNode } from "react";
import type { Metadata } from "next";

import { NavigationBar } from "@/components/main/NavigationBar";
import OrganisationHeader from "@/components/main/organisation/OrganisationHeader";

export const metadata: Metadata = {
  title: "ClubVerse | Übersicht",
  description: "ClubVerse - Dein Verein im Überblick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='container mx-auto mt-4'>
      <OrganisationHeader />
      <NavigationBar />
      {children}
    </div>
  );
}
