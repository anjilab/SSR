const path = require("path");
const fs = require("fs");
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { default: App } = require("../src/Components/index"); //with react router ssr
// const { default: App } = require("../src/Components/home");  //simple ssr
const PORT = 8000;
const app = express();
import { StaticRouter } from "react-router-dom"; // for routes

const router = express.Router();

//====for simple react app ssr with react router ==================
const reactRouterServerRenderer = (req, res, next) => {
  console.log("before fs read");
  fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    const context = {};
    console.log(req.url);
    const jsx = (
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );
    console.log("jsx", ReactDOMServer.renderToString(<jsx />));

    const replacedData = data.replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDOMServer.renderToString(<jsx />)}</div>`
    );
    console.log("hereh", replacedData);
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<jsx />)}</div>`
      )
    );
  });
};
router.use("^/$", reactRouterServerRenderer);

router.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
