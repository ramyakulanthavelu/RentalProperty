import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import React from "react";
import property__validate from "@/lib/validate";
import Sidenavbar from "@/components/sidenavbar";

function Agent() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contact: "",
      price: "",
      description: "",
    },

    // validate: property__validate,

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
        "http://localhost:3000/api/auth/property",
        options
      );
      const data = await post.json();
      if (post.ok) router.push("http://localhost:3000/login");
      else console.log(data);
    } catch {
      error;
    }
    {
      console.error("requestfail");
    }
    // const post = await fetch("http://localhost:3000/api/auth/signup", options)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data) router.push("http://localhost:3000/login");
    //   });
  }

  return (
    <Sidenavbar>
      <div>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-auto">
            <h1 className="mb-8 text-3xl text-center">
              Upload Your Property Here
            </h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="propertyname"
              placeholder="Property Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="address"
              placeholder="Address"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="price"
              placeholder="Price"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="description"
              placeholder="Description"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-600 focus:outline-none my-1"
            >
              Submit
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to Swipe Right
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </Sidenavbar>
  );
}

export default Agent;
{
  Agent.getLayout = function PageLayout(page) {
    return (
      <>
        {page}
        <Footer />
      </>
    );
  };
}
