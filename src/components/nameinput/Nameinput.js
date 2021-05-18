import React from "react";
import "./nameinput.css";

const Nameinput = () => {
  return (
    <div className="name_container">
      <div className="name_input_container">
        <h2>NAME</h2>
        <input required type="text" id="name-id" placeholder="Enter Your Name..." />
      </div>
    </div>
  );
};

export default Nameinput;
