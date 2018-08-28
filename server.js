/* 
***********************************************
*Author: Baruch Flores                        *
*Homework 13: Friend Finder                   *
*UCB Extension - Full-Stack Bootcamp          *
*August 2018                                  *
*********************************************** 
*/

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 8080;

//Enable public content
app.use(express.static('app/public'));


//Data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});