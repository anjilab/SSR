import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import About from "./about";

// import "./App.css";
// import Comp1 from './Components/comp1';
// import Childthing from './Components/childkokura';
// import CompParent from './Components/parentexecut';
// import Comp2 from './Components/comp2';

class Index extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Hello React Revise </h1>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Index;
