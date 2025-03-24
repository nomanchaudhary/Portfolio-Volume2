import React from "react";
import profilePic from "../assets/Profile.png";
import AnimatedText from "../components/AnimatedText";

function Home() {
  return (
    <main className="w-full flex items-center min-h-screen px-32">
        <div className="w-full flex items-center justify-between gap-x-10">
        <div className="w-1/2 py-10">
        <img src={profilePic} alt="Noman Chaudhary" className="w-full h-auto" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center self-center font-montserrat">
        <AnimatedText text="Turning vision into reality with code and design." className="font-bold text-left"/>
        <p>
        As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
        </p>
      </div>
        </div>
      
    </main>
  );
}

export default Home;
