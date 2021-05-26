import React from "react";
import Nameinput from "../../components/nameinput/Nameinput";
import Passwordinput from "../../components/passwordinput/Passwordinput";
import Emailinput from "../../components/emialinput/Emailinput";
import Button from "../../components/button/Button";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";
import "./signup.css";

const Signup = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    let email = document.getElementById("email-id").value;
    let name = document.getElementById("name-id").value;
    let password = document.getElementById("password-id").value;
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
          .then(() => {})
          .catch((error) => {});
        let token = await user.getIdToken();
        localStorage.setItem("token", token);
        localStorage.setItem("email", user.email);
        history.push("/");
      })
      .catch(console.error);
  };
  return (
    <div className="signup_container">
      <h1>Sign up</h1>
      <form onSubmit={handleRegister} className="signup_form">
        <Nameinput />
        <Emailinput />
        <Passwordinput />
        <Button type="submit" text="SIGNUP" className="signup_btn" />
        <p style={{ marginTop: "20px" }}>
          If you have already accouct then{" "}
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => history.push("/signin")}
          >
            Login.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
