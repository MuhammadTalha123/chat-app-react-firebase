import React from "react";
import "./button.css";

const button = ({ text, ...btnProps }) => {
  return (
    <div className="button_container">
      <button {...btnProps} className="button_comp">
        {text}
      </button>
    </div>
  );
};

export default button;
