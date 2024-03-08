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

export const donationFormSchema = z.object({
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
  donationAmount: z
    .number({
      required_error: "*",
    })
    .positive("Spendenbetrag muss größer als 0 sein."),
  donationPurpose: z.string().optional(),
  agreeToTerms: z.boolean({
    required_error: "*",
  }),
});
