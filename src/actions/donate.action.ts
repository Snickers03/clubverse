import { Donation } from "@prisma/client";

export const checkOrganisationExists = async (
    organisationName: string,
): Promise<boolean> => {
    try {
        const res = await fetch("/api/donate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ organisationName }),
        });

        if (!res.ok) {
            if (res.status === 400) {
                return false;
            } else {
                throw new Error("Error checking organisation");
            }
        }

        const data = await res.json();
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
};

export const getOrganisationID = async (
    organisationName: string,
): Promise<string> => {
    try {
        const res = await fetch("/api/donate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ organisationName }),
        });

        if (!res.ok) {
            if (res.status === 400) {
                return "Organisation not found";
            } else {
                throw new Error("Error getting organisation ID");
            }
        }

        const data = await res.json();
        return data.id;

    } catch (error) {
        console.error(error);
        return "Error getting organisation ID";
    }
};

export const createDonationAction = async (
    firstName: string,
    lastName: string,
    email: string,
    amount: number,
    reason: string | undefined,
    id: string,
): Promise<Donation> => {
    const res = await fetch("/api/donation/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, amount, reason, id }),
    });

    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }

    return data;
};
