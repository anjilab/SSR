const path = require("path");
const fs = require("fs");
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
// const { default: App } = require("../src/Components/index");
const { default: App } = require("../src/Components/home");
const PORT = 8000;
const app = express();
import { StaticRouter } from "react-router-dom"; // for routes

const router = express.Router();

// // ======================for router try =============================
// router.get("/*", (req, res) => {
//   const context = {};
//   console.log(req.url);

//   const jsx = (
//     <StaticRouter context={context} location={req.url}>
//       <App />
//     </StaticRouter>
//   );
//   console.log("herereee", ReactDOMServer.renderToString(jsx));
//   const reactDom = ReactDOMServer.renderToString(jsx);
//   res.end(htmlTemplate(reactDom));
// });

// function htmlTemplate(reactDom) {
//   return `<!doctype html>
//   <html lang="en">
//   <head><meta charset="utf-8"/>
//   <link rel="shortcut icon" href="/favicon.ico"/>
//   <link href="http://fonts.googleapis.com/css?family=Josefin+Slab|Maven+Pro" rel="stylesheet">
//   <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
//   <meta name="theme-color" content="#000000"/>
//   <link rel="manifest" href="/manifest.json"/>
//   <title>React App</title>
//   <link href="/static/css/main.da89026f.chunk.css" rel="stylesheet">
//   </head>
//   <body>
//   <noscript>You need to enable JavaScript to run this app.</noscript>
//   <div id="root">  
//   <div id="app">${reactDom}</div>
//   </div>
//   <script src="/static/js/2.21416c7d.chunk.js">
//   </script><script src="/static/js/main.ed952dac.chunk.js">
//   </script>
//   </body>
//   </html>
//   `;
// }
//====for simple react app ssr ==================
const simpleServerRenderer = (req, res, next) => {
  console.log('before fs read')
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
router.use("^/$", simpleServerRenderer);


router.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});



