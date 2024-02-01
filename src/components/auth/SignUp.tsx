"use client";

import Link from "next/link";
import { Field, Form, Formik } from "formik";

import InputUI from "../ui/InputUI";

const SignUp = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={async (values) => {
          // login api call
          const res = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
            }),
          });

          const data = await res.json();
          console.log("data: ", data);

          return;
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
