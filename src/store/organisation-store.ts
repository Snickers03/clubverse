import { Organisation, User } from "@prisma/client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import {
  createOrganisationAction,
  getOrganisationAction,
} from "@/actions/organisation.actions";

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
        set({ organisation: { ...organisation, users: null } });
        return organisation;
      },

      getOrganisation: async (
        userId: string,
      ): Promise<Organisation & { users: User[] }> => {
        const organisationWithUsers = await getOrganisationAction(userId);
        set({ organisation: organisationWithUsers });
        return organisationWithUsers;
      },

      leaveOrganisation: () => {
        set({ organisation: null });
      },
    }),
    { name: "organisation-store" },
  ),
);
