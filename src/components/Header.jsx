import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Logo from "./Logo";

const socialLinks = [
  { icon: FaGithub, link: "https://github.com/nomanchaudhary" },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/muhammad-noman-669656242/",
  },
  { icon: FaInstagram, link: "https://instagram.com/nomanchaudhary00" },
];

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
        </div>
      </nav>
    </header>
  );
}

export default Header;
