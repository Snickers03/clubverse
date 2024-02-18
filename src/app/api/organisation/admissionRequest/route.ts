import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const requestCreateSchema = z.object({
  userId: z.string(),
  organisationId: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = requestCreateSchema.parse(json);

    const newRequest = await prisma.requests.create({
        data: {
            userId: body.userId,
            organisationId: body.organisationId,
            status: "PENDING",
        },
    });
    return createApiResponse(newRequest);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/organisation/admissionRequest");
  }
}