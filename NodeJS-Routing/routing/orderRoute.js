const express = require("express");
const route = express.Router();
const fs = require("fs");
const path = require("path");

route.get("/", (request, response) => {
  fs.readFile(
    path.join(__dirname, "..", "data", "order.json"),
    "utf8",
    (err, data) => {
      if (err) throw err;
      let orderData = JSON.parse(data);
      console.log(orderData);
      response.status(200).json({
        count: orderData.length,
        order: orderData,
      });
    }
  );
});

module.exports = route;
