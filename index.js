// declare library
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const xss = require("xss-clean");

// buat route
const userRouter = require("./src/router/user.routes");
const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(userRouter);
app.use(xss());
// jalankan express
app.listen(3001, () => {
  console.log("SERVECE RUNNING ON PORT 3001");
});
