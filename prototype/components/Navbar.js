import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div className="layout-navbar">
      <Image class="img" src={logo} height={40} width={40} alt="Your Company" />
      <nav>
        <ul class="navlinks">
          <li>
            <Link className="link" href="/">Home</Link>
          </li>
          <li>
            <Link className="link" href="/about">Bout Us</Link>
          </li>
          <li>
            <Link className="link" href="/products">Products</Link>
          </li>
          <li>
            <Link className="link" href="/login">Login</Link>
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
