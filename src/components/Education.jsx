import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import CircleIcon from "./CircleIcon";

const Details = ({ type, time, institute, coursework }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 w-[85%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <CircleIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="capitalize text-xl sm:text-2xl md:text-3xl font-bold font-montserrat text-black dark:text-white text-left">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium font-montserrat text-black/75 dark:text-white/75 block text-start sm:text-left">
          {time} || {institute}
        </span>
        <p className="font-medium w-full text-black dark:text-white text-lg mt-2 text-left">
          {coursework}
        </p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-10">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-full text-center font-montserrat text-black dark:text-white">
        Education
      </h2>
      <div ref={ref} className="w-11/12 sm:w-10/12 md:w-8/12 my-15 mx-auto relative -z-50 dark:z-0">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-6 sm:left-6 md:left-7 lg:left-9 top-0 w-[3px] sm:w-[4px] bg-black dark:bg-orange-500 h-full"
        ></motion.div>
        <ul className="w-full flex flex-col justify-between items-start ml-5">
          <Details
            type="Bachelors In Software Engineering"
            institute="The Islamia University of Bahawalpur"
            time="27 August 2020 – 20 June 2024"
            coursework="I completed my degree in Software Engineering with a strong focus on programming, web development, databases, and software project management. Over the years, I worked on various academic projects that strengthened my problem-solving skills and gave me hands-on experience with both frontend and backend technologies. The program also helped me develop a solid foundation in teamwork, version control, and Agile methodologies."
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
