import React from "react";
import Html from '../assets/Html.png'
import Css from '../assets/Css.png'
import Javascript from '../assets/Javascript.png'
import Reacticon from '../assets/React.png'
import Redux from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind.png'
import Framer from '../assets/Framer.png'
import Github from '../assets/Github.png'
import {motion} from 'framer-motion'


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
      <h2 className="text-8xl font-bold font-montserrat mt-30 w-full text-center">
        My <span className="text-orange-400">Skills</span>
      </h2>
      <h2 className="text-3xl font-bold font-montserrat mt-10">
        Frontend Technologies && Tools
      </h2>
      <div className="grid grid-cols-4 gap-6 m-10">
        {Skills.map(({ img, title}, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center p-1 gap-2 border-2 border-black rounded-2xl"
            whileHover={{backgroundColor:"orange"}}
          >
            <div className="text-xl font-montserrat font-semibold">
              {title}
            </div>
            <img src={img} alt="Image is Loading" className="w-15 h-15" />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Skills;
