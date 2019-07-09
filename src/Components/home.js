import React from "react";
import { Link } from "react-router-dom";
const image = require("../img/galkotmahotsav2.png");
const About = () => {
  
  return (
    <div style={{textAlign:"left"}}>
      <h2>Home Page</h2>
      <p>This is the Home page for react revises</p>
       Click the button to go different page
       <div>
        <Link to="/contact">
          <button> Contact</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
       
        <p>
          <img src={image} alt="Galkot" />
        </p>
    </div>
  );
};
export default About;
