import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/properties");
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { id: post.name.toString() },
    };
  });

  //console.log(paths)

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "http://localhost:3000/api/properties/query?id=" + id
  );
  const data = await res.json();
  const string = JSON.stringify(data);

  return {
    props: { data },
  };
};

const Details = ({ data }) => {
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="Details"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={data.imglink}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {data.address}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data.name}
              </h1>
              <p className="leading-relaxed">
                {data.description}
              </p>
              <div className="flex my-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {"₹ " + data.price}
                </span>
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
