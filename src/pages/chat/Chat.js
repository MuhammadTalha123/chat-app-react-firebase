import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import history from "../../routes/history";
import { app } from "../../firebase/firebaseConfig";

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
        console.log(resp.docs);
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
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  const handleMsgValue = (evt) => {
    setMsgValue(evt.target.value);
  };
  return (
    <div>
      <Navbar />
      <button onClick={() => history.push("/")}>Go Home</button>
      <h1>Chat</h1>
      <div className="chat_paragraph">
        {msgArray.map((item, index) => {
          console.log("testing: ", item.data());
          console.log("myEmail: ", myEmail);
          return item.data().from === myEmail ? (
            <p
              key={index}
              className="my_text"
              style={{
                textAlign: "right",
                marginRight: "20px",
                marginBottom: 10,
              }}
            >
              {item.data().message}
            </p>
          ) : (
            <p
              key={index}
              className="friend_text"
              style={{
                textAlign: "left",
                marginLeft: "20px",
                marginBottom: 10,
              }}
            >
              {item.data().message}
            </p>
          );
        })}
      </div>
      <div className="msg_input_div" style={{ textAlign: "center" }}>
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
