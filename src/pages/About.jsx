import React, { useRef,useEffect } from "react";
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
    }, [value, motionValue, isInview]);

    useEffect(() => {
      springvalue.on("change",(latest)=>{
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0)
        }
      })
    }, [springvalue,value])
    

    return <span ref={ref}></span>;
  };
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <div className="px-32 py-20">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className=" font-bold self-center text-8xl"
        />
      </div>
      <div className="grid grid-cols-8 gap-16 w-full px-32">
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold font-montserrat uppercase text-black/75">
            Biography:-
          </h2>
          <p className="font-medium font-montserrat">
            Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion
            for creating beautiful, functional, and user-centered digital
            experiences. With 4 years of experience in the field. I am always
            looking for new and innovative ways to bring my clients' visions to
            life.
          </p>
          <p className="font-medium my-2 font-montserrat">
            I believe that design is about more than just making things look
            pretty it's about solving problems and creating intuitive, enjoyable
            experiences for users.
          </p>
          <p className="font-medium my-2 font-montserrat">
            Whether I'm working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>
        <div className="col-span-3 h-max relative border-2 border-solid bg-white rounded-2xl p-8 mt-10">
          <div className="absolute w-[102%] h-[103%] top-0 -right-3 -z-10 rounded-2xl bg-black"></div>
          <img
            src={profilePic}
            alt="Noman Chaudhary"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className=" col-span-2 flex flex-col justify-between items-end ">
          <div className="flex flex-col items-end justify-center">
            <span className="text-6xl font-bold font-montserrat inline-block">
            <AnimatedNumbers value={40}/>+
            </span>
            <h1 className="text-lg font-medium font-montserrat">
              Satisfied Clients
            </h1>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="text-6xl font-bold font-montserrat inline-block">
            <AnimatedNumbers value={50}/>+
            </span>
            <h1 className="text-lg font-medium font-montserrat">
              Projects Completed
            </h1>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="text-6xl font-bold font-montserrat inline-block">
            <AnimatedNumbers value={1}/>+
            </span>
            <h1 className="text-lg font-medium font-montserrat">Years Experience</h1>
          </div>
        </div>
      </div>
      <Skills/>
      <Experience/>
      <Education/>
    </main>
  );
}

export default About;
