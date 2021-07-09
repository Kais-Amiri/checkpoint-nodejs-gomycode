const fs = require('fs')

const data = fs.readFileSync(process.argv[2]).toString();
const arr = data.split("\n");
console.log(arr.length-1)
