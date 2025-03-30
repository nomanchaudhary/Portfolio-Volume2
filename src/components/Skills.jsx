import { motion } from "framer-motion";
import React from "react";

function Skills() {
  const Skills = [
    { title: "HTML", level: "85%" },
    { title: "CSS", level: "75%" },
    { title: "JavaScript", level: "75%" },
    { title: "React JS", level: "70%" },
    { title: "Tailwind CSS", level: "80%" },
  ];
  return (
    <>
      <h2 className="text-8xl font-bold font-montserrat mt-30 w-full text-center">
        My <span className="text-orange-400">Skills</span>
      </h2>
      <h2 className="text-3xl font-bold font-montserrat mt-10">
        Frontend Technologies && Tools
      </h2>
      <div className=" w-full flex flex-wrap  gap-y-5 px-32 mt-10">
        {Skills.map((skill, index) => (
          <div className="w-full flex justify-center items-center  ">
            <div
            key={index}
            className="w-full"
          >
            <span className="font-bold text-black">{skill.title}</span>
          </div>
          <div className="w-full">
          <motion.div className="bg-orange-400 h-6 flex justify-center items-center rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: skill.level }}
                transition={{ duration: 1, ease: "easeInOut" }}>
                  <span className="font-bold font-montserrat text-center text-black">{skill.level}</span>
                
                </motion.div>
          </div>
          </div>
          
        ))}
      </div>
    </>
  );
}

export default Skills;
