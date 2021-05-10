import React from "react";
import Navbar from "../../components/navbar/Navbar";
import history from "../../routes/history";
import { app } from "../../firebase/firebaseConfig";

const Chat = () => {
  const handleSendMsg = () => {
    let msgInputValue = document.getElementById("msg_text").value;
    console.log(msgInputValue);
    let myEmail = localStorage.getItem("email");
    let userEmail = window.location.href.slice(window.location.href.lastIndexOf("/")+1);
    console.log(userEmail, myEmail);

    app
      .firestore()
      .collection("chat")
      .doc()
      .set({
        to: `${userEmail}.com`,
        from: myEmail,
        message: msgInputValue,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  return (
    <div>
      <Navbar />
      <button onClick={() => history.push("/")}>Go Home</button>
      <h1>Chat</h1>
      <div className="chat_paragraph">
        <p
          className="user_text"
          style={{ textAlign: "right", marginRight: "20px" }}
        >
          User
        </p>
        <p
          className="friend_text"
          style={{ textAlign: "left", marginLeft: "20px" }}
        >
          Friends
        </p>
      </div>
      <div className="msg_input_div" style={{ textAlign: "center" }}>
        <input type="text" id="msg_text" placeholder="Message Text..." />
        <button onClick={handleSendMsg}>SEND</button>
      </div>
    </div>
  );
};

export default Chat;
