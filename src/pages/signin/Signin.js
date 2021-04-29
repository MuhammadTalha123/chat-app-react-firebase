import React from "react";
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from "../../components/emialinput/Emailinput";
import Button from "../../components/button/Button";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";

const Signin = () => {
  const handleSignin = () => {
    let email = document.getElementById("email-id").value;
    // let name = document.getElementById("name-id").value;
    let password = document.getElementById("password-id").value;
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <Emailinput />
      <Passwordinput />
      <Button onclick={handleSignin} text="SIGNIN" />
      <Button text="SIGNUP" onclick={() => history.push("/signup")} />
    </div>
  );
};

export default Signin;
