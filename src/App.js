import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./Components/home";
// import Contact from "./Components/contact";
// import About from "./Components/about";
import Routes from "./Components";

import "./App.css";
// import Comp1 from './Components/comp1';
// import Childthing from './Components/childkokura';
// import CompParent from './Components/parentexecut';
// import Comp2 from './Components/comp2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
