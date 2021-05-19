import React, { useEffect, useState } from "react";
import FormDialog from "../../components/addFriend/AddFriend";
import Navbar from "../../components/navbar/Navbar";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";
import "./home.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [friends, setFriends] = useState([]);
  let myEmail = localStorage.getItem("email");
  const myRef = app.firestore().collection("users").doc(myEmail);
  useEffect(() => {
    let email = localStorage.getItem("email");
    setEmail(email);
  }, []);
  myRef.onSnapshot((docSnapshot) => {
    setFriends(docSnapshot.data().friends);
  });
  const handleSelectChat = (email) => {
    let shortEmail = email.slice(0, email.indexOf("."));
    history.push(`/chat/${shortEmail}`);
  };
  return (
    <div className="home_container">
      <div>
        <Navbar />
        <h1 onClick={() => {history.push("/")}}>{email}</h1>
        <h2>FRIENDS LIST</h2>
        {friends.map((item) => {
          return (
            <ul>
              <li onClick={() => handleSelectChat(item)}>{item}</li>
              <hr />
            </ul>
          );
        })}
      </div>
      <div style={{ position: "relative" }}>
        <FormDialog />
      </div>
    </div>
  );
};

export default Home;
