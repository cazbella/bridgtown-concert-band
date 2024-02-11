import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import BCSBlogo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <div className="container-fluid mb-4">
      <nav className="navbar navbar-expand-lg customNav">
        <div className="container-fluid">
          <Link to="/">
            <img
              src={BCSBlogo}
              alt="BCSB Logo"
              className="navbar-brand"
              style={{ maxHeight: '70px', borderRadiun: 10 }} // Adjust the value as needed
            />
            <br />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/concerts">
                  Concerts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/media">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Join-us">
                  Join Us
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="mailto:cazbella@myyahoo.com">
                      Email
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.facebook.com/CarolineBellaMusic" target="_blank">
                      Facebook
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="btn btn-primary btn-lg nav-mail" to="mailto:bridgtownconcertshowband@gmail.com" role="button">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
