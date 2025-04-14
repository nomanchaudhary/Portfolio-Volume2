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
    <section id="home">
      <main className="w-full flex items-center min-h-screen px-6 sm:px-10 md:px-16 md:py-10 lg:py-10 lg:px-32 dark:bg-black dark:text-white">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Profile Picture */}
          <div className="w-full sm:w-10/12 md:w-full lg-w-full flex justify-center items-center md:justify-center lg:justify-center py-15">
            <motion.img
              src={profilePic}
              alt="Profile picture of Noman Chaudhary"
              className="w-4/5 sm:w-3/4 md:w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
          </div>

          {/* Text Section */}
          <div className="w-full flex flex-col items-center md:items-start lg:items-start md:py-10 lg:py-10 justify-center font-montserrat">
            <AnimatedText
              text="Turning vision into reality with code and design."
              className="font-bold text-4xl font-montserrat text-center md:text-left sm:text-4xl md:text-6xl lg:text-6xl"
            />
            <p className="py-4 text-xl text-center md:text-left font-medium">
              As a passionate full-stack developer, I'm dedicated to
              transforming ideas into modern, responsive, and innovative web
              applications. With a strong focus on React.js, JavaScript, and the
              MERN stack, I continuously strive to create seamless user
              experiences and clean, efficient code. Explore my latest projects
              and writings to see how I bring design, functionality, and
              creativity together in every line of code.
            </p>

            {/* Buttons */}
            <div className="flex sm:flex-row md:flex-row lg:flex-row items-center md:items-start lg:items-start gap-3 mt-4 mb-5">
              <motion.button
                onClick={handleDownload}
                className="flex items-center justify-center text-md font-semibold py-3 px-4 bg-black text-white rounded-lg border-2 border-black dark:bg-white dark:text-black w-42 md:w-48 lg:w-48 cursor-pointer"
                whileHover={{ backgroundColor: "#FFFFFF", color: "#000" }}
              >
                Download CV
                <FaArrowUpRightFromSquare className="ml-2" />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="flex items-center justify-center text-md font-semibold py-3 px-4 bg-black text-white rounded-lg border-2 border-black dark:bg-white dark:text-black w-42 md:w-48 lg:w-48 cursor-pointer"
                whileHover={{ backgroundColor: "#FFFFFF", color: "#000" }}
              >
                Contact Me
              </motion.button>
            </div>
          </div>
        </div>
        <HireMe />
      </main>
    </section>
  );
}

export default Home;
