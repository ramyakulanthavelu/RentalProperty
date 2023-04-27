export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/properties");
  //console.log({message : res});
  const posts = await res.json();
  console.log(posts);

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

const Property = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div>
        <li>{post.name}</li>
        <img src={post.imglink}></img>
        </div>
      ))}
    </div>
  );
};
export default Property;
