import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClubVerse | FAQ",
  description: "ClubVerse - Dein Verein im Überblick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className='container mx-auto mt-4'>{children}</div>;
}
