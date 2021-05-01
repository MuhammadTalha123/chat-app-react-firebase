import React from "react";
import Nameinput from "../../components/nameinput/Nameinput";
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from "../../components/emialinput/Emailinput";
import Button from "../../components/button/Button";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";

const Signup = () => {
  const handleRegister = () => {
    let email = document.getElementById("email-id").value;
    let name = document.getElementById("name-id").value;
    let password = document.getElementById("password-id").value;

    if (email == "") {
      alert("Email is Essential");
    } else if (name == "") {
      alert("Name is Essential");
    } else if (password == "") {
      alert("assword is Essential");
    }

    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        var user = userCredential.user;
        app
          .firestore()
          .collection("users")
          .doc(user.email)
          .set({
            userName: name,
            uid: user.uid,
            userEmail: user.email,
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        let token = await user.getIdToken();
        console.log(token);
        localStorage.setItem("token", token);
        localStorage.setItem("email", user.email);
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
      <Nameinput />
      <Emailinput />
      <Passwordinput />
      <Button onclick={handleRegister} text="SIGNUP" />
      <p>You have already then signin to your account.</p>
      <Button text="SIGNIN" onclick={() => history.push("/signin")} />
    </div>
  );
};

export default Signup;
