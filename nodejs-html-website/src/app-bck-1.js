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
import express from "express";
const app = express();
/*

app.use(express.static(__dirname + "/public"));
app.set("views", "./src/view");
*/

const path = require("path");
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/about", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "about.html"));
});
app.get("/services", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "services.html"));
});
app.get("/contact", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "contact.html"));
});
app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "products", "products.html"));
});

app.listen(7000, (err) => {
  if (err) throw err;
  console.log(`server running on post ${7000}`);
});
