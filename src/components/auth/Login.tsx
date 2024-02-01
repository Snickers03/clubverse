"use client";

import Link from "next/link";
import { Form, Formik } from "formik";

import InputUI from "../ui/InputUI";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          const res = await fetch("/api/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const data = await res.json();
          console.log("res data: ", data);

          return;
        }}
      >
        {({ errors }) => (
          <Form>
            <p className='text-center text-2xl font-medium'>Login</p>
            <InputUI
              fieldName='email'
              label='Deine Email'
              placeholder='Email'
              error={errors.email}
              focus
            />
            <InputUI
              fieldName='password'
              label='Dein Passwort'
              placeholder='Passwort'
              error={errors.password}
              type='password'
            />
            <button type='submit' className='btn-primary mt-4'>
              Login
            </button>
          </Form>
        )}
      </Formik>
      <p className='mb-2 mt-4 font-semibold'>Noch keinen Account?</p>
      <Link href={"/sign-up"}>
        <p className='btn-secondary text-center'>Jetzt registrieren</p>
      </Link>
    </div>
  );
};

export default Login;
