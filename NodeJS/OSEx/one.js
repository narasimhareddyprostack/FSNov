const os = require("os");

let fm = os.freemem;

console.log(os.freemem());
console.log(os.getPriority());
console.log(os.hostname());

console.log(os.platform());

console.log(os.tmpdir());
console.log(os.type());

console.log(os.arch());

console.log(os.release());
