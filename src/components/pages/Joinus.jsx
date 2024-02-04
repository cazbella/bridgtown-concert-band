import React from "react";
import Header from "../layout/Header";

function CV() {
  return (
    <div>
      <Header title="Join Us" />
      <div className="container-fluid mb-4" id="cv-container">
        <p>Please find a link below to my CV in PDF format and images of my CV.</p>
        <div className="cv-images mx-auto">
          <a href="" target="_blank" rel="noopener noreferrer" className="cv-link">
            Open CV (PDF)
          </a>
          <img src="" alt="CV Image 1" />
          <img src="" alt="CV Image 2" />
        </div>
      </div>
    </div>
  );
}

export default CV;
