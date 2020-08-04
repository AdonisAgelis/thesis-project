import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./main.component";
import SignUp from "./signup.component";
import LogIn from "./login.component";
import Info from "./info.component";
import Profile from "./profile.component";

const App = () => {
    return (
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/info" component={Info} />
        <Route path="/profile" component={Profile} />
      </Router>
    );
}

export default App;
