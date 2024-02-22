import { create } from "zustand";
import { devtools } from "zustand/middleware";

import {
  createOrganisationAction,
  getOrganisationAction,
  leaveOrganisationAction,
  updateOrganisationNameAction,
} from "@/actions/organisation.actions";

import {
  InitialOrganiastionStateProps,
  OrganisationProps,
  OrganisationWithUsers,
} from "./organisation-store.types";

export const initialUserState: InitialOrganiastionStateProps = {
  organisation: null,
};

export const useOrganisationStore = create<OrganisationProps>()(
  devtools(
    (set, get) => ({
      ...initialUserState,

      createOrganisation: async (
        organisationName: string,
        organisationType: string,
        adminId: string,
      ): Promise<OrganisationWithUsers> => {
        const res = await createOrganisationAction(
          organisationName,
          organisationType,
          adminId,
        );
        const organisationWithUsers = { ...res, users: null };
        return organisationWithUsers;
      },

      updateOrganisationAdmin: async (
        organisationId: string,
        userId: string,
      ): Promise<OrganisationWithUsers> => {
        const updatedOrganisation = await updateOrganisationNameAction(
          organisationId,
          userId,
        );
        return updatedOrganisation;
      },

      getOrganisation: async (
        userId: string,
      ): Promise<OrganisationWithUsers> => {
        const organisationWithUsers = await getOrganisationAction(userId);
        set({ organisation: organisationWithUsers });
        return organisationWithUsers;
      },

      updateOrganisationName: async (
        organisationId: string,
        newOrganisationName: string,
      ): Promise<OrganisationWithUsers> => {
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
