const path = require("path");
const fs = require("fs");
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { default: App } = require("../src/App");
const PORT = 8000;
const app = express();
import {StaticRouter } from 'react-router-dom'; // for routes

const router = express.Router();
router.use(
  express.static(path.resolve(__dirname, "..", "build"))
  //   express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }

    console.log(ReactDOMServer.renderToString(<App />));

    const replacedData = data.replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
    );
    console.log("hereh", replacedData);
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
};


router.use("^/$", serverRenderer);


// tell the app to use the above rules
app.use(router);

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
