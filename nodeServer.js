const http = require("http");

//the http moduale has a createServer method

//takes 1 arg:
// 1. callback, callback, has 2 args: req, res (a request and a reponse object)

//the server variable:
//it is the result of taking the http module, which we brought in above,
//we are going to invoke the createServer method.
//the createServer method takes a single function or a callback and the callback gets the request and the response objects
const server = http.createServer((req, res) => {});

//before we can console anything we need to set up a server:
//createServer returns an object with a listen method, listen takes 1 arg:
// 1.port to listen for http traffic on
server.listen(3000);
