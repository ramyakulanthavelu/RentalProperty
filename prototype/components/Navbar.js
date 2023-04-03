import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className="layout-navbar">
      <Image class ="img" src={logo} height={40} width={40} />
      <nav>
        <ul class="navlinks">
          <li>
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>Bout Us
          </li>
          <li>
            <a href="#"></a>Procuts
          </li>
        </ul>
      </nav>
      <a href="#">
        <button class="signup">Sign Up</button>
      </a>
    </div>
  );
}

export default Navbar;
