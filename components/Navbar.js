import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div className="layout-navbar">
      <Image
        className="img"
        src={logo}
        height={40}
        width={40}
        alt="Your Company"
      />
      <nav>
        <ul className="navlinks">
          <li>
            <Link className="link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" href="/about">
              Bout Us
            </Link>
          </li>
          <li>
            <Link className="link" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="link" href="/logincss">
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/register">
        <button className="signup">Sign Up</button>
      </Link>
    </div>
  );
}

export default Navbar;
