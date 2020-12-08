const http = require("http");

const server = http
  .createServer((req, res) => {
    res.write("<h1> Hello</h1>");

    res.write("<h1> Hello</h1>");
    res.end();
  })
  

server.listen(8000, (err) => {
  if (err) throw err;
  console.log("Server Runnning on Port: 8000");
});
