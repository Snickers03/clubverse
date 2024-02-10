import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const userCreateSchema = z.object({
  clerkId: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = userCreateSchema.parse(json);

    const user = await prisma.user.findUnique({
      where: {
        id: body.clerkId,
      },
    });

    if (!user) {
      const newUser = await prisma.user.create({
        data: {
          id: body.clerkId,
        },
      });
      return createApiResponse(newUser);
    }

    return createApiResponse(user);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/user/create");
  }
}
