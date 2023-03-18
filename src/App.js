import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
