import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const userCreateSchema = z.object({
  clerkId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
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

    if (user) {
      return createApiResponse(user);
    }

    const newUser = await prisma.user.create({
      data: {
        id: body.clerkId,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        // TODO
        mnr: 1,
      },
    });
    return createApiResponse(newUser);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/user/create");
  }
}
