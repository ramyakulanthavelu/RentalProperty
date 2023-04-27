import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/properties");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch("http://localhost:3000/api/properties/" + id);
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

const Details = ({posts}) => {
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="Details"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="/img1.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
               {posts.name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                17th C Cross
              </h1>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex my-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
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
