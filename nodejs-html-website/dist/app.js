"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var mongoClient = _mongodb["default"].MongoClient;
var LOCAL_URL = "mongodb://127.0.0.1:27017/";
app.get("/", function () {//
});
mongoClient.connect(LOCAL_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}, function (err) {
  var db = mongoClient.db("dashboard");
  var col = db.collection("dbusers");
  var data = col.find({}).toArray();
  console.log(data);
});
app.listen(8000, function (err) {
  if (err) throw err;
  console.log("Server Running on Post.... 8000");
});