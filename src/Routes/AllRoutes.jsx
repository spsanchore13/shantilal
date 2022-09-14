import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/shantilal" element={<Home />} />
      <Route path="/shantilal/about" element={<About />} />
      <Route path="/shantilal/projects" element={<Projects />} />
      <Route path="/shantilal/contact" element={<Contact />} />
      <Route path="/shantilal/skills" element={<Skills />} />
    </Routes>
  );
}

export default AllRoutes;
