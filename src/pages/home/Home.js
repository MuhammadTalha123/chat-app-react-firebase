import React, { useEffect, useState } from "react";
import FormDialog from "../../components/addFriend/AddFriend";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const [email, setEmail] = useState("");
  useEffect(()=>{
    let email = localStorage.getItem("email");
    setEmail(email);
  },[])
  return (
    <div>
      <Navbar />
      <h1>{email}</h1>
      <FormDialog />
    </div>
  );
};

export default Home;
