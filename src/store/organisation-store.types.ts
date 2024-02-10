import { Organisation, User } from "@prisma/client";

export interface InitialOrganiastionStateProps {
  organisation: (Organisation & { users: User[] | null }) | null;
}

export interface OrganisationProps {
  organisation: (Organisation & { users: User[] | null }) | null;

  createOrganisation: (
    userId: string,
    organisationName: string,
  ) => Promise<Organisation>;

  getOrganisation: (
    userId: string,
  ) => Promise<Organisation & { users: User[] }>;

  // TODO: Delete from db
  leaveOrganisation: () => void;
}
