import React from "react";
import { useState } from "react";
import { useFormik, props } from "formik";
import { useRouter } from "next/router";
import property__validate from "@/lib/validate";
import axios from "axios";

function registra() {
  var imgurl = "";
  const [imageSelected, setImageSelected] = useState("");
  const uploadImage = async () => {
    console.log(imageSelected);

    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "propimg");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dlfrtz3za/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    imgurl = data.secure_url;
    console.log(imgurl);
    ImageUrl()
  };
  const ImageUrl = ()=> {
    formik.setFieldValue('imglink', imgurl)

  }


  // const someFunctionWithLogic = () => {
  //   // Set the value of the number field here:
  //   setFieldValue('imglink', imgurl)
//}
  //console.log(formik.errors);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contact: "",
      price: "",
      description: "",
      imglink: "",
    },

    //validate: property__validate,

    onSubmit,
  });
  async function onSubmit(values) {
    //formik.values.append(imglink, "imgur.com");
    console.log(imgurl);
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
          <div>
            <input
              type="text"
              placeholder="description"
              {...formik.getFieldProps("description")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Img-url"
              name="imglink"
              //value={formikProps.values.imglink} // or whatever the value is
              
              {...formik.getFieldProps("imglink")}
            />
          </div>
          <input
            type="file"
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
            }}
          />
          <div>{imgurl}</div>
          <button type="button" onClick={uploadImage}>
            Upload
          </button>
          <button type="submit"> Register</button>
        </div>
      </form>
    </div>
  );
}

export default registra;
