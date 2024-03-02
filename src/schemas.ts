import { z } from "zod";

export const AddMemberFormSchema = z.object({
  forename: z.string({
    required_error: "*",
  }),
  surname: z.string({
    required_error: "*",
  }),
  email: z
    .string({
      required_error: "*",
    })
    .email({
      message: "* Ungültige Email-Adresse",
    }),
  role: z.string().optional(),
});

export const createOrganisationFormSchema = z.object({
  name: z.string({
    required_error: "*",
  }),
  type: z.string({
    required_error: "",
  }),
});
