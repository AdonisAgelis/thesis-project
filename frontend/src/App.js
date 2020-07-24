import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './custom.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Main from './main.component';
import SignUp from './signup.component';
import LogIn from './login.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2 className = "custom">Museum User Tracker</h2>
        </div>
        <Route path="/" exact component={Main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </Router>
    );
  }
}

export default App;