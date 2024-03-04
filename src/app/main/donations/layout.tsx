import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClubVerse | Spenden",
  description: "ClubVerse - Dein Verein im Überblick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
