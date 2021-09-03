import React from "react";
import "./TableHeader.css";

function TableHeader() {
  return (
    <div className="TableHeader">
      <div className="tit1">
        <h1>Holiday</h1>
        <p>
          Assign the holidays that you want to give to your employee for the
          year
        </p>
      </div>
      <div className="tit4">
        <img src="Group 856.png" alt="" />
        <p className="year">Year</p>
        <p className="year__text">2021</p>
      </div>
    </div>
  );
}

export default TableHeader;
