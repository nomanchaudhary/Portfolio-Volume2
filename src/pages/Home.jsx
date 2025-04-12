import React, { Fragment } from "react";
import profilePic from "../assets/Profile.png";
import AnimatedText from "../components/AnimatedText";
import resume from "/Resume.pdf";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import HireMe from "../components/HireMe";

function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      <main className="w-full flex items-center min-h-screen px-32 dark:bg-black dark:text-white">
        <div className="w-full flex items-center justify-between gap-x-10">
          <div className="w-1/2 py-10">
            <motion.img
              src={profilePic}
              alt="Profile picture of Noman Chaudhary"
              className="w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <div className="w-1/2 flex flex-col sm:mx-auto items-center justify-center self-center font-montserrat">
            <AnimatedText
              text="Turning vision into reality with code and design."
              className="font-bold text-left"
            />
            <p className="py-4 text-base cursor-pointer font-medium font-montserrat">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center mt-4 self-start">
              <motion.button
                onClick={handleDownload}
                className="flex items-center text-md font-semibold p-2.5 px-3 bg-black text-white rounded-lg border-2 border-black border-solid cursor-pointer font-montserrat dark:bg-white dark:text-black"
                whileHover={{ backgroundColor: "#FFFFFF", color: "#000" }}
              >
                Download CV
                <FaArrowUpRightFromSquare className={"w-6 ml-1"} />
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="flex items-center text-md font-semibold font-montserrat p-2.5 px-3 bg-black text-white rounded-lg border-2 border-black border-solid cursor-pointer ml-2 dark:bg-white dark:text-black"
                whileHover={{ backgroundColor: "#FFFFFF", color: "#000" }}
              >
                Contact Me
              </motion.button>
            </div>
          </div>
        </div>
        <HireMe />
      </main>
    </Fragment>
  );
}

export default Home;
