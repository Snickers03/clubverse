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

  searchOrganisation: (searchTerm: string) => Promise<Organisation[]>;

  updateOrganisationName: (
    organisationId: string,
    newOrganisationName: string,
  ) => Promise<Organisation>;

  leaveOrganisation: (userId: string) => Promise<void>;

  createRequest: (userId: string, organisationId: string) => Promise<Request>;
}
