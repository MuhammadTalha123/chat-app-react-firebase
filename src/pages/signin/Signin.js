import React from "react";
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from "../../components/emialinput/Emailinput";
import Button from "../../components/button/Button";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";
import "./signin.css";

const Signin = () => {
  const handleSignin = (event) => {
    event.preventDefault();
    let email = document.getElementById("email-id").value;
    let password = document.getElementById("password-id").value;
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        var user = userCredential.user;
        let token = await user.getIdToken();
        localStorage.setItem("token", token);
        localStorage.setItem("email", user.email);
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="signin_container">
      <h1>Sign in</h1>
      <form onSubmit={handleSignin} className="signin_form">
        <Emailinput />
        <Passwordinput />
        <Button type="submit" text="Login" />
        <p style={{ marginTop: "20px" }}>
          If you are new first you signup{" "}
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => history.push("/signup")}
          >
            Here.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signin;
