import React from "react";
import { motion } from "framer-motion";

function HireMe() {
  const MotionAnchor = motion.a;

  return (
    <div
      className="
      absolute md:fixed lg:fixed
        top-0 right-2
        md:top-auto md:bottom-5 md:left-5 md:right-auto
        flex items-center justify-center z-50
      "
    >
      <div
        className="
          relative 
          w-24 h-24 
          md:w-48 md:h-48 
          flex justify-center items-center text-center
        "
      >
        <motion.svg
          className="absolute w-30 h-30 sm:w-30 sm:h-30 md:w-full md:h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="24"
            stroke="#ff8904"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset="251.2"
            animate={{ strokeDashoffset: [251.2, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        <MotionAnchor
          href="https://www.linkedin.com/in/nomanchaudhary00/"
          target="_blank"
          className="
            flex items-center justify-center 
            absolute
            text-base md:text-lg 
            bg-black text-white 
            rounded-full 
            w-12 h-12 md:w-20 md:h-20 
            border-2 border-black 
            font-montserrat 
            cursor-pointer
            dark:bg-white dark:text-black dark:border-white
          "
          whileHover={{ backgroundColor: "#FFFFFF", color: "#000" }}
        >
          Hire Me
        </MotionAnchor>
      </div>
    </div>
  );
}

export default HireMe;
