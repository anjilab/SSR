import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/home";
import Contact from "./Components/contact";
import About from "./Components/about";

import "./App.css";
// import Comp1 from './Components/comp1';
// import Childthing from './Components/childkokura';
// import CompParent from './Components/parentexecut';
// import Comp2 from './Components/comp2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello React Revise </h1>

        {/* <CompParent/> */}
        <div>
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
