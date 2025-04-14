import React, { useRef, useEffect } from "react";
import AnimatedText from "../components/AnimatedText";
import profilePic from "../assets/Profile.png";
import {
  motionValue,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { section } from "framer-motion/client";

function About() {
  const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionvalue = useMotionValue(0);
    const springvalue = useSpring(motionvalue, { duration: 3000 });
    const isInview = useInView(ref);

    useEffect(() => {
      if (isInview) {
        motionvalue.set(value);
      }
    }, [value, motionvalue, isInview]);

    useEffect(() => {
      springvalue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springvalue, value]);

    return <span ref={ref}></span>;
  };

  return (
    <section id="about">
      <main className="flex flex-col justify-center items-center w-full dark:bg-black dark:text-white px-10 sm:px-16 md:px-16 lg:px-32">
        <div className="px-10 py-10 md:py-10 lg:py-10">
          <AnimatedText
            text="Crafting web experiences with heart, code, and creativity!"
            className="font-bold self-center text-4xl md:text-6xl lg:text-6xl"
          />
        </div>
        <div className="flex flex-col gap-10 md:grid md:grid-cols-8 md:gap-16 w-full lg:w-full lg:grid lg:grid-cols-8 lg:gap-16">
          <div className="md:col-span-4 order-2 md:order-none lg:order-none lg:col-span-3 md:w-full lg:w-full flex flex-col items-start justify-start">
            <h2 className="mb-4 text-xl font-bold font-montserrat uppercase text-black/75 dark:text-white/75">
              Biography:-
            </h2>
            <p className="text-lg font-medium font-montserrat">
              Hi, I'm Muhammad Noman, a frontend web developer with a strong
              passion for crafting clean, responsive, and engaging digital
              experiences. With a growing skill set in HTML, CSS, JavaScript,
              React, and Tailwind CSS.
            </p>
            <p className="text-lg font-medium my-2 font-montserrat">
              I love turning ideas into interactive and visually appealing
              websites. I believe web development isn’t just about writing
              code—it’s about building intuitive, user-friendly experiences that
              leave a lasting impact. Whether I’m working on a portfolio, a
              landing page, or a full-fledged web application.
            </p>
            <p className="text-lg font-medium my-2 font-montserrat">
              I bring creativity, attention to detail, and user-focused thinking
              to every project. I’m excited to keep learning, growing, and
              contributing to meaningful digital solutions.
            </p>
          </div>

          <div className="md:col-span-4 order-1 md:order-none lg:order-none lg:col-span-3 h-max border-2 border-solid bg-white dark:bg-black rounded-2xl rounded-br-2xl p-8 mt-10 shadow-[10px_10px_0px_0px_rgba(0,_0,_0,_1)] dark:shadow-[10px_10px_0px_0px_rgba(255,_255,_255,_1)]">
            <img
              src={profilePic}
              alt="Noman Chaudhary"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div
            className="col-span-2 order-3 md:order-none lg:order-none sm:col-span-8 md:col-span-8 lg:col-span-2 flex flex-row items-center gap-5 justify-center 
        sm:flex-row sm:items-center sm:justify-center md:flex-row md:justify-center md:items-center lg:flex-col lg:justify-between lg:items-end md:w-full"
          >
            <div className="flex flex-col items-center text-center lg:items-end justify-center md:flex-col md:items-center md:justify-center md:w-full">
              <span className="text-3xl md:text-6xl lg:text-6xl font-bold font-montserrat inline-block">
                <AnimatedNumbers value={40} />+
              </span>
              <h1 className="text-lg font-medium font-montserrat">
                Satisfied Clients
              </h1>
            </div>
            <div className="flex flex-col items-center text-center lg:items-end justify-center md:flex-col md:items-center md:justify-center md:w-full">
              <span className="text-3xl md:text-6xl lg:text-6xl font-bold font-montserrat inline-block">
                <AnimatedNumbers value={50} />+
              </span>
              <h1 className="text-lg font-medium font-montserrat">
                Projects Completed
              </h1>
            </div>
            <div className="flex flex-col items-center text-center lg:items-end justify-center md:flex-col md:items-center md:justify-center md-w-full">
              <span className="text-3xl md:text-6xl lg:text-6xl font-bold font-montserrat inline-block">
                <AnimatedNumbers value={1} />+
              </span>
              <h1 className="text-lg font-medium font-montserrat">
                Years Experience
              </h1>
            </div>
          </div>
        </div>

        <Skills />
        <Experience />
        <Education />
      </main>
    </section>
  );
}

export default About;
