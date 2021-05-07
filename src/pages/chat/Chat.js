import React from "react";
import Navbar from "../../components/navbar/Navbar";
import history from "../../routes/history";

const Chat = () => {
//   let msgInputValue = document.getElementById("msg_text").value;
//   console.log(msgInputValue);
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
      </div>
    </div>
  );
};

export default Chat;
