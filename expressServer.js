//NODEJS is the language
// Express is node, a node module

//http is a native module
const http = require("http");

// express is a 3rd party module
//that means that we will need to run 'npm install'
const express = require("express");

//npm init to add a package.json file
//'npm install express --save' to add express dependency

const app = express(); //whatever was exported by the express module is stored in the 'app' variable created here
