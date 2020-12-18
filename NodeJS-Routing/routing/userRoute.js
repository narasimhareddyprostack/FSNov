const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send(`User.....`);
});

route.get("/login", (req, res) => {
  res.send(`User.....Loggin Success`);
});
route.get("/:name", (req, res) => {
  let name = req.params.name;
  res.send(`User.....${name}`);
});

//export default userRoute;
module.exports = route;

//localhost:8000/
//localhost:8000/user
//localhost:8000/user/pooja

//localhost:8000/order/
//localhost:8000/order/id
//localhost:8000/order/status
