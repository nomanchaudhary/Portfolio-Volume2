import React from "react";
import Html from '../assets/Html.png';
import Css from '../assets/Css.png';
import Javascript from '../assets/Javascript.png';
import Reacticon from '../assets/React.png';
import Redux from '../assets/Redux.png';
import Tailwind from '../assets/Tailwind.png';
import Framer from '../assets/Framer.png';
import Github from '../assets/Github.jpg'

function Skills() {
  const Skills = [
    { img: Html, title: "HTML" },
    { img: Css, title: "CSS" },
    { img: Javascript, title: "JavaScript" },
    { img: Reacticon, title: "React JS" },
    { img: Tailwind, title: "Tailwind CSS" },
    { img: Redux, title: "Redux Toolkit" },
    { img: Framer, title: "Framer Motion" },
    { img: Github, title: "GitHub" },
  ];
  return (
    <>
      <h2 className="text-6xl sm:text-8xl font-bold font-montserrat mt-30 w-full text-center text-black dark:text-white">
        My <span className="text-orange-400">Skills</span>
      </h2>
      <h2 className="text-2xl sm:text-3xl font-bold font-montserrat mt-10 text-black dark:text-white">
        Frontend Technologies && Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 m-10">
        {Skills.map(({ img, title }, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-2 gap-2 border-2 border-black dark:border-white rounded-2xl"
          >
            <div className="text-lg sm:text-xl font-montserrat font-semibold text-black dark:text-white">
              {title}
            </div>
            <img src={img} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
