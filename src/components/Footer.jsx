import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid">
      <div className="flex justify-between items-center px-32 py-8">
        <span className="text-lg font-montserrat">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center text-lg font-montserrat">
          Built By&nbsp; <span className="text-2xl">&hearts;</span>&nbsp;
          <Link
            className="underline underline-offset-2 cursor-pointer"
            target="_blank"
            to="https://www.linkedin.com/in/nomanchaudhary00/"
          >
            Muhammad Noman
          </Link>
        </div>
        <Link
          className="underline  underline-offset-2 text-lg cursor-pointer font-montserrat"
          target="_blank"
          to="https://www.linkedin.com/in/nomanchaudhary00/"
        >
          Say Hello 👋
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
