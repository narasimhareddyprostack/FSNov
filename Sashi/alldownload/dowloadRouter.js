const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.download("./files/Ticket.pdf");
});
route.get("/cancelTicket", (req, res) => {
  res.download("./files/CancelTicket.pdf");
});
route.get("/updatedTicket", (req, res) => {
  res.download("./files/UpdatedTicket.pdf");
});
module.exports = route;

/*
API 
localhost:8000/print/
localhost:8000/print/cancalTicket
localhost:8000/print/updatedTicket
*/
