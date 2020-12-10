//create express app - es5
const express = require("express");
const app = express();
app.get("/", (x, y) => {
  y.send("Helo");
});
app.listen(5000);
