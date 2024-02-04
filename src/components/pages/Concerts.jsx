import React from "react";
// import Header from "../layout/Header";
import "./Concerts.css";

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
                  src="src/assets/images/30-years-show-poster.jpeg"
                  className="card-img-top"
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
