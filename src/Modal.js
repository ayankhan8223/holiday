import React from "react";
import "./Modal.css";

function Modal({ children, open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <div className="hea">
          <h1>Add new Holiday</h1>
          <button onClick={onClose} className="closing">
            X
          </button>
        </div>
        {children}
        <div className="plot">
          <div className="side1">
            <div className="slide1">
              <h5>Name</h5>
              <p>Holiday Name</p>
            </div>

            <div className="slide2">
              <h5>Date</h5>
              <div className="date">
                <p>12/03/2020</p>
                <img src="Group 856.png" alt="" />
              </div>
            </div>

            <div className="slide3">
              <h5>Type</h5>
              <p>Optional</p>
            </div>
          </div>

          <div className="side2">
            <div className="part">
              <p>
                Download Sample in <span className="yellow">.csv format</span>{" "}
                file to ensure that you have the correct file ready to import
              </p>
            </div>

            <div className="box">
              <img src="Layer 2.png" alt="" />
              <p>
                Drag and drop CSV file or{" "}
                <span className="Click">Click here </span> to upload
              </p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <button>Save</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
