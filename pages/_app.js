import React from "react";
import "../styles/products.css";
import "../styles/layout.css";
import "../styles/navbar.css";
import "../styles/section.css";
import "../styles/about.css";
import { SessionProvider } from "next-auth/react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavBarv2 from "@/components/NavBarv2";


export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <SessionProvider>
        
          {/*<Navbar />*/}
          <NavBarv2 />
          <Component {...pageProps} />
          <Footer />
        
      </SessionProvider>
    </>
  );
}
