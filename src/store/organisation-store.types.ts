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

  leaveOrganisation: (userId: string) => Promise<void>;
}
