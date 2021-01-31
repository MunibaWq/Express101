const express = require("express");
const app = express();

// app object has a few methods:
// HTTP verbs! REST verbs!
// CRUD app correspondence
// 1. get - READ
// --the dfault for all browsers is GET
// 2. post - CREATE
// 3. delete -DELETE
// 4. put - UPDATE
// 5. all - I will acccept any method - this is just an express thing

// Take 2 args:
// 1.path
// 2.callback to run if an HTTP request that matches THIS verb is made to the path in #1

//all method means that we are listening for any http traffic get, post, etc
// app.all("/", (req, res) => {
//   res.send(`<h1>Welcome to the homepage</h1>`);
// });

app.get("/", (req, res) => {
  console.log(req);
  res.send(`<h1>Welcome to the GET page</h1>`);
});

//if we put the res.send line into post we're going to get a time out, and everntually get a server did not respond
// this is because GET is our default
app.post("/", (req, res) => {
  res.send(`<h1>Welcome to the POST page</h1>`);
});
app.delete("/", (req, res) => {});
app.put("/", (req, res) => {});

app.listen(3000);
console.log(`The server is listening on port 3000`);
