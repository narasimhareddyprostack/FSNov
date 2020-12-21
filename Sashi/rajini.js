const honda = require("express");
const app = honda();
const path = require("path");
const m = require("morgan");
const fs = require("fs");
app.use(m("tiny"));

app.get("/", (x, y) => {
  y.send("Kabali");
});
app.get("/ticket", (req, res) => {
  res.send("<h1>Ticked Booked</h1>");
});

app.use("/print", require("./alldownload/dowloadRouter"));
app.listen(8000, () => {
  console.log("Rajini running... 8000");
});
