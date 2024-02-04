"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginSchema } from "@/schemas";
import { useUserStore } from "@/store/user-store";
import { Form, Formik } from "formik";
import { toast } from "sonner";

import InputUI from "../ui/InputUI";

const Login = () => {
  const router = useRouter();
  const loginUser = useUserStore((state) => state.login);

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm, setFieldValue }) => {
          toast.promise(loginUser(values.email, values.password), {
            loading: "Du wirst eingeloggt...",
            success: (data) => {
              resetForm();
              router.push("/");
              return "Willkomen zurück " + data.name + "!";
            },
            error: (err) => {
              setFieldValue("password", "");
              return err.message;
            },
          });
        }}
      >
        {({ errors }) => (
          <Form>
            <p className='text-center text-2xl font-medium'>🔒 Login</p>
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
