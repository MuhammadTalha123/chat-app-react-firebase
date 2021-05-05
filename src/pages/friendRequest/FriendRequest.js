import React from "react";
import history from "../../routes/history";

const FriendRequest = () => {
  return (
    <div>
      <div>
        <button onClick={() => history.push("/")}>Go Home</button>
      </div>
      <div className="friend_request_container">
        <div className="friend_request_name">
          <h2>Talha</h2>
        </div>
        <div className="friend_request_button">
          <button className="friend_request_accept">ACCEPT</button>
          <button className="friend_request_decline">DECLINE</button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FriendRequest;
