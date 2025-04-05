import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HireMe() {
  const MotionLink = motion(Link);

  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center">
      <div className="relative w-48 h-48 flex justify-center items-center">
        <motion.svg
          className="absolute w-full h-full"
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
        <MotionLink
          to="https://www.linkedin.com/in/nomanchaudhary00/"
          target="_blank"
          className="flex items-center font-montserrat justify-center absolute text-lg bg-black text-white rounded-full w-20 h-20 border-2 border-black cursor-pointer"
          whileHover={{ backgroundColor: "#FFFFFF", color: "#000" }}
        >
          Hire Me
        </MotionLink>
      </div>
    </div>
  );
}

export default HireMe;
