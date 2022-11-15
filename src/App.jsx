import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AllRoutes from "./Routes/AllRoutes";
import "./app.css";
import Particle from "./components/Particle";
import { useColorMode } from "@chakra-ui/react";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <div className="App">
      {isDark && <Particle />}
      <Navbar />
      <AllRoutes />
      <ScrollToTop />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
