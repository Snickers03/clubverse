import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const organisationCreateSchema = z.object({
  userId: z.string(),
  organisationName: z.string(),
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
        adminId: body.userId,
        name: body.organisationName,
      },
    });

    await prisma.user.update({
      where: {
        id: body.userId,
      },
      data: {
        organisationId: newOrganisation.id,
      },
    });

    return createApiResponse(newOrganisation);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/organisation/create");
  }
}
