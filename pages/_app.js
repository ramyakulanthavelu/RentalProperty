import React from "react";
import "../styles/layout.css";
import "../styles/navbar.css";
import "../styles/slide.css";
import Footer from "@/components/Footer";
import Slide from "@/components/Slide"
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Navbar />
      
      <Component {...pageProps} />
      <Footer />
      </>
  );
}
