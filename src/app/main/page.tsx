"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

import { createUserAction } from "@/actions/user.actions";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Page() {
  // const clerkUser = await currentUser();

  const { user: clerkUser } = useUser();

  const clerkUserId = clerkUser?.id;

  useEffect(() => {
    if (clerkUserId) {
      const createUser = async () => {
        const res = await createUserAction(clerkUserId);
        console.log("res: ", res);
      };

      createUser();
    }
  }, [clerkUserId]);

  return (
    <div className='mt-20 text-center'>
      {/* <p className='text-2xl font-medium'>Main Page / {clerkUser?.username}</p> */}
      <Dashboard />
    </div>
  );
}
