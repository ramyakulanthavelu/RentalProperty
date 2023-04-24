import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import property__validate from "@/lib/validate";

function registra() {
  //console.log(formik.errors);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contact: "",
      price: "",
    },

    validate : property__validate,

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
  }

  return (
    <div className="flex h-screen flex-col justify-center text-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex-col">
          <div>
            <input
              type="text"
              placeholder="Name"
              {...formik.getFieldProps("name")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              {...formik.getFieldProps("address")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Contact"
              {...formik.getFieldProps("contact")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Price"
              {...formik.getFieldProps("price")}
            />
          </div>
          <button type="submit"> Register</button>
        </div>
      </form>
    </div>
  );
}

export default registra;
