import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const organisationCreateSchema = z.object({
  userId: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = organisationCreateSchema.parse(json);

    const user = await prisma.user.findFirst({
      where: {
        id: body.userId,
      },
    });

    if (!user) {
      return handleApiError("User not found", "ERROR: POST /api/organisation");
    }

    if (user.organisationId) {
      const organisationWithUsers = await prisma.organisation.findFirst({
        where: {
          id: user.organisationId,
        },
        include: {
          users: true,
        },
      });

      return createApiResponse(organisationWithUsers);
    } else {
      return createApiResponse(null);
    }
  } catch (error) {
    return handleApiError(error, "ERROR: POST /api/organisation");
  }
}

const organisationUpdateSchema = z.object({
  organisationId: z.string(),
  newOrganisationName: z.string(),
});

export async function PUT(req: Request) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      throw new Error("No JSON provided");
    }

    const body = organisationUpdateSchema.parse(json);

    const organisation = await prisma.organisation.update({
      where: {
        id: body.organisationId,
      },
      data: {
        name: body.newOrganisationName,
      },
      include: {
        users: true,
      },
    });

    return createApiResponse(organisation);
  } catch (error) {
    return handleApiError(error, "ERROR: PUT /api/organisation");
  }
}
