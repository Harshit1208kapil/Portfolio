// import React, { useState } from "react";
// import { getImageUrl } from "../../utils";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="relative flex items-center justify-between py-6 px-4 lg:px-20 z-20">
//       <a>
//       </a>
//       {/* Menu icon for smaller devices */}
//       <div className="flex items-center lg:hidden">
//         <img
//           src={
//             menuOpen
//               ? getImageUrl("nav/closeIcon.png")
//               : getImageUrl("nav/menuIcon.png")
//           }
//           alt="menu button"
//           className="w-8 cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />
//       </div>

//       {/* Links for larger devices */}
//       <ul className="lg:flex gap-8 hidden text-white">
//         <li>
//           <a href="#about" className="hover:underline">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#education" className="hover:underline">
//             Education
//           </a>
//         </li>
//         <li>
//           <a href="#experience" className="hover:underline">
//             Skills
//           </a>
//         </li>
//         <li>
//           <a href="#projects" className="hover:underline">
//             Projects
//           </a>
//         </li>
//         <li>
//           <a href="#contact" className="hover:underline">
//             Contact
//           </a>
//         </li>
//       </ul>

//       {/* Dropdown menu for smaller devices */}
//       <ul
//         className={`lg:hidden flex-col absolute right-4 top-20 bg-blue-900 w-40 rounded-lg text-white px-5 py-6 space-y-6 transition-transform transform ${
//           menuOpen ? "block z-10" : "hidden"
//         }`}
//       >
//         <li>
//           <a href="#about" onClick={() => setMenuOpen(false)}>
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#experience" onClick={() => setMenuOpen(false)}>
//             Skills
//           </a>
//         </li>
//         <li>
//           <a href="#projects" onClick={() => setMenuOpen(false)}>
//             Projects
//           </a>
//         </li>
//         <li>
//           <a href="#contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };
import React, {useState, useEffect } from "react";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scroll with offset for navigation
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const yOffset = -80; // Adjust this value based on navbar height
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <nav className="relative flex items-center justify-between py-6 px-4 lg:px-20 z-20">
      <a></a>
      {/* Menu icon for smaller devices */}
      <div className="flex items-center lg:hidden">
        <img
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu button"
          className="w-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Links for larger devices */}
      <ul className="lg:flex gap-8 hidden text-white">
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#education" onClick={(e) => handleScroll(e, 'education')} className="hover:underline">
            Education
          </a>
        </li>
        <li>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:underline">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:underline">
            Contact
          </a>
        </li>
      </ul>

      {/* Dropdown menu for smaller devices */}
      <ul
        className={`lg:hidden flex-col absolute right-4 top-20 bg-blue-900 w-40 rounded-lg text-white px-5 py-6 space-y-6 transition-transform transform ${
          menuOpen ? "block z-10" : "hidden"
        }`}
      >
        <li>
          <a href="#about" onClick={(e) => { handleScroll(e, 'about'); setMenuOpen(false); }}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={(e) => { handleScroll(e, 'experience'); setMenuOpen(false); }}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => { handleScroll(e, 'projects'); setMenuOpen(false); }}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { handleScroll(e, 'contact'); setMenuOpen(false); }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
