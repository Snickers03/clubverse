import { z } from "zod";

export const AddMemberFormSchema = z.object({
  firstName: z.string({
    required_error: "*",
  }),
  lastName: z.string({
    required_error: "*",
  }),
  email: z
    .string({
      required_error: "*",
    })
    .email({
      message: "* Ungültige Email-Adresse",
    }),
  role: z.string(),
});

export const createOrganisationFormSchema = z.object({
  name: z.string({
    required_error: "*",
  }),
  type: z.string({
    required_error: "",
  }),
});
