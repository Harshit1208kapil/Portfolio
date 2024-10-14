import React from "react";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between mt-12 mx-4 lg:mx-20 z-10">
      <div className="flex flex-col items-center lg:items-start text-white z-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Hi, I'm Harshit Kapil</h1>
        <p className="text-lg lg:text-2xl mb-8  lg:text-left text-justify">
          As a dedicated B. Tech student, I am focused on building a solid foundation in software development. I specialize in programming languages such as Python, Java, and C++, equipping me with the versatility to solve complex problems efficiently. My expertise in front-end and back-end frameworks, particularly React, Node.js, and Express.js, enhances my ability to develop dynamic, responsive web applications. Having collaborated in team environments and contributed to full-stack development projects, I am adept at problem-solving, communication, and delivering optimized solutions. I am eager to secure a role as a software developer where I can apply my technical knowledge, collaborate with cross-functional teams, and drive impactful results.
        </p>
        <a href="mailto:myemail@email.com" className="bg-blue-500 text-white rounded-full text-lg lg:text-2xl px-8 py-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          Contact Me
        </a>
      </div>
      <div className="absolute top-[-100px] left-[-150px] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] bg-blue-700 opacity-50 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-[-100px] right-[-150px] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] bg-blue-700 opacity-50 blur-3xl rounded-full z-0"></div>
    </section>
  );
};
