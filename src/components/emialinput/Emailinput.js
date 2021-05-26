import React from "react";
import "./emailinput.css";

const Emailinput = () => {
  return (
    <div className="email_container">
      <div className="email_input_container">
        <h2>Email</h2>
        <input
          required
          type="text"
          id="email-id"
          placeholder="Enter Your Email..."
        />
      </div>
    </div>
  );
};

export default Emailinput;
