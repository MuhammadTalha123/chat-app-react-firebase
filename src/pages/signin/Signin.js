import React from "react";
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from "../../components/emialinput/Emailinput";
import Button from "../../components/button/Button";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";

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
      .then(async(userCredential) => {
        var user = userCredential.user;
        let token = await user.getIdToken();
        console.log(token);
        localStorage.setItem("token", token);
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <Emailinput />
      <Passwordinput />
      <Button onclick={handleSignin} text="SIGNIN" />
      <p>First you signup your account.</p>
      <Button text="SIGNUP" onclick={() => history.push("/signup")} />
    </div>
  );
};

export default Signin;
