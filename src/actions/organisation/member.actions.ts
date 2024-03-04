import { User } from "@prisma/client";

export const addMemberToOrganisationAction = async (
  firstName: string,
  lastName: string,
  email: string,
  role: string,
  organisationId: string,
): Promise<User> => {
  const res = await fetch("/api/organisation/member", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, email, role, organisationId }),
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};
