import React from "react";
import { Link } from "react-router-dom";
import gitimage from "../assets/Github.png";

const ProjectCard = ({ type, img, title, summary, link, github }) => {
  return (
    <article className="w-full flex flex-col md:flex-row justify-between items-center rounded-3xl rounded-br-2xl border border-solid bg-white shadow-2xl p-4 md:p-6 relative mt-10 md:mt-20">
      <div className="absolute w-[101%] h-[102%] top-0 -right-3 -z-10 rounded-[2.5rem] rounded-br-3xl bg-black"></div>
      <Link to={link} target="_blank" className="w-full md:w-1/2 cursor-pointer rounded-lg mb-4 md:mb-0">
        <img src={img} alt={title} className="w-full h-auto rounded-xl" />
      </Link>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-between md:pl-6">
        <span className="text-xl sm:text-2xl my-2 w-full text-left font-medium font-montserrat text-orange-500">
          {type}
        </span>
        <Link to={link} target="_blank">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat hover:underline underline-offset-2">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black text-sm sm:text-base">
          {summary}
        </p>
        <div className="w-full flex items-center mt-4">
          <Link to={github} target="_blank">
            <img src={gitimage} alt="Github" className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
          <Link to={link} target="_blank" className="ml-4 text-sm sm:text-md font-semibold font-montserrat p-2 px-3 bg-black text-white rounded-lg">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
