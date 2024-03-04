import { ReactNode } from "react";
import type { Metadata } from "next";

import { MainTabBar } from "@/components/main/MainTabBar";
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
      <MainTabBar />
      {children}
    </div>
  );
}
