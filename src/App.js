import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Navbar from "./components/Navbar/Navbar";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      <AllRoutes />
      {/* <Home /> */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
