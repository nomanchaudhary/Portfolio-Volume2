import React, { useRef, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const publicKey = "JUQs6I3qUW8wK0hth";
  const serviceID = "service_o06kadr";
  const templateID = "template_tlqbu1n";

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        setIsSending(false);
        setStatus("success");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        setIsSending(false);
        setStatus("error");
      }
    );
  };

  return (
  <section id="contact">
      <div className="w-full h-auto py-12 px-4 sm:px-6 md:px-10 lg:px-20 dark:bg-black dark:text-white">
      <AnimatedText
        className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold font-montserrat text-center"
        text="Have a Project in Mind? Let’s Talk 😍"
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
            required
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
            required
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
            required
            placeholder="Write your message here..."
            className="w-full md:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          ></textarea>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 gap-3">
          <button
            type="submit"
            disabled={isSending}
            className={`bg-black text-white font-montserrat font-semibold px-6 py-3 rounded-xl transition duration-300 dark:bg-white dark:text-black ${
              isSending ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {/* Feedback message */}
          {status === "success" && (
            <p className="text-green-500 font-medium">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 font-medium">
              ❌ Failed to send message. Please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  </section>
  );
}

export default Contact;
