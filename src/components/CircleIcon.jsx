import React from "react";
import { motion, useScroll } from "framer-motion";
const CircleIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start start", "end end"]

  });
  return (
    <figure className="absolute left-0 stroke-black dark:stroke-orange-500">
      <svg className="-rotate-90 sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[75px] lg:h-[75px] w-[50px] h-[50px]" width="75" height="75" viewBox="0 0 100 100" >
        <circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-orange-500 stroke-2 fill-none"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="50"
          cy="50"
          r="20"
          className="stroke-[5px] fill-white"
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          className="stroke-black stroke-1 fill-orange-500 animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default CircleIcon;
