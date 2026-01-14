import React from "react";
import Navbar from "./website/Navbar";
import Home from "./website/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Contact from "./website/Contact";
import About from "./website/About";
import Services from "./website/Services";
import Footer from "./website/Footer";
import Gallery from "./website/Gallery";
import NotFound from "./website/NotFound";
export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/operation" element={<Services />} />
<Route path="/services/other" element={<Services />} />

        {/* Gallery routes */}
        <Route path="/gallery/images" element={<Gallery type="images" />} />
        <Route path="/gallery/videos" element={<Gallery type="videos" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}
