"use client";

import Link from "next/link";
import { Form, Formik } from "formik";
import { toast } from "sonner";

import InputUI from "../ui/InputUI";

const SignUp = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={async (values, { resetForm }) => {
          const res = await fetch("/api/user/sign-up", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          toast.promise(res.json(), {
            loading: "Registrierung läuft...",
            success: (data) => {
              if (res.ok) {
                console.log("user: ", data);
                resetForm();
                return "Willkommen " + data.name;
              } else {
                throw new Error(data.message);
              }
            },
            error: (err) => {
              return err.message;
            },
          });
        }}
      >
        {({ errors }) => (
          <Form>
            <p className='text-center text-2xl font-medium'>Registrierung</p>
            <InputUI
              fieldName='name'
              label='Dein Name'
              placeholder='Name'
              error={errors.name}
              focus
            />
            <InputUI
              fieldName='email'
              label='Deine Email'
              placeholder='Email'
              error={errors.email}
            />
            <InputUI
              fieldName='password'
              label='Dein Passwort'
              placeholder='Passwort'
              error={errors.password}
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
