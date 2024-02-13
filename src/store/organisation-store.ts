import { Organisation, User } from "@prisma/client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import {
  createOrganisationAction,
  getOrganisationAction,
  leaveOrganisationAction,
  searchOrganisationAction,
  updateOrganisationNameAction,
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
        await createOrganisationAction(userId, organisationName);
        const organisation = get().getOrganisation(userId);
        return organisation;
      },

      getOrganisation: async (
        userId: string,
      ): Promise<Organisation & { users: User[] }> => {
        const organisationWithUsers = await getOrganisationAction(userId);
        set({ organisation: organisationWithUsers });
        return organisationWithUsers;
      },

      searchOrganisation: async (
        searchTerm: string,
      ): Promise<Organisation[]> => {
        const organisations = await searchOrganisationAction(searchTerm);
        return organisations;
      },

      updateOrganisationName: async (
        organisationId: string,
        newOrganisationName: string,
      ): Promise<Organisation & { users: User[] }> => {
        const updatedOrganisation = await updateOrganisationNameAction(
          organisationId,
          newOrganisationName,
        );
        set({ organisation: updatedOrganisation });
        return updatedOrganisation;
      },

      leaveOrganisation: async (userId: string): Promise<void> => {
        await leaveOrganisationAction(userId);
        set({ organisation: null });
      },
    }),
    { name: "organisation-store" },
  ),
);
