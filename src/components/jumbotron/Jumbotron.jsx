import React from 'react';
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div className="container-fluid">
      <div className="banner-container">
        {/* Add your banner content here */}
        <div className="banner">
          <img
            src="src/assets/images/30-years-banner.jpeg"
            alt="Banner Image"
            className="img-fluid"
          />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-9 text-justify">
              <h1 id="jumbotron-header">Caroline Lane - Portfolio</h1>
              <p className="col-sm-12 col-md-8 fs-4">Hi! Welcome to my portfolio. Great to meet you! My name is Caroline and I am a Junior
                Web Developer with experience in Teaching children of all ages. I have a 1st class honours degree in
                Biomedical Science and Human Biology. I have also worked as a singer/songwriter for over 15 years, and
                have experience in sales and hospitality.</p>
              <a className="btn btn-primary btn-lg" href="mailto:carolinelane@live.co.uk" role="button">Contact me</a>
            </div>
          </div>
        </div>
   
  );
}

export default Jumbotron;
