// App.jsx
import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Media from "./components/pages/Media";
import Joinus from "./components/pages/Joinus";
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
            <Route path="/concerts" element={<Concerts />} />
            <Route path="/Join-Us" element={<Joinus />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
