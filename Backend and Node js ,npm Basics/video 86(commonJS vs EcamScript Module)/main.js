// const http = require('node:http');
// const fs = require("fs")

// import http from 'http'
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('<h1>Hello World<h1>\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import {a,b,c,d,e} from "./mymodule.js"
// console.log(a,b,c,d,e);

// import pradeep from "./mymodule.js"
// console.log(pradeep);

const a = require("./mymodule2.js")

console.log(a,__dirname);