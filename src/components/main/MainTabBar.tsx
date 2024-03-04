"use client";

import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MainTabBar() {
  return (
    <Tabs defaultValue='overview' className='py-2'>
      <div className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-3 '>
          <TabsTrigger asChild value='overview' className='focus:bg-black'>
            <Link href={"/main"}>Übersicht</Link>
          </TabsTrigger>
          <TabsTrigger asChild value='members'>
            <Link href={"/main/members"}>Mitglieder</Link>
          </TabsTrigger>
          <TabsTrigger asChild value='donations'>
            <Link href={"/main/donations"}>Spenden</Link>
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value='overview'></TabsContent>

      <TabsContent value='donations'></TabsContent>
    </Tabs>
  );
}
