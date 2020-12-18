const express = require("express");
const app = express();



app.get("/", (req, res) => {
  res.send("<h5> Welcome to PSA</h5>");
});
app.use("/user", require("./routing/userRoute"));
app.use("/order", require("./routing/orderRoute"))

app.listen(8000, (err) => {
  console.log(`Server Running on... ${8000}`);
});
