import express from "express";
//const express = require("express");
const app = express();

import morgan from "morgan";

import chalk from "chalk";

//url logger
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1> Home Page</h1>");
});
app.get("/aboutus", (req, res) => {
  res.send("<h1> About Page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1> Contact Page</h1>");
});

const port = 7000;
app.listen(port, (err) => {
  console.log(`server Running on port: ${port}`);

  console.log(`${chalk.blue(`Server Running on ...`)}`);
  console.log(`${chalk.red(`server Running :${port}`)}`);
});

export default app;
