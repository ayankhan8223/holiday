import React from "react";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table() {
  return (
    <div className="table">
      <div className="Bucket">
        <div className="list1">
          <h3>General</h3>
          <h3 className="actives">Holiday</h3>
          <h3>Leave</h3>
        </div>
        <div className="list2">
          <TableHeader />
          <TableBody />
        </div>
      </div>
    </div>
  );
}

export default Table;
