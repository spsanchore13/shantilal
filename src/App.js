import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />

    </div>
  );
}

export default App;
