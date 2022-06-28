import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Newsletter from "./pages/Newsletter";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/newsletter" element={<Newsletter/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
