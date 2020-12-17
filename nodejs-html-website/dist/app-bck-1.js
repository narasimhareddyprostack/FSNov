"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
import { express } from 'express';
step 1: create expess app
step 2: create api end points
        End point : 
        localhost:7000/
        localhost:7000/about
        localhost:7000/sevices
        localhost:7000/contact
        localhost:7000/products 

*/
//const express = require("express");
var app = (0, _express["default"])();
/*

app.use(express.static(__dirname + "/public"));
app.set("views", "./src/view");
*/

var path = require("path");

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/about", function (request, response) {
  response.sendFile(path.join(__dirname, "views", "about.html"));
});
app.get("/services", function (request, response) {
  response.sendFile(path.join(__dirname, "views", "services.html"));
});
app.get("/contact", function (request, response) {
  response.sendFile(path.join(__dirname, "views", "contact.html"));
});
app.get("/products", function (req, res) {
  res.sendFile(path.join(__dirname, "products", "products.html"));
});
app.listen(7000, function (err) {
  if (err) throw err;
  console.log("server running on post ".concat(7000));
});