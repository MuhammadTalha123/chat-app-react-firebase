import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import history from "../../routes/history";

const Chat = () => {
    return (
        <div>
            <Navbar />
            <button onClick={()=>history.push("/")}>Go Home</button>
            <h1>Chat</h1>
        </div>
    );
};

export default Chat;