import React from "react";

const button = ({ text, onclick }) => {
  return (
    <div>
      <div>
        <button onClick={onclick} style={{ marginTop: "10px" }}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default button;
