import { prisma } from "@/db";
import { createOrganisationInviteCode } from "@/lib/utils";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const organisationCreateSchema = z.object({
  organisationName: z.string(),
  organisationType: z.string(),
  adminId: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = organisationCreateSchema.parse(json);

    const newOrganisation = await prisma.organisation.create({
      data: {
        name: body.organisationName,
        type: body.organisationType,
        adminId: body.adminId,
        inviteLink: createOrganisationInviteCode(),
      },
    });

    return createApiResponse(newOrganisation);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/organisation/create");
  }
}
