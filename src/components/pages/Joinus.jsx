import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import joinUsPoster from "../../assets/images/recruitment.jpeg";

function joinus() {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div>
      {/* <Header title="Join Us" /> */}
      <div className="container-fluid poster-box">
        <div className="row">
          <div className="col-12">
            <div className="card poster">
              <div className="card-body">
                <h5 className="card-title">Come and Join us!</h5>
                <img
                  src= {joinUsPoster}
                  className="card-img-top clickable-image"
                  alt="Concert Image"
                  // onClick={handleModalShow}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Body>
          <img
            src="src/assets/images/recruitment.jpeg"
            className="img-fluid"
            alt="Concert Image"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default joinus;
