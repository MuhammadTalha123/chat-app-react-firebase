import React, { useEffect, useState } from "react";
import history from "../../routes/history";
import { app } from "../../firebase/firebaseConfig";
import "./chat.css";

const Chat = () => {
  const [msgArray, setMsgArray] = useState([]);
  const [msgValue, setMsgValue] = useState("");
  let myEmail = localStorage.getItem("email");
  let userEmail = window.location.href.slice(
    window.location.href.lastIndexOf("/") + 1
  );
  useEffect(() => {
    app
      .firestore()
      .collection("chat")
      .where("from", "in", [myEmail, userEmail + ".com"])
      .onSnapshot((resp) => {
        let filteredResp = resp.docs.filter((data) => {
          return (
            data.data().to === myEmail || data.data().to === userEmail + ".com"
          );
        });
        setMsgArray(filteredResp);
      });
  }, []);
  const handleSendMsg = () => {
    let msgInputValue = msgValue;
    let myEmail = localStorage.getItem("email");
    let userEmail = window.location.href.slice(
      window.location.href.lastIndexOf("/") + 1
    );
    let d = new Date().getTime();
    app
      .firestore()
      .collection("chat")
      .doc(d + "")
      .set({
        to: `${userEmail}.com`,
        from: myEmail,
        time: d,
        message: msgInputValue,
      })
      .then(() => {
        setMsgValue("");
      })
      .catch((error) => {
      });
  };

  const handleClearChat = () => {
    alert("clear chat....");
  }

  const handleMsgValue = (evt) => {
    setMsgValue(evt.target.value);
  };
  return (
    <div className="chat_container">
      <div className="home_btn_user_email_div">
      <button className="go_home_btn" onClick={() => history.push("/")}>Go Home</button>
      <button className="clear_chat_btn" onClick={handleClearChat}>Clear Chat</button>
      <h1>{userEmail}</h1>
      </div>
      <h2 style={{textAlign: "center", marginBottom: "50px", marginTop: "10px"}}>Chat</h2>
      <div className="chat_text">
        {msgArray.map((item, index) => {
          return item.data().from === myEmail ? (
            <p
              key={index}
              className="my_text"
            >
              <span>{item.data().message}</span>
            </p>
          ) : (
            <p
              key={index}
              className="friend_text"
            >
              <span>{item.data().message}</span>
            </p>
          );
        })}
      </div>
      <div className="msg_input_div">
        <input
          value={msgValue}
          type="text"
          id="msg_text"
          placeholder="Message Text..."
          onChange={handleMsgValue}
        />
        <button onClick={handleSendMsg}>SEND</button>
      </div>
    </div>
  );
};

export default Chat;
