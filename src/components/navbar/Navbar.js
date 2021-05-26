import React from "react";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";
import "./navbar.css";

const Navbar = () => {
  const logout = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        history.push("/signin");
      })
      .catch(console.error);
  };

  return (
    <div className="nav_container">
      <nav>
      <button className="home_btn" onClick={() => {history.push("/")}}>Home</button>
        <button onClick={logout} className="logout_btn">
          Logout
        </button>
        <button
          onClick={() => history.push("/friendrequest")}
          className="friend_request_btn"
        >
          Friend Requests
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
