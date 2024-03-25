import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const donationCreateSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email("Invalid email address"),
  amount: z.number().int().positive("Amount must be positive"),
  reason: z.string().optional(),
  organisationId: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = donationCreateSchema.parse(json);

    const newDonation = await prisma.donation.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        amount: body.amount,
        reason: body.reason,
        organisationId: body.organisationId,
      },
    });

    return createApiResponse(newDonation);
  } catch (error) {
    console.error(error);
    return handleApiError(error, "ERROR: POST /api/donation/create");
  }
}
