import React, { useState } from "react";
import { Link } from "react-router-dom";
const image = require("../img/galkotmahotsav2.png");
// import image from "../img/galkotmahotsav2.png";
const HomeHooks = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(5);

  // saveName = e => {
  //   console.log("clicked button");
  //   // var data={name:this.state.name}
  //   // e.preventDefault();
  //   // console.log("clicked save button", this.state.name);
  //   // fetch("http://localhost:8080/savename", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "content-type": "application/json"
  //   //   },
  //   //   body: JSON.stringify(data)
  //   // })
  //   //   .then(res => {
  //   //     console.log('hiiii',res);
  //   //     return res.json();
  //   //   })
  //   //   this.setState({name:''})
  // };
  // writeName = e => {
  //   setName(name);
  // };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Home Page</h2>
      <p>This is the Home page for react revises</p>
      Click the button to go different page
      <div>
        <form>
          Name:
          <input type="text" />
          <button>Save</button>
        </form>
        <button onClick={() => setAge(age + 5)}>
          Increment Age by 5
        </button>
        <p> You are {age} years old</p>
      </div>
      <p>
        <img src={image} alt="Galkot" />
      </p>
    </div>
  );
};

export default HomeHooks;
