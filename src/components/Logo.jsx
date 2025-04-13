import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Logo() {
  const MotionLink = motion(Link);
  return (
    <div className="flex justify-center items-center ">
      <MotionLink
        to="/"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-black dark:bg-white text-center flex items-center justify-center rounded-full text-xl sm:text-2xl font-bold text-white dark:text-black font-montserrat"
        whileHover={{
          background: [
            "rgb(255, 0, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 0, 255)",
            "rgb(255, 255, 0)",
            "rgb(255, 0, 255)",
            "rgb(0, 255, 255)",
            "rgb(255, 165, 0)",
            "rgb(75, 0, 130)",
            "rgb(128, 0, 128)",
          ],
          transition: { duration: 3, repeat: Infinity },
        }}
      >
        MN
      </MotionLink>
    </div>
  );
}

export default Logo;
