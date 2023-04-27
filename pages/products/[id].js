import React from 'react'



export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/properties");
    const data = await res.json();
    const paths = data.map((post) => {
      return {
        params: { id: post.name.toString() },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/api/properties/' + id);
    const data = await res.json();

    return {
        props:{data : data}
    }

}





const Details = ({data}) => {
  return (
    <div>Details
        <h1>{data.name}</h1>
    </div>
    
  )
}

export default Details