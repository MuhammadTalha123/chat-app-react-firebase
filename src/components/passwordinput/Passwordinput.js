import React from "react";
import "./passwordinput.css";

const Passwordinput = () => {
  return (
    <div className="password_container">
      <div className="password_input_container">
        <h2>Password</h2>
        <input
          required
          type="password"
          id="password-id"
          autoComplete
          placeholder="Enter Your Password..."
        />
      </div>
    </div>
  );
};

export default Passwordinput;
