import { create } from "zustand";
import { devtools } from "zustand/middleware";

import {
  createOrganisationAction,
  getOrganisationAction,
  updateOrganisationNameAction,
} from "@/actions/organisation.actions";
import {
  addMemberToOrganisationAction,
  checkInviteLinkAction,
} from "@/actions/organisation/member.actions";

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
      addMemberToOrganisation: async (
        firstName: string,
        lastName: string,
        email: string,
        role: string,
        organisationId: string,
      ) => {
        const newMember = await addMemberToOrganisationAction(
          firstName,
          lastName,
          email,
          role,
          organisationId,
        );
        const adminId = useOrganisationStore.getState().organisation
          ?.adminId as string;
        get().getOrganisation(adminId);
        return newMember;
      },
      validateInviteLink: async (inviteLink: string): Promise<string> => {
        const res = await checkInviteLinkAction(inviteLink);
        return res;
      },
      joinOrganisation: async (
        userId: string,
        inviteLink: string,
      ): Promise<OrganisationWithUsers> => {
        // add orgaId to user
        const organisationWithUsers = await getOrganisationAction(userId);
        set({ organisation: organisationWithUsers });
        return organisationWithUsers;
      },
    }),
    { name: "organisation-store" },
  ),
);
