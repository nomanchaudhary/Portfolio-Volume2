import React, { useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const publicKey = "JUQs6I3qUW8wK0hth";
  const serviceID = "service_o06kadr";
  const templateID = "template_tlqbu1n";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        alert("Message Sent Successfully");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 md:px-10 lg:px-20 dark:bg-black dark:text-white">
      <AnimatedText
        className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat text-center"
        text="Get In Touch"
      />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-12 space-y-8 max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
          <label
            htmlFor="name"
            className="text-lg md:text-xl font-medium font-montserrat w-full md:w-1/3"
          >
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Enter your name"
            className="w-full md:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
          <label
            htmlFor="email"
            className="text-lg md:text-xl font-medium font-montserrat w-full md:w-1/3"
          >
            Your Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
          <label
            htmlFor="message"
            className="text-lg md:text-xl font-medium font-montserrat w-full md:w-1/3"
          >
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Write your message here..."
            className="w-full md:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          ></textarea>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-black text-white font-montserrat font-semibold px-6 py-3 rounded-xl transition duration-300 hover:scale-105 dark:bg-white dark:text-black"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
