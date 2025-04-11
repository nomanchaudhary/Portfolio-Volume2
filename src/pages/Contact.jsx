import React from "react";
import AnimatedText from "../components/AnimatedText";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

function Contact() {
    const form = useRef();
    const publicKey = "JUQs6I3qUW8wK0hth"
    const serviceID = "service_o06kadr"
    const templateID = "template_tlqbu1n"
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current,publicKey,)
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Send Successfully")
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="mt-10 sm:mt-16 md:mt-20 px-4 sm:px-10 md:px-20">
      <AnimatedText
        className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat text-center"
        text="Get In Touch"
      />

      <form ref={form} onSubmit={sendEmail} action="" className="mt-10 mb-20 space-y-6 max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="name"
            className="text-lg sm:text-xl font-medium font-montserrat w-full sm:w-1/3"
          >
            Your Name
          </label>
          <input
            type="text"
             name="user_name"
            id="name"
            placeholder="Enter your name"
            className="w-full sm:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="email"
            className="text-lg sm:text-xl font-medium font-montserrat w-full sm:w-1/3"
          >
            Your Email
          </label>
          <input
            type="email"
             name="user_email"
            id="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-start gap-2 sm:gap-4">
          <label
            htmlFor="message"
            className="text-lg sm:text-xl font-medium font-montserrat w-full sm:w-1/3"
          >
            Your Message
          </label>
          <textarea
           name="message"
            id="message"
            rows="5"
            placeholder="Write your message here..."
            className="w-full sm:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          ></textarea>
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-black text-white font-montserrat font-semibold px-6 py-3 rounded-2xl cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
