import * as Yup from "yup";

export const CreateOrganisationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Bitte gib einen Namen ein.")
    .max(128, "Der Name ist zu lang."),
});

export const SearchOrganisationSchema = Yup.object().shape({
  searchTerm: Yup.string()
    .required("Bitte gib einen Namen ein.")
    .min(3, "Der Name ist zu kurz."),
});
