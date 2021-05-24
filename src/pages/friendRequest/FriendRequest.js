import React, { useState } from "react";
import history from "../../routes/history";
import { app } from "../../firebase/firebaseConfig";
import "./friendRequest.css";

const FriendRequest = () => {
  const [requests, setRequests] = useState([]);
  let myEmail = localStorage.getItem("email");
  const myRef = app.firestore().collection("users").doc(myEmail);
  myRef.onSnapshot((docSnapshot) => {
    setRequests(docSnapshot.data().friendsRequest);
  });

  const handleRequestAccept = ({ from, to }) => {
    const myRef = app.firestore().collection("users").doc(myEmail);
    const otherRef = app.firestore().collection("users").doc(from);
    myRef.get().then((docSnapshot) => {
      let friendsList = docSnapshot.data().friends;
      let requestsList = docSnapshot.data().friendsRequest.filter((item) => {
        console.log("item.from", item.from);
        console.log("from", from);
        console.log("item.to", item.to);
        console.log("to", to);
        return item.from !== from || item.to !== to;
      });
      console.log(requestsList);
      friendsList.push(from);
      myRef.set({
        friendsRequest: requestsList,
        userName: docSnapshot.data().userName,
        uid: docSnapshot.data().uid,
        userEmail: docSnapshot.data().userEmail,
        friends: friendsList,
      });
    });

    otherRef.get().then((docSnapshot) => {
      let friendsList = docSnapshot.data().friends;
      let requestsList = docSnapshot.data().friendsRequest.filter((item) => {
        return item.from !== from;
      });
      friendsList.push(myEmail);
      otherRef.set({
        friendsRequest: requestsList,
        userName: docSnapshot.data().userName,
        uid: docSnapshot.data().uid,
        userEmail: docSnapshot.data().userEmail,
        friends: friendsList,
      });
    });
  };

  const handleRequestDecline = ({ from, to }) => {
    const myRef = app.firestore().collection("users").doc(myEmail);
    const otherRef = app.firestore().collection("users").doc(from);
    myRef.get().then((docSnapshot) => {
      let requestsList = docSnapshot.data().friendsRequest.filter((item) => {
        return item.from !== from;
      });
      myRef.set({
        friendsRequest: requestsList,
        userName: docSnapshot.data().userName,
        uid: docSnapshot.data().uid,
        userEmail: docSnapshot.data().userEmail,
        friends: docSnapshot.data().friends,
      });
    });

    otherRef.get().then((docSnapshot) => {
      let requestsList = docSnapshot.data().friendsRequest.filter((item) => {
        return item.from !== from && item.to !== to;
      });
      otherRef.set({
        friendsRequest: requestsList,
        userName: docSnapshot.data().userName,
        uid: docSnapshot.data().uid,
        userEmail: docSnapshot.data().userEmail,
        friends: docSnapshot.data().friends,
      });
    });
  };

  return (
    <div className="friend_request_container">
      <div>
        <h1 onClick={() => history.push("/")}>{myEmail}</h1>
        {requests.length > 0 ? (
          <h2 style={{ textAlign: "center" }}>Friend Requests</h2>
        ) : (
          <h2 style={{ textAlign: "center" }}>No Friend Requests</h2>
        )}
      </div>
      {requests.map((item) => {
        return item.from != myEmail ? (
          <div className="friend_request_list_container">
            <div className="friend_request_name">
              <h2>{item.from}</h2>
            </div>
            <div className="friend_request_button">
              <button
                className="friend_request_accept"
                onClick={() => handleRequestAccept(item)}
              >
                ACCEPT
              </button>
              <button
                className="friend_request_decline"
                onClick={() => handleRequestDecline(item)}
              >
                DECLINE
              </button>
            </div>
            <hr />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default FriendRequest;
