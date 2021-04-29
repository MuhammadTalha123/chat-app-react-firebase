import React from "react";
// import Nameinput from "../../components/nameinput/Nameinput";
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from "../../components/emialinput/Emailinput";
import Button from "../../components/button/Button";
import { app } from "../../firebase/firebaseConfig";

const Signup = () => {
  const handleRegister = () => {
    let email = document.getElementById("email-id").value;
    // let name = document.getElementById("name-id").value;
    let password = document.getElementById("password-id").value;
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      {/*<Nameinput />*/}
      <Emailinput />
      <Passwordinput />
      <Button onclick={handleRegister} text="SIGNUP" />
    </div>
  );
};

export default Signup;
