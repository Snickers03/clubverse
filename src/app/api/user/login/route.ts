import { prisma } from "@/db";
import * as z from "zod";

const loginUserSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export async function POST(req: Request, res: Response) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      return "ERROR: No JSON provided";
    }

    const body = loginUserSchema.parse(json);

    // Prisma Call to login user

    const user = "USER LOGIN SUCCESS";

    return new Response(JSON.stringify(user), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return "ERROR";
  }
}
