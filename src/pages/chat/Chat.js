import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import history from "../../routes/history";

const Chat = () => {
    return (
        <div>
            <Navbar />
            <button onClick={()=>history.push("/")}>Go Home</button>
            <h1>Chat</h1>
            <div className="chat_paragraph">
                <p className="user_text" style={{textAlign: "right"}}>User</p>
                <p className="friend_text" style={{textAlign: "left"}}>Friends</p>
            </div>
            <div className="msg_input_div" style={{textAlign: "center"}}>
                <input type="text" id="msg_input" placeholder="Message Text..." />
            </div>
        </div>
    );
};

export default Chat;