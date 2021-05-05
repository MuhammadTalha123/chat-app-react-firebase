import React, { useState } from "react";
import history from "../../routes/history";
import { app } from "../../firebase/firebaseConfig";

const FriendRequest = () => {
  const [requests, setRequests] = useState([]);
  let myEmail = localStorage.getItem("email");
  const myRef = app.firestore().collection("users").doc(myEmail);
  myRef.onSnapshot((docSnapshot) => {
    setRequests(docSnapshot.data().friendsRequest);
  });
  return (
    <div>
      <div>
        <button onClick={() => history.push("/")}>Go Home</button>
      </div>
      {requests.map((item) => {
        return (
          <div className="friend_request_container">
            <div className="friend_request_name">
              <h2>{item.from}</h2>
            </div>
            <div className="friend_request_button">
              <button className="friend_request_accept">ACCEPT</button>
              <button className="friend_request_decline">DECLINE</button>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default FriendRequest;
