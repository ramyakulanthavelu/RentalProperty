import React from "react";
import "../styles/products.css";
import "../styles/Slider.css";
import "../styles/layout.css";
import "../styles/navbar.css";
import "../styles/section.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavBarv2 from "@/components/NavBarv2";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      {/* <Navbar /> */}
      <NavBarv2/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
