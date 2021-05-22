import React from "react";
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from "../../components/emialinput/Emailinput";
import Button from "../../components/button/Button";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";
import "./signin.css";

const Signin = () => {
  const handleSignin = () => {
    let email = document.getElementById("email-id").value;
    let password = document.getElementById("password-id").value;

    // if (email == "") {
    //   alert("Email is Essential");
    // }else if (password == "") {
    //   alert("Password is Essential");
    // }

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
      <h1>SIGNIN</h1>
      <div className="signin_form">
        <Emailinput />
        <Passwordinput />
        <Button onclick={handleSignin} text="SIGNIN" />
        <p style={{marginTop: "20px"}}>
          If you are new first you signup <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => history.push("/signup")}>
            Here
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Signin;
