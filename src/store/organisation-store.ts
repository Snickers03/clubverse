import { create } from "zustand";
import { devtools } from "zustand/middleware";

import {
  checkOrganisationExistsAction,
  createDonationAction,
} from "@/actions/donate.action";
import {
  createOrganisationAction,
  getOrganisationAction,
  updateOrganisationLogoAction,
  updateOrganisationNameAction,
} from "@/actions/organisation.actions";
import {
  addMemberToOrganisationAction,
  checkInviteLinkAction,
} from "@/actions/organisation/member.actions";
import { joinOrganisationAction } from "@/actions/user.actions";

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
        await joinOrganisationAction(userId, inviteLink);
        const organisationWithUsers = await getOrganisationAction(userId);
        set({ organisation: organisationWithUsers });
        return organisationWithUsers;
      },
      createDonation: async (
        firstName: string,
        lastName: string,
        email: string,
        donationAmount: number,
        reason: string,
        organisationName: string,
      ) => {
        const resOrganisationId =
          await checkOrganisationExistsAction(organisationName);
        if (!resOrganisationId) {
          throw new Error("Organisation not found");
        }
        console.log(resOrganisationId);
        const newDonation = await createDonationAction(
          firstName,
          lastName,
          email,
          donationAmount,
          reason,
          resOrganisationId,
        );
        return newDonation;
      },
      updateOrganisationLogo: async (
        organisationId: string,
        newLogoUrl: string,
      ) => {
        const updatedOrganisation = await updateOrganisationLogoAction(
          organisationId,
          newLogoUrl,
        );

        set({ organisation: updatedOrganisation });

        return updatedOrganisation;
      },
    }),
    { name: "organisation-store" },
  ),
);
