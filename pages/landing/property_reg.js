import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import React from "react";
import property__validate from "@/lib/validate";
import Sidenavbar from "@/components/sidenavbar";
import { useState } from "react";
import Image from "next/image";






function Agent() {
  var imgurl = "";
  const [imageSelected, setImageSelected] = useState("")
  const [imagename, setImagename] = useState("");
  const uploadImage = async () => {
    console.log(imageSelected);
    console.log(imagename);
    

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
    ImageUrl();
    
  };
  const ImageUrl = async () => {
    formik.setFieldValue("imglink", imgurl);
    setImagename(imgurl);
  };

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
    <Sidenavbar>
      <div>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-auto">
            <h1 className="mb-8 text-3xl text-center">
              Upload Your Property Here
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="propertyname"
                placeholder="Property Name"
                {...formik.getFieldProps("name")}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="address"
                placeholder="Address"
                {...formik.getFieldProps("address")}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="price"
                placeholder="Price"
                {...formik.getFieldProps("price")}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="description"
                placeholder="Description"
                {...formik.getFieldProps("description")}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="contact"
                placeholder="Contact"
                {...formik.getFieldProps("contact")}
              />
              <div className="flex justify-center mt-8">
                <div className="max-w-lg rounded-lg shadow-xl bg-gray-50">
                  <div className="m-4">
                    <label className="inline-block mb-2 text-gray-500">
                      
                    </label>
                    <p className=" text-center">{imageSelected.name}</p>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          
                          
                          
                          {imagename ? <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Uploaded Image Succesfully
                          </p> : <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file
                          </p>}
                        </div>
                        <input
                          type="file"
                          className="opacity-0 justify-center"
                          onChange={(event) => {
                            setImageSelected(event.target.files[0]);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                  {}
                  <input
                    type="text"
                    placeholder="Img-url"
                    name="imglink"
                    //value={formikProps.values.imglink} // or whatever the value is
                    hidden={true}
                    onChange={(event) => {
                      setImagename(event.target.value);
                    }}

                    {...formik.getFieldProps("imglink")}
                  />
                  <p></p>
                  <div className="flex justify-center p-2">
                    <button
                    type="button"
                      className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl"
                      onClick={uploadImage}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              {}

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-600 focus:outline-none my-1"
              >
                Submit
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By uploading up, you agree to Swipe Right
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
