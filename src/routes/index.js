import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import Chat from "../pages/chat/Chat";


const Index = () => {
    return (
        <div>
        <Router history={history}>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/chat" component={Chat} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
        </div>
    );
};

export default Index;