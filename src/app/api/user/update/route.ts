import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const userUpdateSchema = z.object({
  userId: z.string(),
  organisationId: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = userUpdateSchema.parse(json);

    const user = await prisma.user.findUnique({
      where: {
        id: body.userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: body.userId,
      },
      data: {
        organisationId: body.organisationId,
      },
    });
    return createApiResponse(updatedUser);
  } catch (error) {
    return handleApiError(error, "ERROR: PUT /api/user/create");
  }
}
