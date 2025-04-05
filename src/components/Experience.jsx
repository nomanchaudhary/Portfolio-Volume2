import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import CircleIcon from "./CircleIcon";

const Details = ({ position, company, companyLink, time, location, work }) => {
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
          {position}&nbsp;{" "}
          <a
            className="text-orange-500 cursor-pointer items-center"
            href={companyLink}
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium font-montserrat text-black/75">
          {time} || {location}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-20">
      <h2 className="text-8xl font-bold w-full text-center font-montserrat">
        Experience
      </h2>
      <div ref={ref} className="w-9/12 my-15 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] bg-black h-full"
        ></motion.div>
        <ul className="w-full flex flex-col justify-between items-start ml-5">
          <Details
            position="Junior Frontend Developer"
            company="CodeLab IT Solutions"
            companyLink="https://codelab.pk/"
            location="Bahawalpur,Pakistan"
            time="Jan 2021 – Aug 2021"
            work="I developed responsive user interface components using HTML, CSS, and JavaScript, ensuring a seamless experience across various devices. I collaborated closely with backend developers to integrate APIs, which significantly enhanced the overall functionality of the website. Additionally, I focused on performance optimization, successfully reducing load times by 20%, leading to a faster and more efficient user experience."
          />
          <Details
            position="ReactJs Trainee"
            company="Techons Solutions"
            companyLink="https://www.linkedin.com/company/techons/"
            location="Lahore,Pakistan"
            time="Nov 2024 – Feb 2025"
            work="As a Trainee ReactJS Developer at Techons solutions I assisted in developing and optimizing React.js components for web applications. I implemented state management using Redux Toolkit and the Context API to ensure efficient data handling across components. Additionally, I contributed to enhancing the UI/UX by creating responsive and interactive web pages using Tailwind CSS, resulting in a more engaging user experience."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
