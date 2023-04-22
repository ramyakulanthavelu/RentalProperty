import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Slider from "@/components/Slider";





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
      <Slider />
      <h1 className="text-center text-danger my-5">Book Your Property Now</h1>
      <div className="container">
        <div className="row justify-center">
          {posts.map((post) => (
            <div className="col-md-3 h-100 m-3">
              <div className="card">
                <img src="/img1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{post.name}</h5>
                  <p className="card-text">{post.address}</p>
                  <a href="#" className="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default products;
