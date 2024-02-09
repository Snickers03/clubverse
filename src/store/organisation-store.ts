import { Organisation } from "@prisma/client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createOrganisationAction } from "@/actions/organisation.actions";

import {
  InitialOrganiastionStateProps,
  OrganisationProps,
} from "./organisation-store.types";

export const initialUserState: InitialOrganiastionStateProps = {
  organisation: null,
};

export const useOrganisationStore = create<OrganisationProps>()(
  devtools(
    (set, get) => ({
      ...initialUserState,

      createOrganisation: async (
        userId: string,
        organisationName: string,
      ): Promise<Organisation> => {
        const organisation = await createOrganisationAction(
          userId,
          organisationName,
        );
        set({ organisation });
        return organisation;
      },
      leaveOrganisation: () => {
        set({ organisation: null });
      },
    }),
    { name: "organisation-store" },
  ),
);
