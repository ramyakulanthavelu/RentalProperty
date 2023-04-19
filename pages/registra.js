import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

function registra() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contact: "",
      price: "",
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
      else console.log("error");
    } catch {
      error;
    }
    {
      console.error("requestfail");
    }

    //console.log(formik.errors);
    async function onSubmit(values) {
      const status = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });

      if (status.ok) router.push(status.url);
    }

    return (
      <div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Contact" />
          <input type="text" placeholder="Price" />
        </form>
      </div>
    );
  }
}
export default registra;
