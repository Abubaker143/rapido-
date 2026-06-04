import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "../Hero";
import Service from "./Service";
import Services from "../../Services";
import WhatWeOffer from "./WhatWeOffer";
import EarnWithRapido from "./EarnWithRapido";

// Real components from your folder
import About from "./About";
import Safety from "./Safety";
import Careers from "./Careers";
import Blog from "./components/Blog";
import Press from "./Press";
import Contact from "./Contact";

// Puthusa namba create panna Footer component!
import Footer from "./Footer"; 
import "./App.css";

// HOME COMPONENT (Main front page UI)
const Home = () => {
  return (
    <div className="app">
      <Hero />
      <Service />
      <Services />
      <WhatWeOffer />
      <EarnWithRapido />
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* Navbar top-la eppavum steady-a irukum */}
      <Navbar />

      {/* Pages switch aahra routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer bottom-la eppavum steady-a irukum, ella page-layum theriyum! */}
      <Footer />
    </Router>
  );
}

export default App;