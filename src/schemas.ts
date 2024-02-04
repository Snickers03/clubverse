import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ungütlige Email-Adresse")
    .required("Email wird benötigt"),
  password: Yup.string().required("Passwort wird benötigt"),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ungütlige Email-Adresse")
    .required("Email wird benötigt"),
  password: Yup.string().required("Passwort wird benötigt"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwörter müssen übereinstimmen",
  ),
});
