export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  ///console.log(res);

  return {
    props: { data },
  };
};

const Property = ({ data }) => {
  return (
    <div>
      {data.map((proper) => (
        <li>{proper.name}</li>
      ))}
    </div>
  );
};
export default Property;
