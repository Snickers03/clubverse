import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import * as z from "zod";

const organisationExistSchema = z.object({
    organisationName: z.string(),
});

export async function POST(req: Request) {
    try {
        const json = await req.json().catch(() => null);

        if (!json) {
            throw new Error("No JSON provided");
        }

        const body = organisationExistSchema.parse(json);

        const organisation = await prisma.organisation.findFirst({
            where: {
                name: body.organisationName,
            },
        });

        if (!organisation) {
            return new Response(JSON.stringify(null), { status: 400 });
        }

        return new Response(JSON.stringify(organisation), { status: 200 });

    } catch (error) {
        return handleApiError(error, "ERROR: POST /api/donation/find");
    }
};