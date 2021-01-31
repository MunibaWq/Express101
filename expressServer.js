//NODEJS is the language
// Express is node, a node module
//npm init to add a package.json file
//'npm install express' to add express dependency

//path is a native module to nodejs
const path = require("path");
//http is a native module
const http = require("http");

// express is a 3rd party module
//that means that we will need to run 'npm install'
const express = require("express");

//An 'app' is the express function (creatApplication inside the Express module)
//invoked and is an express applicaiton
const app = express();

// serve up static files! Only 1 line... take that nodejs
app.use(express.static("public"));

//All is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested

//the '*' means we'll accept anything, we're not making use of the router, that way its a mirror image of our very first node server
// app.all("*", (req, res) => {
app.all("/", (req, res) => {
  // Express handles the basic header (status code, mime-type)!
  // read in Node.html
  console.log(path.join(__dirname + "/node.html"));
  res.sendFile(path.join(__dirname + "/node.html"));

  // send this file if an HTTP request of any type is made to '/' from app.all('/',...)
  // res.send(`<h1>This is the homepage</h1>`); //this is the in-between we have to deal with
  //Express handles the end!
});

app.all("*", (req, res) => {
  res.send("<h1>Sorry, this page does not exist</h1>");
});

app.listen(3000); //specify a port
console.log(`the server is listening on port 3000`);
