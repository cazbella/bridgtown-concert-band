    import React from 'react';
    import Header from "../layout/Header";
    import "./Media.css"

    function Media() {
        return (
            <div className="projects-container">
                <Header title="Photos and Video" />
                <div className="container-fluid mb-4">
                <div className="content-container">
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* Replace "..." with the actual source of your first image */}
              <img src="src/assets/images/logo.jpeg" className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              {/* Replace "..." with the actual source of your second image */}
              <img src="your_image_source_2.jpg" className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              {/* Replace "..." with the actual source of your third image */}
              <img src="your_image_source_3.jpg" className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
                </div>
            </div>
        );
    }
    
    export default Media;