import React from "react";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
import project1 from "../assets/Portfolio Volume1.png";
import project2 from "../assets/Random Password Generator.png";
import project3 from "../assets/Todo APP.png";
import gitimage from "../assets/Github.png";

const FeaturedProject = ({ type, img, title, summary, link, github }) => {
  return (
    <article className="w-full flex flex-col md:flex-row justify-between items-center rounded-3xl rounded-br-2xl border border-solid bg-white shadow-2xl p-4 md:p-6 relative mt-10 md:mt-20">
      <div className="absolute w-[101%] h-[102%] top-0 -right-3 -z-10 rounded-[2.5rem] rounded-br-3xl bg-black"></div>
      <Link
        to={link}
        target="_blank"
        className="w-full md:w-1/2 cursor-pointer rounded-lg mb-4 md:mb-0"
      >
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
            <img
              src={gitimage}
              alt="Github"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </Link>
          <Link
            to={link}
            target="_blank"
            className="ml-4 text-sm sm:text-md font-semibold font-montserrat p-2 px-3 bg-black text-white rounded-lg"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project1 = ({ type, img, title, summary, link, github }) => {
  return (
    <article className="w-full flex flex-col justify-between items-center rounded-3xl rounded-br-2xl border border-solid bg-white shadow-2xl p-4 md:p-6 relative mt-10 md:mt-20">
      <div className="absolute w-[101%] h-[102%] top-1 -right-3 -z-10 rounded-[2rem] rounded-br-3xl bg-black"></div>
      <Link
        to={link}
        target="_blank"
        className="w-full cursor-pointer rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto rounded-2xl" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 pl-0 md:pl-6">
        <span className="text-xl sm:text-2xl my-2 w-full text-left font-medium font-montserrat text-orange-500">
          {type}
        </span>
        <Link to={link} target="_blank">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black text-sm sm:text-base">
          {summary}
        </p>
        <div className="w-full flex justify-between items-center mt-4">
          <Link to={github} target="_blank">
            <img
              src={gitimage}
              alt="Github"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </Link>
          <Link
            to={link}
            target="_blank"
            className="ml-4 text-sm sm:text-md font-semibold font-montserrat p-2 px-3 bg-black text-white rounded-lg"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

function Projects() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="px-4 sm:px-10 md:px-20 lg:px-32 mt-10 md:mt-20 text-center">
        <AnimatedText
          text="My Projects"
          className="font-bold self-center text-4xl sm:text-6xl md:text-8xl"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-6 md:gap-16 px-4 sm:px-10 md:px-20 lg:px-32 mb-10 md:mb-20">
        <div className="col-span-12">
          <FeaturedProject
            title="Portfolio Volume 1"
            img={project1}
            summary="This portfolio showcases my journey as a web developer, highlighting projects that demonstrate my skills in front-end development, including React and JavaScript. It features my weather app and other projects, providing a glimpse into my growing expertise. The design reflects my passion for technology and my aspirations in full-stack development using the MERN stack."
            link="https://nomanchaudhary.vercel.app/"
            github="https://github.com/nomanchaudhary/Portfolio-Volume1"
            type="Personal Portfolio Website"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Project1
            title="Random Password Generator"
            img={project2}
            link="https://random-password-generator-self-gamma.vercel.app/"
            github="https://github.com/nomanchaudhary/Random-Password-Generator"
            type="Website"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Project1
            title="Todo App"
            img={project3}
            link="https://todo-web-application-five.vercel.app/"
            github="https://github.com/nomanchaudhary/Todo-Web-Application"
            type="Web Application"
          />
        </div>
      </div>
    </main>
  );
}

export default Projects;
