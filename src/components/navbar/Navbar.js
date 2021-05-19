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
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="nav_container">
      <nav>
        <button onClick={logout} className="logout_btn">
          Logout
        </button>
        <button
          onClick={() => history.push("/friendrequest")}
          className="friend_request_btn"
        >
          FRIEND REQUEST
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
