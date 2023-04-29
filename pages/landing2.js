import React from "react";
import { useState } from "react";
import { useSession,signOut } from "next-auth/react";

export default function landing() {
  const { data: session } = useSession();
  function handlesignout(){
    signOut();
  }

  return (
    <div className="flex justify-center min-h-screen">
      {session ? login({ session,handlesignout }) : guest()}
    </div>
  );
}

function guest() {
  return <div className="text-xl text-black">Failed to Login</div>;
}

function login({ session, handlesignout }) {
  return (
    <div className="text-xl text-black">
      Logged in Ratface
      <div>
        <p>{session.user.name}</p>
      </div>
      <div className="flex justify-center">
        <button onClick={handlesignout} className=" py-5 px-10 bg-blue-200 rounded-md">Signout</button>
      </div>
    </div>
  );
}
