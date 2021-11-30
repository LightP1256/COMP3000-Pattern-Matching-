// Imports
const express = require("express");
const path = require("path")
const mongoose = require("mongoose");
const User = require("./resources/js/collect/db.js")

// Setup
const server = express();
// Setup Database Connection
const dbURI = "mongodb+srv://george3718:trtivep37eb1y5@comp3000.vdbje.mongodb.net/COMP3000PM?retryWrites=true&w=majority";
mongoose.connect(dbURI).then((result) => server.listen(63342)).catch((err) => console.log(err));

// View engine config
server.set("views", path.join(__dirname, "resources/js/views"));
server.engine("html", require("ejs").renderFile);
server.use(express.static(path.join(__dirname + "/public")));
server.set("view engine", "html");

server.use(express.static(path.join(__dirname, "css")));

server.get("/add-user", (req, res) => {
    const user = new User({
        userID: "3",
        firstName: "Bob",
        lastName: "Green",
        username: "BobG",
        email: "BobG@gmail.com",
        password: "12153",
        dob: "4/7/2002"
    });
    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});
server.get("/all-users", (req, res) =>{
    User.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});
server.get("/single-user", (req, res) => {
    User.findById("6196dd713bb6e3c5c09124e8")
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});
server.get("/home", function (request, response) {
    response.render("Home")
});
server.get("/registration", function (request, response) {
    response.render("registration")
});
// Export
module.exports.server = server;