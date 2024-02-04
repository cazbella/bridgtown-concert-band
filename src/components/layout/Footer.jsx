import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const iconStyle = {
    fontSize: '2rem',
    margin: '0 10px',
    color: 'black', 
  };

  return (
    <div className="container mb-4">
      <div className="container mb-4">
      <div className="card text-center footer">
        <div className="card-body">
          <h5 className="card-title">Find us on...</h5>
          <a href="https://www.facebook.com/BridgtownConcertShowBand/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" style={iconStyle} />
          </a>
          <a href="https://twitter.com/bridgtown_band?lang=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="icon" style={iconStyle} />
          </a>
          <a href="mailto: bridgtownconcertshowband@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="icon" style={iconStyle} />
          </a>
   
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
