import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import Chat from "../pages/chat/Chat";
import { GuestRoute } from "../routes/guestRoute/guestRoute";
import { PrivateRoute } from "../routes/privateRoute/privateRoute";
import FriendRequest from "../pages/friendRequest/FriendRequest";

const Index = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/signin" component={Signin} />
          <GuestRoute path="/signup" component={Signup} />
          <PrivateRoute path="/chat/:id" component={Chat} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/friendrequest" component={FriendRequest} />
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
