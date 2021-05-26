import React from "react";
import "./button.css";

const button = ({ text, onclick }) => {
  return (
    <div className="button_container">
      <button onClick={onclick} className="button_comp">
        {text}
      </button>
    </div>
  );
};

export default button;
