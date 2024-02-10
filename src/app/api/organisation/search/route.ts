import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const organisationSearchSchema = z.object({
    organisationName: z.string(),
});

export async function GET(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No json provided");
    }

    const body = organisationSearchSchema.parse({ json });

    const organisations = await prisma.organisation.findMany({
      where: {
        name: {
          contains: body.organisationName,
        },
      },
      include: {
        users: true,
      },
    });

    return createApiResponse(organisations);
  } catch (error) {
    return handleApiError(error, "ERROR: GET /api/organisation/search");
  }
}