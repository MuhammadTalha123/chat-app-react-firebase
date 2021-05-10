import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import history from "../../routes/history";
import { app } from "../../firebase/firebaseConfig";

const Chat = () => {
  const [sentMsg, setSentMsg] = useState([]);
  const [recievedMsg, setRecievedMsg] = useState([]);
  useEffect(() => {
    let myEmail = localStorage.getItem("email");
    let userEmail = window.location.href.slice(
      window.location.href.lastIndexOf("/") + 1
    );
    app
      .firestore()
      .collection("chat")
      .where("from", "==", myEmail)
      .where("to", "==", userEmail + ".com")
      .onSnapshot((resp) => {
        // console.log(resp.docs[0].data());
        setSentMsg(resp.docs);
      });

    app
      .firestore()
      .collection("chat")
      .where("to", "==", myEmail)
      .where("from", "==", userEmail + ".com")
      .onSnapshot((resp) => {
        // console.log(resp.docs[0].data());
        setRecievedMsg(resp.docs);
      });
  }, []);
  const handleSendMsg = () => {
    let msgInputValue = document.getElementById("msg_text").value;
    let myEmail = localStorage.getItem("email");
    let userEmail = window.location.href.slice(
      window.location.href.lastIndexOf("/") + 1
    );
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
        {sentMsg.map((item) => {
          return (
            <p
              className="user_text"
              style={{ textAlign: "right", marginRight: "20px" }}
            >
              {item.data().message}
            </p>
          );
        })}
        {recievedMsg.map((item) => {
          return (
            <p
              className="friend_text"
              style={{ textAlign: "left", marginLeft: "20px" }}
            >
              {item.data().message}
            </p>
          );
        })}
      </div>
      <div className="msg_input_div" style={{ textAlign: "center" }}>
        <input type="text" id="msg_text" placeholder="Message Text..." />
        <button onClick={handleSendMsg}>SEND</button>
      </div>
    </div>
  );
};

export default Chat;
