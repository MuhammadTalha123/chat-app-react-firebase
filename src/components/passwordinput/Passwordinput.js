import React from "react";
import "./passwordinput.css";

const Passwordinput = () => {
  return (
    <div className="password_container">
      <div className="password_input_container">
        <h2>PASSWORD</h2>
        <input
          required
          type="password"
          id="password-id"
          placeholder="Enter Your Password..."
        />
      </div>
    </div>
  );
};

export default Passwordinput;
