// requre os module/package

const os = require("os");
let x = os.freemem();

console.log(os.platform());
console.log(x);


const http = require('http')
const server = http.createServer(()=>{

})
server.listen('500');