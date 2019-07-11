// import express from 'express';
const express = require("express");
const config = require("./config");
console.log('in app',config);

const app = express();
const bodyParser = require("body-parser");
// const cors = require('cors');
const routes = require('../server/routes/api');



const databas = require("./database")(config);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors())
app.use('/',routes);

app.listen(config.app.port, () => {
  console.log("in port 8080");
});
