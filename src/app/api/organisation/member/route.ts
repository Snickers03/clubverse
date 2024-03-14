import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import { Role } from "@prisma/client";
import * as z from "zod";

const addMemberSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string(),
  organisationId: z.any(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = addMemberSchema.parse(json);

    const organisation = await prisma.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        role: body.role as Role,
        organisationId: body.organisationId,
      },
    });

    return createApiResponse(organisation);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/organisation/member");
  }
}
