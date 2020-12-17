import express from "express";
const app = express();
import mongodb from "mongodb";
const mongoClient = mongodb.MongoClient;

let LOCAL_URL = "mongodb://127.0.0.1:27017/";
app.get("/", () => {
  //
});
mongoClient.connect(
  LOCAL_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    const db = mongoClient.db("dashboard");
    const col = db.collection("dbusers");
    const data = col.find({}).toArray();
    console.log(data);
  }
);
app.listen(8000, (err) => {
  if (err) throw err;
  console.log(`Server Running on Post.... 8000`);
});
