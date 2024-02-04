import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const loginUserSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      return "ERROR: No JSON provided";
    }

    const body = loginUserSchema.parse(json);

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    return createApiResponse(user);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/user/login");
  }
}
