// App.jsx
import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Layout/Navbar";
import Work from "./Work.json";
import Footer from "./components/Layout/Footer";
import Media from "./components/pages/Media";
import Contact from "./components/pages/Contact";
import CV from "./components/pages/CV";
import Home from "./components/pages/Home";
import Concerts from "./components/pages/Concerts";
import SlidingImage from "./components/sliding-image/SlidingImage"; // Import the new component


function App() {
  return (
    <Router>
      <div className="flex-container">
        <div className="container">
          <Navbar />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/concerts" element={<Concerts />} />
            <Route path="/CV" element={<CV />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
