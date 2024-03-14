import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const userUpdateSchema = z.object({
  userId: z.string(),
  inviteLink: z.string(),
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

    const organisation = await prisma.organisation.findFirst({
      where: {
        inviteLink: body.inviteLink,
      },
    });

    const updatedUser = await prisma.user.update({
      where: {
        id: body.userId,
      },
      data: {
        organisationId: organisation?.id,
      },
    });

    return createApiResponse(updatedUser);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/user/update");
  }
}
