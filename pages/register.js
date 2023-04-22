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
    <div className="flex flex-col justify-evenly h-screen bg-blue-200">
      <Head>
        <title>Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10 text-center py-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4"> Register</h1>

          <form
            className="flex flex-col gap-5"
            method="post"
            action="/login"
            onSubmit={formik.handleSubmit}
          >
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
            </div>
            <div>
              <span></span>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                {...formik.getFieldProps("username")}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="password"
                placeholder="password"
                {...formik.getFieldProps("password")}
              />
            </div>
            <div className="input-button">
              <button type="submit">Register</button>
            </div>
            <div className="register">
              <button>
                <Link href={"/login"}>Login Instead</Link>
              </button>
            </div>
            <div className="erro">
              <h1 className="balls">
              </h1>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default register;
