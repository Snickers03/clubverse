"use client";

import { useEffect } from "react";
import { useOrganisationStore } from "@/store/organisation-store";
import { useUser } from "@clerk/nextjs";

import { createUserAction } from "@/actions/user.actions";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Page() {
  const { user: clerkUser } = useUser();

  const getOrganisation = useOrganisationStore(
    (state) => state.getOrganisation,
  );

  useEffect(() => {
    if (clerkUser) {
      const createUser = async () => {
        const userRes = await createUserAction(clerkUser);
        const userId = userRes.id;
        await getOrganisation(userId);
      };

      createUser();
    }
  }, [clerkUser, getOrganisation]);

  return (
    <div className='mt-8'>
      <Dashboard />
    </div>
  );
}
