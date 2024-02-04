"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { RegisterSchema } from "@/schemas";
import { useUserStore } from "@/store/user-store";
import { Form, Formik } from "formik";
import { toast } from "sonner";

import InputUI from "../ui/InputUI";

const SignUp = () => {
  const router = useRouter();

  const registerUser = useUserStore((state) => state.register);

  return (
    <div>
      <Formik
        validationSchema={RegisterSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          toast.promise(
            registerUser(values.name, values.email, values.password),
            {
              loading: "Registrierung läuft...",
              success: (data) => {
                resetForm();
                router.push("/");
                return "Willkommen " + data.name;
              },
              error: (err) => {
                console.error(err);
                return err.message;
              },
            },
          );
        }}
      >
        {({ errors }) => (
          <Form>
            <p className='text-center text-2xl font-medium'>🔒 Registrierung</p>
            <InputUI
              fieldName='name'
              label='Name'
              placeholder='Name'
              error={errors.name}
              focus
            />
            <InputUI
              fieldName='email'
              label='Email'
              placeholder='Email'
              error={errors.email}
            />
            <InputUI
              fieldName='password'
              label='Passwort'
              placeholder='Passwort'
              error={errors.password}
              type='password'
            />
            <InputUI
              fieldName='confirmPassword'
              label='Passwort wiederholen'
              placeholder='Passwort wiederholen'
              error={errors.confirmPassword}
              type='password'
            />
            <button type='submit' className='btn-primary mt-4'>
              Registrieren
            </button>
          </Form>
        )}
      </Formik>
      <p className='mb-2 mt-4 font-semibold'>Du hast bereits einen Account?</p>
      <Link href={"/login"}>
        <p className='btn-secondary text-center'>Jetzt anmelden</p>
      </Link>
    </div>
  );
};

export default SignUp;
