"use client";

import { Field, Form, Formik } from "formik";

const Login = () => {
  return (
    <div>
      <p className='py-2 text-2xl font-medium'>Login</p>
      <Formik
        initialValues={{ email: "", password: "" }}
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
        <Form>
          <div className='space-y-2'>
            <Field
              className='border-1 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600'
              name='email'
              placeholder='Email'
            />
            <br />
            <Field
              className='border-1 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600'
              type='password'
              name='password'
              placeholder='Password'
            />
          </div>
          <button
            className='mt-2 rounded-md bg-green-400 px-6 py-2'
            type='submit'
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
