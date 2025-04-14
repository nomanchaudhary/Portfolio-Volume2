import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import Logo from "./Logo";
import DarkModeToggler from "./DarkModeToggler";
import { IoMdClose } from "react-icons/io";

const socialLinks = [
  { icon: FaGithub, link: "https://github.com/nomanchaudhary" },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/nomanchaudhary00/",
  },
  { icon: FaInstagram, link: "https://instagram.com/nomanchaudhary00" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-6 sm:px-10 md:px-10 lg:px-32 py-6 flex items-center justify-between dark:bg-black dark:text-white relative">
      <div className="md:hidden">
    { isOpen ? <IoMdClose size={28} onClick={toggleMenu}/> : <IoMdMenu size={28} onClick={toggleMenu} className="cursor-pointer" />}
      </div>
      <div className="absolute left-[50%] top-5">
        <Logo />
      </div>
      <div className="hidden md:flex w-full justify-between items-center">
        <nav className="flex gap-x-8 font-medium font-montserrat">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex gap-x-6 items-center">
          {socialLinks.map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              target="_blank"
              href={link}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={25} />
            </motion.a>
          ))}
          <DarkModeToggler />
        </div>
      </div>
      {isOpen && (
        <div className="min-w-[80vw] sm:min-w-[90vw] -mt-16 flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 py-20 bg-black text-white  dark:bg-white/75 dark:text-black rounded-lg z-50 backdrop-blur-md">
          <nav className="flex flex-col items-center gap-4 font-medium font-montserrat">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </nav>

          <div className="flex gap-x-6 items-center mt-4 ">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <motion.a
                key={index}
                target="_blank"
                href={link}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
            <DarkModeToggler />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
