const express = require("express");
let app = express();

const morgan = require("morgan");
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Today Bundh, not in Bangalroe");
});
app.get("/about", (req, res) => {
  res.send("Abount Us Page");
});
app.get("/contact", (req, res) => {
  res.send("Contact US");
});
app.get("/services", (req, res) => {
  res.send("Services");
});
app.listen(8000, (err) => {
  console.log("Server Listen on Port:8000");
});
