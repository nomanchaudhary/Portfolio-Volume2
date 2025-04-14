import React from "react";
import AnimatedText from "../components/AnimatedText";
import project1 from "../assets/Portfolio Volume1.png";
import project2 from "../assets/Random Password Generator.png";
import project3 from "../assets/Todo APP.png";
import { FaGithub } from "react-icons/fa";

const FeaturedProject = ({ type, img, title, summary, link, github }) => {
  return (
    <article className="w-full flex flex-col lg:flex-row justify-between items-center rounded-3xl border border-solid bg-white p-4 sm:p-6 mt-10 sm:mt-16 dark:bg-black dark:text-white shadow-[10px_10px_0px_0px_rgba(0,_0,_0,_1)] dark:shadow-[10px_10px_0px_0px_rgba(255,_255,_255,_1)]">
      <a
        href={link}
        target="_blank"
        className="w-full lg:w-1/2 cursor-pointer rounded-lg mb-4 lg:mb-0"
      >
        <img src={img} alt={title} className="w-full h-auto rounded-xl" />
      </a>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-6  dark:bg-black dark:text-white">
        <span className="text-lg sm:text-xl md:text-2xl my-2 w-full text-left font-medium font-montserrat text-orange-500 ">
          {type}
        </span>
        <a href={link} target="_blank">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat hover:underline underline-offset-2">
            {title}
          </h2>
        </a>
        <p className="my-2 font-medium text-black text-sm sm:text-base dark:text-white">
          {summary}
        </p>
        <div className="w-full flex justify-between items-center mt-4 sm:w-full sm:flex sm:items-center sm:mt-4 md:w-full md:flex md:items-center md:justify-normal md:mt-4 lg:w-full lg:flex lg:items-center lg:justify-normal lg:mt-4">
          <a href={github} target="_blank">
            <FaGithub size={50}/>
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 text-xs sm:text-sm md:text-md font-semibold font-montserrat p-2 px-3 bg-black text-white rounded-lg dark:bg-white dark:text-black"
          >
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

const Project1 = ({ type, img, title, summary, link, github }) => {
  return (
    <article className="w-full flex flex-col justify-between items-center rounded-3xl border border-solid bg-white p-4 sm:p-6 mt-10 sm:mt-16 dark:bg-black dark:text-white shadow-[10px_10px_0px_0px_rgba(0,_0,_0,_1)] dark:shadow-[10px_10px_0px_0px_rgba(255,_255,_255,_1)]">
      
      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto rounded-2xl" />
      </a>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-lg sm:text-xl md:text-2xl my-2 w-full text-left font-medium font-montserrat text-orange-500">
          {type}
        </span>
        <a href={link} target="_blank">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat">
            {title}
          </h2>
        </a>
        <p className="my-2 font-medium text-black text-sm sm:text-base">
          {summary}
        </p>
        <div className="w-full flex justify-between items-center mt-4">
        <a href={github} target="_blank">
            <FaGithub size={50}/>
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 text-xs sm:text-sm md:text-md font-semibold font-montserrat p-2 px-3 bg-black text-white rounded-lg dark:bg-white dark:text-black"
          >
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

function Projects() {
  return (
   <section id="projects">
     <main className="w-full flex flex-col justify-center items-center dark:bg-black dark:text-white">
      <div className="px-4 sm:px-10 md:px-20 lg:px-32 mt-10 sm:mt-16 text-center">
        <AnimatedText
          text="What I’ve Built So Far."
          className="font-bold self-center text-3xl sm:text-5xl md:text-6xl"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-6 md:gap-12 px-6 sm:px-10 md:px-20 lg:px-32 mb-10 sm:mb-16">
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
   </section>
  );
}

export default Projects;