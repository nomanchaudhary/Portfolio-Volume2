import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

function Header() {
  return (
    <header className="w-full flex justify-between items-center px-32 mt-8">
      <nav className="flex gap-x-8 text-black font-medium font-montserrat">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="absolute left-[55%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <nav>
        <div className="flex gap-x-8 font-2xl">
          <FaGithub size={25} />
          <FaLinkedin size={25} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
