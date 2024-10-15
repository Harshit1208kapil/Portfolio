import React from "react";
import { getImageUrl } from "../../utils";
import { FaGithub } from "react-icons/fa";

export const About = () => {
  return (
    <section
      className="relative bg-[rgba(12,12,12,0.6)] rounded-[15px] p-8 sm:p-[40px] lg:p-[73px] mt-[50px] lg:mt-[129px] z-[1] mx-4 sm:mx-[5%] lg:mx-[10%]"
      id="about"
    >
      <h2 className="text-[var(--color-text)] text-3xl sm:text-4xl lg:text-[35px] font-bold tracking-wider uppercase">
        About
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className="w-full sm:w-1/2 lg:w-[35%]"
        /> */}
        <ul className="text-[var(--color-text)] flex flex-col gap-8 mt-6">
          {[
            {
              title: "Frontend Developer",
              description:
                "I'm a frontend developer with experience in building responsive and optimized sites using HTML, CSS, JavaScript, and frameworks like React. I ensure pixel-perfect designs, accessibility, and smooth user interactions.",
              icon: "about/cursorIcon.png",
            },
            {
              title: "Backend Developer",
              description:
                "I have experience developing fast and optimized back-end systems and APIs using Node.js, Express, and working with databases like MongoDB and SQL. My focus is on scalability and security.",
              icon: "about/serverIcon.png",
            },
            {
              title: "UI Designer",
              description:
                "I have designed multiple landing pages and web applications, focusing on user-centered design principles. I create clean, intuitive interfaces using tools like Figma and Adobe XD.",
              icon: "about/uiIcon.png",
            },
            {
              title: "Data Structures & Algorithms Enthusiast",
              description:
                "Proficient in data structures and algorithms, with a strong grasp of sorting, searching, dynamic programming, and graph algorithms. I regularly solve problems on platforms like LeetCode, Codeforces, and HackerRank.",
              icon: 
              // <FaGithub/>
              "about/codeIcon.png",
            },
            {
              title: "Version Control & Collaboration",
              description:
                "Experienced with Git and GitHub, managing source control, contributing to team projects, and implementing CI/CD pipelines for smooth deployment workflows.",
              icon: "about/gitIcon.png",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex flex-row items-center rounded-[20px] list-none p-[15px] sm:p-[25px] bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent bg-no-repeat transition-all duration-400 hover:bg-[length:100%_100%]"
            >
              <img src={getImageUrl(item.icon)} alt={`${item.title} icon`} />
              <div className="ml-4 sm:ml-[20px]">
                <h3 className="text-lg sm:text-xl lg:text-[25px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-lg sm:text-xl lg:text-[25px]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
