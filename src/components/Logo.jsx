import React from "react";
import { motion } from "framer-motion";

function Logo() {
  const MotionAnchor = motion.a;

  return (
    <div className="flex justify-center items-center">
      <MotionAnchor
        href="https://www.linkedin.com/in/nomanchaudhary00/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-black dark:bg-white text-center flex items-center justify-center rounded-full text-xl sm:text-2xl font-bold text-white dark:text-black font-montserrat cursor-pointer"
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
      </MotionAnchor>
    </div>
  );
}

export default Logo;
