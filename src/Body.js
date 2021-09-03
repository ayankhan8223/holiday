import React from "react";
import "./Body.css";
import Table from "./Table";

function Body() {
  return (
    <div className="body">
      <div className="containers">
        <div className="items3">
          <div className="active">
            <img src="Group 618.png" alt="" />
          </div>

          <img className="img" src="Group 620.png" alt="" />
          <img className="img" src="Group 622.png" alt="" />
          <img className="img" src="Group 856.png" alt="" />
        </div>
        <div className="items4">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Body;
