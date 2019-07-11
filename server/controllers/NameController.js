const nameModel = require("../models/nameStore");
const express = require("express");
var app = express();

module.exports.route1 = (req, res) => {
  res.send("hello world");
};
module.exports.route2 = (req, res) => {
  console.log("request for saving name", req.body);
  var nameModelVar = new nameModel();
  console.log("here");

  nameModelVar.name = req.body.name;

  nameModelVar.save((err, user) => {
    if (err) {
      console.log("errror");
    } else {
      console.log("saved in db for succesfully");
      res.json({ user: user });
    }
  });
};
