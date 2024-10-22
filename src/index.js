import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import WaterMark from "./watermarks";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.hydrate(<App />, document.getElementById("root")); //ssr simple ma 
ReactDOM.hydrate(<App />, document.getElementById("root")); //ssr with react router
// ReactDOM.render(<WaterMark />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
