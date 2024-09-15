import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portflio";
import Project from "./pages/Project";
import Footer from "./components/Footer";

const App = () => {
  const links = [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Projects", href: "/projects" },
  ];
  return (
    <Router>
      <Navbar links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Project />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
