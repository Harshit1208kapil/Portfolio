import React from "react";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaPython, FaCuttlefish, FaJava, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { FaC } from "react-icons/fa6";

export const Experience = () => {
  // Define your skills here
  const skills = [
    { name: "C", icon: <FaC/> },
    { name: "C++", icon: <FaCuttlefish /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "React.JS", icon: <FaReact /> },
    { name: "Node.JS", icon: <FaNodeJs /> },
    { name: "Express.JS", icon: <FaNodeJs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind", icon: <FaCss3Alt /> },
    { name: "Redux", icon: <FaReact /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "SQLite", icon: <FaDatabase /> },
    // { name: "MongoDB", icon: <FaJsSquare /> },
    // { name: "PostgreSQL", icon: <FaJsSquare /> },
    { name: "GIT", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
    // { name: "Postman", icon: <FaJsSquare /> },
    // { name: "Jest", icon: <FaJsSquare /> },
  ];

  return (
    <section className="text-[var(--color-text)] mt-[50px] lg:mt-[79px] mx-4 sm:mx-[5%] lg:mx-[10%]" id="experience">
      <h2 className="text-3xl sm:text-4xl lg:text-[35px] font-bold tracking-wider uppercase">Skills</h2>
      <div className="flex flex-wrap justify-center mt-6 lg:mt-[14px] gap-6">
        {/* Display skills */}
        {skills.map((skill, id) => (
          <div key={id} className="flex flex-col items-center gap-2 sm:gap-[11px] w-[120px]"> {/* Adjust width as needed */}
            <div className="bg-[var(--color-secondary)] rounded-full flex items-center justify-center w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] text-white text-3xl">
              {skill.icon} {/* Using the icon here */}
            </div>
            <p className="text-lg sm:text-[25px] font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
      {/* <ul className="flex flex-col gap-6 lg:gap-[40px] w-full lg:w-[45%]">
        {history.map((historyItem, id) => (
          <li key={id} className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-[17px] bg-gradient-to-r from-[#19376d] to-transparent rounded-[10px] p-6 lg:p-[24px]">
            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} className="w-[40px] lg:w-[50px]" />
            <div className="font-[var(--font-roboto)] text-left">
              <h3 className="text-xl lg:text-[30px] font-medium">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p className="text-md lg:text-[20px] font-light">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul className="list-disc ml-4 lg:ml-[17px] mt-2 lg:mt-[6px] text-md lg:text-[25px]">
                {historyItem.experiences.map((experience, idx) => (
                  <li key={idx}>{experience}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul> */}
    </section>
  );
};
