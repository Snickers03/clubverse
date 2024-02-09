"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

import { createUserAction } from "@/actions/user.actions";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Page() {
  const { user: clerkUser } = useUser();

  const clerkUserId = clerkUser?.id;

  useEffect(() => {
    if (clerkUserId) {
      const createUser = async () => {
        await createUserAction(clerkUserId);
      };

      createUser();
    }
  }, [clerkUserId]);

  return (
    <div className='mt-8 text-center'>
      <Dashboard />
    </div>
  );
}
