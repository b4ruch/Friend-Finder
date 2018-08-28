/* 
***********************************************
*Author: Baruch Flores                        *
*Homework 13: Friend Finder                   *
*UCB Extension - Full-Stack Bootcamp          *
*August 2018                                  *
*********************************************** 
*/

let path = require("path");

module.exports = function(app) {


    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}