import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

// TODO: Only a draft
const leaveOrganisationSchema = z.object({
  userId: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = leaveOrganisationSchema.parse(json);

    const res = await prisma.user.update({
      where: {
        id: body.userId,
      },
      data: {
        organisationId: null,
      },
    });

    return createApiResponse(res);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/organisation/leave");
  }
}
