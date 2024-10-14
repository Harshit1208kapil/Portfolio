import React from "react";

const Education = () => {
  return (
    <section
      className="relative bg-[rgba(12,12,12,0.6)] rounded-[15px] p-[40px] mt-[50px] lg:mt-[79px] mx-4 sm:mx-[5%] lg:mx-[10%] transition-all duration-300 ease-in-out"
      id="education"
    >
        <div className="absolute inset-0">
        <div className="absolute w-[300px] h-[300px] bg-[rgba(165,215,232,0.5)] rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px] opacity-50"></div>
        <div className="absolute w-[200px] h-[200px] bg-[rgba(165,215,232,0.5)] rounded-full blur-3xl animate-pulse top-[100px] right-[-150px] opacity-50"></div>
        <div className="absolute w-[400px] h-[400px] bg-[rgba(165,215,232,0.5)] rounded-full blur-3xl animate-pulse bottom-[-200px] left-[50px] opacity-50"></div>
        <div className="absolute w-[150px] h-[150px] bg-[rgba(165,215,232,0.5)] rounded-full blur-3xl animate-pulse bottom-[50px] right-[20px] opacity-50"></div>
      </div>
      <h2 className="text-[var(--color-text)] text-3xl sm:text-4xl lg:text-[35px] font-bold tracking-wider uppercase">Education</h2>
      <div className="mt-6">
        <div className="flex flex-col text-white gap-[20px]">
          <div className="flex flex-row items-center rounded-[20px] p-[25px] text-white bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent transition-all duration-300 ease-in-out hover:translate-x-2">
            <div className="flex-1">
              <h3 className="text-[25px] font-semibold">Dronacharya College of Engineering (2021 - 2025)</h3>
              <p className="text-[20px]">B. Tech | Computer Science - 70%</p>
            </div>
          </div>
          <div className="flex flex-row items-center rounded-[20px] p-[25px] bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent transition-all duration-300 ease-in-out hover:translate-x-2">
            <div className="flex-1">
              <h3 className="text-[25px] font-semibold">Vikas Bharati Public School (2021)</h3>
              <p className="text-[20px]">Class XII Percentage - 83.4%</p>
            </div>
          </div>
          <div className="flex flex-row items-center rounded-[20px] p-[25px] bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent transition-all duration-300 ease-in-out hover:translate-x-2">
            <div className="flex-1">
              <h3 className="text-[25px] font-semibold">Vikas Bharati Public School (2019)</h3>
              <p className="text-[20px]">Class X Percentage - 83.6%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
