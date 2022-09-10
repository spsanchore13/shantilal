import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default AllRoutes;
