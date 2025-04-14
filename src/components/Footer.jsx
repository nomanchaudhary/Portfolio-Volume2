import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid dark:bg-black dark:border-white">
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 sm:px-16 md:px-16 lg:px-32 md:gap-x-10 md:flex-row py-8">
        <span className="text-base sm:text-lg font-montserrat text-black dark:text-white">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center text-base sm:text-lg font-montserrat text-black dark:text-white mt-4 sm:mt-0">
          Built By&nbsp; <span className="text-xl sm:text-2xl">&hearts;</span>&nbsp;
          <Link
            className="underline underline-offset-2 cursor-pointer text-black dark:text-white"
            target="_blank"
            to="https://www.linkedin.com/in/nomanchaudhary00/"
          >
            Muhammad Noman
          </Link>
        </div>
        <Link
          className="underline underline-offset-2 text-base sm:text-lg cursor-pointer font-montserrat text-black dark:text-white mt-4 sm:mt-0"
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
