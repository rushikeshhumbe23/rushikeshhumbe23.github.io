import { Box } from "@chakra-ui/react";
import "./App.css";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import useDarkMode from "./hooks/useDarkMode";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <Box className="App">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <About />
      <Skills isDarkMode={isDarkMode} />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
