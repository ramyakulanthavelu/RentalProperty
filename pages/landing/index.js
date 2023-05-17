import React from "react";
import SideNavBar from "../../components/sidenavbar";
import Footer from "@/components/Footer";
import { useSession, signOut, SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";


// export const getStaticProps = async () => {
//   const url = "http://localhost:3000/api/auth/users?id=";
//   const res = await fetch(url);
//   //console.log({message : res});
//   const user = await res.json();
//   //console.log(posts);

//   if (!user) {
//     return {
//       notFound: true,
//     };
//   }
  //console.log(posts);

//   return {
//     props: {
//       user,
//     },
//   };
// };

function index({ user }) {
  const { data: session } = useSession();
  const router = useRouter()
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
  return <div className="text-xl text-black">Click <Link href="/">Here</Link> to return to home page</div>;
}

function login({ session, handlesignout, user }) {
  return (
    <div className="text-xl text-black">
      
      <div>
        {/* <p className="text-purple-400">{user.username}</p> */}
        <h3 className="text-white text-2xl text-center">Welcome </h3>
        <p className="text-white">{session.user.email}</p>
      </div>
      <div className="flex justify-center">
        
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
