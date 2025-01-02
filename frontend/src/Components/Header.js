import React from "react";
import "./styles.css";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header-section flext  text-white">
      <div className="header-logo flex items-center justify-center">LOGO</div>
      <div className="header-navigation-bar flex	w-2/5">
        <div className="header-nav">Home</div>
        <div className="header-nav">About Us</div>
        <div className="header-nav">Agents</div>
        <div className="header-nav">Blog</div>
      </div>
      <div className="header-search-bar flex items-center justify-center">
        <input type="text" placeholder="Search" />
        <button>
          <IoSearch />
        </button>
      </div>
      <div className="header-register w-1/5 flex items-center justify-center">
        <FaUser className="m-1" />
        <button>Sign In</button> | <button>Sign Up</button>
      </div>
    </div>
  );
}
