import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useSession, signIn, signOut } from "next-auth/react";
import login__validate from "@/lib/validate";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();
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
      callbackUrl: "/landing",
    });

    if (status.ok) router.push(status.url);
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">
              Login
            </h1>
            <form onSubmit={formik.handleSubmit}>
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />

            

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-600 focus:outline-none my-1"
            >
              Login
            </button>
            </form>
            <div>
              <p className="w-full text-center py-3 rounded">
                Don't have an account? <br></br>{" "}
                <Link className=" text-blue-600" href={"/register"}>
                  Register Here
                </Link>
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
