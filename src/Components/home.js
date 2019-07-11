import React from "react";
import { Link } from "react-router-dom";
const image = require("../img/galkotmahotsav2.png");
// import image from "../img/galkotmahotsav2.png";
export default class About extends React.Component {
  state = {
    name: ""
  };
  saveName = e => {
    var data={name:this.state.name}
    e.preventDefault();
    console.log("clicked save button", this.state.name);
    fetch("http://localhost:8080/savename", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data) 
    })
      .then(res => {
        console.log('hiiii',res);
        return res.json();
      })
      this.setState({name:''})
  };
  writeName = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <h2>Home Page</h2>
        <p>This is the Home page for react revises</p>
        Click the button to go different page
        <div>
          {/* <Link to="/contact">
          <button> Contact</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link> */}
          <form>
            Name:
            <input
              type="text"
              onChange={this.writeName}
              value={this.state.name}
            />
            <button onClick={this.saveName}>Save</button>
          </form>
        </div>
        <p>
          <img src={image} alt="Galkot" />
        </p>
      </div>
    );
  }
}
