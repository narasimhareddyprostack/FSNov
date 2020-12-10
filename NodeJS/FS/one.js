const fs = require("fs");

let news = fs.readFileSync("news.txt", "utf8");

console.log(news);
