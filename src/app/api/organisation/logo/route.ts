import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const organisationUpdateLogoSchema = z.object({
  organisationId: z.string(),
  newLogoUrl: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = organisationUpdateLogoSchema.parse(json);

    const organisation = await prisma.organisation.update({
      where: {
        id: body.organisationId,
      },
      data: {
        logoUrl: body.newLogoUrl,
      },
    });

    const organisationWithUsers = await prisma.organisation.findFirst({
      where: {
        id: organisation.id,
      },
      include: {
        users: true,
      },
    });

    return createApiResponse(organisationWithUsers);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/organisation/logo");
  }
}
