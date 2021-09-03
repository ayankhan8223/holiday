import React, { useState } from "react";
import "./TableBody.css";
import Modal from "./Modal";

function TableBody() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="TableBody">
      <div className="row1">
        <div className="list3">
          <h6>List(6)</h6>
        </div>
        <div className="list4">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            + Add new{" "}
          </button>
          <p>Filter</p>
          <p>All</p>
        </div>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>

      <div className="row2">
        <div className="coloumn1">
          <h3>Name</h3>
        </div>
        <div className="coloumn2">
          <h3>Type</h3>
        </div>
        <div className="coloumn3">
          <h3>Date</h3>
        </div>
      </div>

      <div className="row3">
        <div className="col1">
          <h3>Rath Yatra</h3>
        </div>
        <div className="col2">
          <h3>Optional</h3>
        </div>
        <div className="col3">
          <h3>12 july 2021</h3>
        </div>
      </div>

      <div className="row3">
        <div className="col1">
          <h3>Rath Yatra</h3>
        </div>
        <div className="col2">
          <h3>Optional</h3>
        </div>
        <div className="col3">
          <h3>12 july 2021</h3>
        </div>
      </div>

      <div className="row3">
        <div className="col1">
          <h3>Rath Yatra</h3>
        </div>
        <div className="col2">
          <h3>Optional</h3>
        </div>
        <div className="col3">
          <h3>12 july 2021</h3>
        </div>
      </div>

      <div className="row3">
        <div className="col1">
          <h3>Rath Yatra</h3>
        </div>
        <div className="col2">
          <h3>Optional</h3>
        </div>
        <div className="col3">
          <h3>12 july 2021</h3>
        </div>
      </div>

      <div className="row3">
        <div className="col1">
          <h3>Rath Yatra</h3>
        </div>
        <div className="col2">
          <h3>Optional</h3>
        </div>
        <div className="col3">
          <h3>12 july 2021</h3>
        </div>
      </div>

      <div className="row3">
        <div className="col1">
          <h3>Rath Yatra</h3>
        </div>
        <div className="col2">
          <h3>Optional</h3>
        </div>
        <div className="col3">
          <h3>12 july 2021</h3>
        </div>
      </div>
    </div>
  );
}

export default TableBody;
