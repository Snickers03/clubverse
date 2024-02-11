import { Organisation, User } from "@prisma/client";

export const createOrganisationAction = async (
  userId: string,
  organisationName: string,
): Promise<Organisation> => {
  const res = await fetch("/api/organisation/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, organisationName }),
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};

export const getOrganisationAction = async (
  userId: string,
): Promise<Organisation & { users: User[] }> => {
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

export const searchOrganisationAction = async (
  searchTerm: string,
): Promise<Organisation[]> => {
  const res = await fetch("/api/organisation/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchTerm }),
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};
