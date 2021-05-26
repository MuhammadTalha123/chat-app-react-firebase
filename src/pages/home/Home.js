import React, { useEffect, useState } from "react";
import FormDialog from "../../components/addFriend/AddFriend";
import Loading from "../../components/loading/Loading";
import Navbar from "../../components/navbar/Navbar";
import { app } from "../../firebase/firebaseConfig";
import history from "../../routes/history";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [friendsRequest, setFriendsRequest] = useState([]);
  let myEmail = localStorage.getItem("email");
  useEffect(() => {
    const myRef = app.firestore().collection("users").doc(myEmail);
    myRef.onSnapshot((docSnapshot) => {
      const { userName, friends } = docSnapshot.data();
      setFriendsRequest(friends);
      setLoading(false);
    });
  }, []);
  const handleSelectChat = (email) => {
    let shortEmail = email.slice(0, email.indexOf("."));
    history.push(`/chat/${shortEmail}`);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="home_container">
      <div>
        <Navbar />
        {friendsRequest.length ? <h2>FRIENDS LIST</h2> : <h2>No Friends</h2>}
        {friendsRequest.map((item) => {
          return (
            <ul key={item}>
              <li onClick={() => handleSelectChat(item)}>{item}</li>
              <hr />
            </ul>
          );
        })}
      </div>
      <div className="add_friend_div">
        <FormDialog />
      </div>
    </div>
  );
};

export default Home;
