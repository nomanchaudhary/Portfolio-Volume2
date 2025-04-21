import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
];

function Header() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
    className={`w-full top-0 left-0 px-6 sm:px-10 md:px-10 lg:px-32 py-6 flex items-center transition-transform duration-300 ${
      showNavbar ? "md:translate-y-0 lg:translate-y-0" : "md:-translate-y-full lg:-translate-y-full"
    } bg-white justify-between dark:bg-black dark:text-white md:fixed lg:fixed`}
    
    >
      <div className="md:hidden fixed z-50 mt-5">
        {isOpen ? (
          <IoMdClose size={28} onClick={toggleMenu} />
        ) : (
          <IoMdMenu size={28} onClick={toggleMenu} className="cursor-pointer" />
        )}
      </div>
      <div className="absolute left-[45%] md:left-[50%] lg:left-[50%] top-6 lg:top-4 items-center justify-center">
        <Logo />
      </div>
      <div className="hidden md:flex w-full justify-between items-center">
        <nav className="flex gap-x-8 font-medium font-montserrat">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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
            <a href="/" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
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
