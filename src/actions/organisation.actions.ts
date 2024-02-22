import { OrganisationWithUsers } from "@/store/organisation-store.types";
import { Organisation } from "@prisma/client";

export const createOrganisationAction = async (
  organisationName: string,
  organisationType: string,
  adminId: string,
): Promise<Organisation> => {
  const res = await fetch("/api/organisation/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ organisationName, organisationType, adminId }),
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};

export const getOrganisationAction = async (
  userId: string,
): Promise<OrganisationWithUsers> => {
  const res = await fetch("/api/organisation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};

export const updateOrganisationNameAction = async (
  organisationId: string,
  newOrganisationName: string,
): Promise<OrganisationWithUsers> => {
  const res = await fetch("/api/organisation", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ organisationId, newOrganisationName }),
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};
