import { Organisation } from "@prisma/client";

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
