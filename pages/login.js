import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useSession, signIn, signOut } from "next-auth/react";
import login__validate from "@/lib/validate";
import { useRouter } from 'next/router';

function login() {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login__validate,
    onSubmit,
  });

  //console.log(formik.errors);
  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    if(status.ok) router.push(status.url)
  }

  return (
    <div className="flex flex-col justify-evenly h-screen bg-blue-200">
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10 text-center py-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4"> Login test</h1>

          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
            </div>
            {formik.errors.email ? (
              <span className="text-xs font-sans">{formik.errors.email}</span>
            ) : (
              <></>
            )}
            <div className="input-group">
              <input
                type="text"
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
            </div>
            {formik.errors.password ? (
              <span className="text-xs font-sans">
                {formik.errors.password}
              </span>
            ) : (
              <></>
            )}
            <div className="input-button">
              <button type="submit">LOgin</button>
            </div>

            <div className="register">
              <button type="button">
                <Link href={"/register"}>Register</Link>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default login;
