//NODEJS is the language
// Express is node, a node module
//npm init to add a package.json file
//'npm install express' to add express dependency

//http is a native module
const http = require("http");

// express is a 3rd party module
//that means that we will need to run 'npm install'
const express = require("express");

//An 'app' is the express function (creatApplication inside the Express module)
//invoked and is an express applicaiton
const app = express();

//All is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested

//the '*' means we'll accept anything, we're not making use of the router, that way its a mirror image of our very first node server
app.all("*", (req, res) => {
  // Express handles the basic header (status code, mime-type)!
  res.send(`<h1>This is the homepage</h1>`); //this is the in-between we have to deal with
  //Express handles the end!
});

app.listen(3000); //specify a port
console.log(`the server is listening on port 3000`);
