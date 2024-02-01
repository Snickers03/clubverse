import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const createUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export async function POST(req: Request, res: Response) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      return "ERROR: No JSON provided";
    }

    const body = createUserSchema.parse(json);

    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });

    return createApiResponse(newUser);
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/user/sign-up");
  }
}
