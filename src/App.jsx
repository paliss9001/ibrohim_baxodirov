import Skills from "./components/Skills";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function App() {
  const hardSkills = [
    "HTML (HTML5)",
    "CSS (CSS3), SASS (SCSS)",
    "JavaScript (ES6+, OOP)",
    "React",
    "Vite",
    "BEM, Adaptive design",
    "Git, Github",
    "Figma",
    "REST API",
    "Competent written and oral speech",
    "English level - C2",
  ];

  const softSkills = [
    "I am responsible about deadlines",
    "I have effective time management skills", 
    "I am welcome to constructive criticism and always happy to find new points of professional and personal growth",
    "I can correctly convey my thoughts and formulate my questions",
    "I am motivated to hone my skills and continue growing in web development",
    "I am attentive to the details of the terms of reference"
  ]

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div className="skills-wrapper container">
        <Skills id={"hards"} skills={hardSkills} title={"Hard Skills"}></Skills>
        <Skills id={"softs"} skills={softSkills} title={"Soft Skills"}></Skills>
      </div>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </>
  );
}
