//http is native to nodejs. we just have to ask for it we dont have to install it
const http = require("http");

//the http moduale has a createServer method

//takes 1 arg:
// 1. callback, callback, has 2 args: req, res (a request and a reponse object)

//the server variable:
//it is the result of taking the http module, which we brought in above,
//we are going to invoke the createServer method.
//the createServer method takes a single function or a callback and the callback gets the request and the response objects
//createServer is a function that takes a callback to run and that will happen whenever a http request is made
const server = http.createServer((req, res) => {
  //   console.log(req);
  // res = our way of responding to the requester
  // an http  message consists of:
  // 1. the start-line -CHECK
  // 2. the header
  // 3. the body
  //so we need to write the header out:
  //res.writeHead()
  //writeHead takes 2 args:
  //   1. status code
  //  2. object for the mime-type - text/html
  res.writeHead(200, { "content-type": "text/html" });
});

//an http request is made when ever this port (3000)gets a request via listen:
//before we can console anything we need to set up a server:
//createServer returns an object with a listen method, listen takes 1 arg:
// 1.port to listen for http traffic on
server.listen(3000);

//type in nodemon nodeServer.js in terminal to get server running
//go to localhost:3000 on browser
