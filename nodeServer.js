//http is native to nodejs. we just have to ask for it we dont have to install it
const http = require("http");

//instead of res.write writing our <h1> we are going to read the contents of that file:
//fs = file system module! fs is built into Node
//fs gives node access to THIS computers file system
const fs = require("fs");

//the http moduale has a createServer method

//takes 1 arg:
// 1. callback, callback, has 2 args: req, res (a request and a reponse object)

//the server variable:
//it is the result of taking the http module, which we brought in above,
//we are going to invoke the createServer method.
//the createServer method takes a single function or a callback and the callback gets the request and the response objects
//createServer is a function that takes a callback to run and that will happen whenever a http request is made
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //the user wants the homepage, we know because the req object has / in the url property
    //   console.log(req); this doesnt work because the browser needs a reponse to know that we are actually finished
    // res = our way of responding to the requester
    // an http  message consists of:
    // 1. the start-line -CHECK
    // 2. the header
    // 3. the body
    //so we need to write the header out:
    //res.writeHead()
    //writeHead takes 2 args:
    //   1. status code - 200
    //  2. object for the mime-type - text/html,text/plain, text/css etc.. that will actually write out our headers
    res.writeHead(200, { "content-type": "text/html " });
    //write the body out:
    //with res.write we just hand it any body we want
    res.write("");
    //last thing:
    //   we put a res.end() to let the browser know that we're ready to close the connection
    //we can actually put the <h1> in res.end() but will keep them separate for now
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html " });
    res.write("<h1>Sorry, this isn't the page you're looking for! </h1>");
    res.end();
  }
});

//an http request is made when ever this port (3000)gets a request via listen:
//before we can console anything we need to set up a server:
//createServer returns an object with a listen method, listen takes 1 arg:
// 1.port to listen for http traffic on
server.listen(3000);

//type in nodemon nodeServer.js in terminal to get server running
//go to localhost:3000 on browser

//lastly: we can run
//curl -v localhost:3000
//in our terminal to see what the http reponse looks like in a curl format
