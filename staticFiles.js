const express = require("express");
const app = express();

//app comes with a 'USE' method
// use takes 1 arg (right now)
// 1. the middleware you want to run
//public is the directory that we want and is handed to the static module, we dont need to include 'public' in the path
//basically we are saying
// express - anything in this 'public' directory please serve it up, we dont want to mess with it
//some people use this to serve an entire frontend side
// all you need to type in is localhost:3000/node.png or localhost:3000/styles.css you dont need a path to public
app.use(express.static("public"));

app.listen(3000);
console.log(`The server is listening on port 3000`);
