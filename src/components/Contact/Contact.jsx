// import React from "react";
// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer
//       id="contact"
//       className="text-[var(--color-text)] mt-[50px] lg:mt-[120px] bg-[var(--color-secondary)] flex flex-col sm:flex-row justify-center sm:justify-evenly w-full p-8 sm:p-[40px] lg:p-[58px_10%] gap-8 sm:gap-[10px]"
//     >
//       <div className="flex flex-col items-center sm:items-start">
//         <h2 className="text-4xl sm:text-6xl lg:text-[80px] font-bold tracking-[2px] sm:tracking-[4px]">
//           Contact
//         </h2>
//         <p className="text-2xl sm:text-4xl lg:text-[40px] font-light tracking-[1px] sm:tracking-[2px] text-center sm:text-left">
//           Feel free to reach out!
//         </p>
//       </div>
//       <ul className="flex flex-col items-center sm:items-start list-none gap-6 sm:gap-[26px]">
//         {[
//           {
//             icon: "contact/emailIcon.png",
//             link: "mailto:work.harshitkapil@gmail.com",
//             text: "work.harshitkapil@gmail.com",
//           },
//           {
//             icon: "contact/linkedinIcon.png",
//             link: "https://www.linkedin.com/in/harshit-kapil-69b8a4226",
//             text: "linkedin.com/HarshitKapil",
//           },
//           // {
//           //   icon: "contact/githubIcon.png",
//           //   link: "https://www.github.com/myname",
//           //   text: "github.com/myname",
//           // },
//         ].map((item, idx) => (
//           <li key={idx} className="flex items-center gap-4">
//             <img src={getImageUrl(item.icon)} alt={`${item.text} icon`} />
//             <a
//               href={item.link}
//               className="text-lg sm:text-[30px] font-light tracking-wide"
//             >
//               {item.text}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </footer>
//   );
// };
import React from "react";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative text-[var(--color-text)] mt-[50px] lg:mt-[120px] bg-[var(--color-secondary)] flex flex-col sm:flex-row justify-center sm:justify-evenly w-full p-8 sm:p-[40px] lg:p-[58px_10%] gap-8 sm:gap-[10px]"
    >
      {/* Glowing Circles */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] h-[300px] bg-[rgba(165,215,232,0.5)] rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px] opacity-50"></div>
        <div className="absolute w-[200px] h-[200px] bg-[rgba(165,215,232,0.5)] rounded-full blur-3xl animate-pulse top-[100px] right-[-150px] opacity-50"></div>
        <div className="absolute w-[400px] h-[400px] bg-[rgba(165,215,232,0.5)] rounded-full blur-3xl animate-pulse bottom-[-200px] left-[50px] opacity-50"></div>
        <div className="absolute w-[150px] h-[150px] bg-[rgba(165,215,232,0.5)] rounded-full blur-3xl animate-pulse bottom-[50px] right-[20px] opacity-50"></div>
      </div>

      <div className="flex flex-col items-center sm:items-start relative z-10">
        <h2 className="text-4xl sm:text-6xl lg:text-[80px] font-bold tracking-[2px] sm:tracking-[4px]">
          Contact
        </h2>
        <p className="text-2xl sm:text-4xl lg:text-[40px] font-light tracking-[1px] sm:tracking-[2px] text-center sm:text-left">
          Feel free to reach out!
        </p>
      </div>
      <ul className="flex flex-col items-center sm:items-start list-none gap-6 sm:gap-[26px] relative z-10">
        {[
          {
            icon: "contact/emailIcon.png",
            link: "mailto:work.harshitkapil@gmail.com",
            text: "work.harshitkapil@gmail.com",
          },
          {
            icon: "contact/linkedinIcon.png",
            link: "https://www.linkedin.com/in/harshit-kapil-69b8a4226",
            text: "linkedin.com/HarshitKapil",
          },
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-4">
            <img src={getImageUrl(item.icon)} alt={`${item.text} icon`} />
            <a
              href={item.link}
              className="text-lg sm:text-[30px] font-light tracking-wide"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
