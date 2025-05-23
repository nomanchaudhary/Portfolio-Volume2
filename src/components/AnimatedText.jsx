import React from "react";
import { motion } from "framer-motion";

const heading = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function AnimatedText({ text, className = "" }) {
  return (
    <div className="w-full mx-auto py-2 flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat inline-block w-full capitalize text-black dark:text-white ${className}`}
        variants={heading}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
