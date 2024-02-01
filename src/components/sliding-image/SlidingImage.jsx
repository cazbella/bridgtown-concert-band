// SlidingImage.jsx
import React from 'react';
import './SlidingImage.css';

const SlidingImage = () => {
  return (

    <div className="container-fluid mb-4 rounded-3 slide-container">
      <img className="sliding-image" src="src/assets/images/30-years-banner.jpeg" alt="Sliding Image" />
    </div>
   
  );
};

export default SlidingImage;
