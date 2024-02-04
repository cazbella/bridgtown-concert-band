import React from 'react';
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div className="container-fluid">
      <div className="jumbotron-container row">
        <div className="">
          {/* Add your banner content here */}
          <img
            src="src/assets/images/30-years-banner.jpeg"
            alt="Banner Image"
            className="img-fluid jumbotron-image"
          />
        </div>
        <div className="col-md-6">
          {/* Add content for the second column here */}
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
