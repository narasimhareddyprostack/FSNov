const express = require("express");
const mongodb = require("mongodb");
const app = express();
const mongoClient = mongodb.MongoClient;

let LOCAL_URL = "mongodb://127.0.0.1:27017/";
let ClOUD_URL =
  "mongodb+srv://narasimha:EoiXCop1BWEFDUeg@cluster0.quovr.mongodb.net/<dbname>?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("Hello");
});
mongoClient.connect(ClOUD_URL, async (err, db) => {
  let dbone = await db.db("ecom-mr-one");
  let col = await dbone.collection("users");
  let response = await col.find().toArray();
  //let response = await col.deleteOne({ age: 45 });
  //   let response = await col.insertOne({
  //     name: "John",
  //     age: 35,
  //     designation: "Manager",
  //     isActive: true,
  //   });
  // let response = await col.updateMany(
  //   { age: 35 },
  //   { $set: { age: 35, designation: " CEO", isActive: true } }
  // );
  console.log(response);
});
app.listen(8000, (err) => {
  if (err) throw err;
  console.log(`Server Running on Post.... 8000`);
});
