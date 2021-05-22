import React from "react";
import Nameinput from "../../components/nameinput/Nameinput";
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from "../../components/emialinput/Emailinput";
import Button from "../../components/button/Button";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";
import "./signup.css";

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
            friends: [],
            friendsRequest: [],
          })
          .then(() => { 
          })
          .catch((error) => { 
          });
        let token = await user.getIdToken(); 
        localStorage.setItem("token", token);
        localStorage.setItem("email", user.email);
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message; 
      });
  };
  return (
    <div className="signup_container">
    <h1>SIGNUP</h1>
    <div className="signup_form">
      <Nameinput />
      <Emailinput />
      <Passwordinput />
      <Button onclick={handleRegister} text="SIGNUP" className="signup_btn" />
      <p style={{marginTop: "20px"}}>
        If you have already accouct then{" "}
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => history.push("/signin")}
        >
          signin
        </span>.
      </p>
      </div>
    </div>
  );
};

export default Signup;
