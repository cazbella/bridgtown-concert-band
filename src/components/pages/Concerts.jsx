import React from "react";
// import Header from "../layout/Header";
import "./Concerts.css";
import showPoster from "../../assets/images/30-years-show-poster.jpeg"

function Concerts() {
  return (
    <div>
      {/* <Header title="Concerts" /> */}
      <div className="container-fluid poster-box">
        <div className="row">
          <div className="col-12">
            <div className="card poster">
              <div className="card-body">
                <h5 className="card-title">30th Anniversary Concert</h5>
                <img
                  src= {showPoster}
                  className="card-img-top show"
                  alt="Concert Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Concerts;
