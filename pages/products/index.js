import React from "react";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/properties");
  //console.log({message : res});
  const posts = await res.json();
  //console.log(posts);

  if (!posts) {
    return {
      notFound: true,
    };
  }
  //console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

const products = ({ posts }) => {
  return (
    <>
      <div className="flex py-11 px-11 items-center justify-center bg-white-800">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post._id}>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow duration-500 hover:shadow-xl  hover:shadow-black/30">
                <div className="h-80 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                    src={post.imglink}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-2xl font-bold text-white">
                   {post.name}
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {post.address}
                  </p>
                  
                  <Link href={"/products/" + post.name}><button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className="flex text-center justify-center">
          <p className="font-com text-xl font-semibold text-blue-700">
            All Images are from{" "}
            <a href="https://unsplash.com" className="text-blue-500">
              Unsplash.com
            </a>
          </p>
        </div>
    </>
  );
};

export default products;
