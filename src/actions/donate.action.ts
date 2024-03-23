import { Donation, Organisation } from "@prisma/client";

type OrganisationExists = {
  id: string;
  name: string;
  logoUrl: string;
};

export const checkOrganisationExistsAction = async (
  organisationName: string,
): Promise<OrganisationExists | null> => {
  try {
    const res = await fetch("/api/donation/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ organisationName }),
    });

    if (!res.ok) {
      if (res.status === 400) {
        return null;
      } else {
        throw new Error("Error checking organisation");
      }
    }
    const dataOrganisation: Organisation = await res.json();
    return {
      id: dataOrganisation.id,
      name: dataOrganisation.name,
      logoUrl: dataOrganisation.logoUrl || "",
    };
  } catch (error) {
    throw new Error("Error checking organisation");
  }
};

export const createDonationAction = async (
  firstName: string,
  lastName: string,
  email: string,
  amount: number,
  reason: string,
  organisationId: string,
): Promise<Donation> => {
  const res = await fetch("/api/donation/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      amount,
      reason,
      organisationId,
    }),
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};
