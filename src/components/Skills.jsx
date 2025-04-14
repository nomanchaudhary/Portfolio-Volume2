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
      <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-8xl font-bold font-montserrat mt-15 sm:mt-20 md:mt-30 lg:mt-30 w-full text-center text-black dark:text-white">
        My <span className="text-orange-400">Skills</span>
      </h2>
      <h2 className="text-2xl text-center sm:text-3xl md:text-3xl lg:text-3xl font-bold font-montserrat mt-10 text-black dark:text-white">
        Frontend Technologies & Tools
      </h2>
      <div className="grid grid-cols-2 gap-y-3 gap-x-3 mt-10 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 sm:grid-cols-2 gap-2 md:gap-6">
        {Skills.map(({ img, title }, index) => (
          <div
            key={index}
            className="flex justify-center items-center text-center p-2 gap-2 border-2 border-black dark:border-white rounded-2xl "
          >
            <div className="text-lg sm:text-xl font-montserrat font-semibold text-black dark:text-white">
              {title}
            </div>
            <img src={img} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
