import React from "react";
import SideNavBar from "../../components/sidenavbar";
import Footer from "@/components/Footer";
import { useSession, signOut, SessionProvider } from "next-auth/react";

export const getStaticProps = async () => {
  const url = "http://localhost:3000/api/auth/users?id=";
  const res = await fetch(url);
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

function index({ user }) {
  const { data: session } = useSession();
  function handlesignout() {
    signOut();
  }

  return (
    <SideNavBar>
      <div className="flex justify-center min-h-screen">
        {session ? login({ session, handlesignout, user }) : guest()}
      </div>
    </SideNavBar>
  );
}
function guest() {
  return <div className="text-xl text-black">Failed to Login</div>;
}

function login({ session, handlesignout, user }) {
  return (
    <div className="text-xl text-black">
      Logged in Ratface
      <div>
        <p className="text-purple-400">{user.username}</p>
        <p>{session.user.email}</p>
      </div>
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
export default index;

{
  index.getLayout = function PageLayout(page) {
    return (
      <>
        <SessionProvider>
          {page}
          <Footer />
        </SessionProvider>
      </>
    );
  };
}
