import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import CircleIcon from "./CircleIcon";

const Details = ({ type,time ,institute,coursework }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-10 w-7/12 mx-auto flex flex-col justify-between items-center"
    >
      <CircleIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="capitalize text-2xl font-bold font-montserrat">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium font-montserrat text-black/75">
          {time} || {institute}
        </span>
        <p className="font-medium w-full">{coursework}</p>
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
      <h2 className="text-8xl font-bold w-full text-center font-montserrat">
        Education
      </h2>
      <div ref={ref} className="w-9/12 my-15 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] bg-black h-full"
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
