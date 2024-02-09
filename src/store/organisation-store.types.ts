import { Organisation } from "@prisma/client";

export interface InitialOrganiastionStateProps {
  organisation: Organisation | null;
}

export interface OrganisationProps {
  organisation: Organisation | null;

  createOrganisation: (
    userId: string,
    organisationName: string,
  ) => Promise<Organisation>;

  // TODO: Delete from db
  leaveOrganisation: () => void;
}
