"use client";

import { useEffect } from "react";
import { useOrganisationStore } from "@/store/organisation-store";
import { useUser } from "@clerk/nextjs";

import { createUserAction, updateUserAction } from "@/actions/user.actions";
import Overview from "@/components/main/overview/Overview";

export default function Page() {
  const { user: clerkUser } = useUser();
  const organisation = useOrganisationStore((state) => state.organisation);

  const getOrganisation = useOrganisationStore(
    (state) => state.getOrganisation,
  );
  const createOrganisation = useOrganisationStore(
    (state) => state.createOrganisation,
  );

  useEffect(() => {
    // TODO: Currently fetches everytime someone click on the tab -> only fetch if not already fetched / stored

    if (clerkUser) {
      const createUser = async () => {
        const userRes = await createUserAction(clerkUser);
        const userId = userRes.id;
        const storedOrganisation = localStorage.getItem("organisation");

        if (storedOrganisation) {
          try {
            const organisation = JSON.parse(storedOrganisation);
            const newOrga = await createOrganisation(
              organisation.name,
              organisation.type,
              userId,
            );
            const orgaId = newOrga.id;
            await updateUserAction(userId, orgaId);
            await getOrganisation(userId);
            localStorage.removeItem("organisation");
          } catch (error) {
            console.log("Error:", error);
          }
        } else {
          await getOrganisation(userId);
        }
      };
      createUser();
    }
  }, [clerkUser, createOrganisation, getOrganisation]);

  return (
    <div>
      <p className='text-xl font-medium'>Übersicht</p>
      {organisation && <Overview />}
    </div>
  );
}
