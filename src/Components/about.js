import React from "react";
const image= require("../img/shepherd.jpg")
const About=()=> {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page for react revises</p>
      <div>
        There is going to be image tag here
        <p>
          <img src={image} height="500" width="500" alt="Shepherd" />
        </p>
      </div>
    </div>
  );
}
export default About
