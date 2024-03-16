import { Organisation, User } from "@prisma/client";

export interface OrganisationWithUsers extends Organisation {
  users: User[] | null;
}

export interface InitialOrganiastionStateProps {
  organisation: OrganisationWithUsers | null;
}

export interface OrganisationProps {
  organisation: OrganisationWithUsers | null;

  createOrganisation: (
    organisationName: string,
    organisationType: string,
    adminId: string,
  ) => Promise<Organisation>;

  updateOrganisationAdmin: (
    organisationId: string,
    userId: string,
  ) => Promise<Organisation>;

  getOrganisation: (userId: string) => Promise<OrganisationWithUsers>;

  updateOrganisationName: (
    organisationId: string,
    newOrganisationName: string,
  ) => Promise<Organisation>;

  addMemberToOrganisation: (
    forename: string,
    surname: string,
    email: string,
    role: string,
    organisationId: string,
  ) => Promise<User>;

  validateInviteLink: (inviteLink: string) => Promise<string>;

  joinOrganisation: (
    userId: string,
    inviteLink: string,
  ) => Promise<OrganisationWithUsers>;

  updateOrganisationLogo: (
    newLogoUrl: string,
    organisationId: string,
  ) => Promise<OrganisationWithUsers>;
}
