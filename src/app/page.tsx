"use client";

import { useUserStore } from "@/store/user-store";

import Dashboard from "@/components/dashboard/Dashboard";
import Landing from "@/components/Landing";

export default function Home() {
  const user = useUserStore((state) => state.user);

  return <main className='mt-10'>{user ? <Dashboard /> : <Landing />}</main>;
}
