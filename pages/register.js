import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/router";

function register() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },

    onSubmit,
  });

  async function onSubmit(values) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    try {
      const post = await fetch(
        "http://localhost:3000/api/auth/signup",
        options
      );
      const data = await post.json();
      if (post.ok) router.push("http://localhost:3000/login");
      else console.log({ data });
    } catch {
      error;
    }
    {
      console.error("requestfail");
    }

    return {
      props: { uexist: data },
    };
    // const post = await fetch("http://localhost:3000/api/auth/signup", options)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data) router.push("http://localhost:3000/login");
    //   });
  }
  console.log(onSubmit.data);

  return (
    <div>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center"> Register</h1>

            <form onSubmit={formik.handleSubmit}>
              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="Email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="Username"
                {...formik.getFieldProps("username")}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="Password"
                placeholder="password"
                {...formik.getFieldProps("password")}
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
                className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 focus:outline-none my-1"
              >
                Register
              </button>
            </form>
            <div>
              <p className="w-full text-center py-3 rounded">
                Already have an account? <br></br>{" "}
                <Link className=" text-blue-600" href={"/login"}>
                  Login Instead
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
