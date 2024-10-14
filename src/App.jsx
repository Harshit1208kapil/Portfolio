import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Project";


function App() {

  return (
    <div className="bg-[var(--color-bg)] w-full h-full overflow-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
