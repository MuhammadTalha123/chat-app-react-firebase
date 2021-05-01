import React from "react";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";

const Navbar = () => {
  const logout = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("token");
        history.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <nav>
        <button onClick={logout}>Logout</button>
      </nav>
    </div>
  );
};

export default Navbar;
