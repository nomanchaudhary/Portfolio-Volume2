import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HireMe() {
  const Motionlink = motion(Link);
  return (
    <div className="fixed left-4 bottom-1 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-48 flex justify-center items-center relative">
        <Motionlink
          to="https://www.linkedin.com/in/nomanchaudhary00/"
          target="_blank"
          className=" flex items-center justify-center absolute text-lg bg-black text-white rounded-full w-20 h-20 border-2 border-black cursor-pointer "
          whileHover={{ backgroundColor: "#FFFFFF", color: "#000" }}
        >
          Hire Me
        </Motionlink>
      </div>
    </div>
  );
}

export default HireMe;
