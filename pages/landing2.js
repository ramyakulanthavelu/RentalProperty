import React from "react";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/auth/users?id=karthikeyan.vpani@gmail.com");
  //console.log({message : res});
  const user = await res.json();
  //console.log(posts);

  if (!user) {
    return {
      notFound: true,
    };
  }
  //console.log(posts);

  return {
    props: {
      user,
    },
  };
};

export default function landing({ user }) {
  const { data: session } = useSession();
  function handlesignout() {
    signOut();
  }

  return (
    <div className="flex justify-center min-h-screen">
      {session ? login({ session, handlesignout, user }) : guest()}
    </div>
  );
}

function guest() {
  return <div className="text-xl text-black">Failed to Login</div>;
}

function login({ session, handlesignout, user }) {
 

  return (
    
    <div className="text-xl text-black">
      Logged in Ratface
      <div><p>{user.username}</p></div>
      <div className="flex justify-center">
        <button
          onClick={handlesignout}
          className=" py-5 px-10 bg-blue-200 rounded-md"
        >
          Signout
        </button>
      </div>
    </div>
  );
}
