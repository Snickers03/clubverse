import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const organisationCreateSchema = z.object({
  inviteLink: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = organisationCreateSchema.parse(json);

    const organisationName = await prisma.organisation.findFirst({
      where: {
        inviteLink: body.inviteLink,
      },
      select: {
        name: true,
      },
    });

    if (!organisationName) {
      return handleApiError(
        "Organisation not found",
        "ERROR: POST /api/organisation/invite",
      );
    }

    return createApiResponse(organisationName);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/organisation");
  }
}
