// Imports
let express = require("express");
let path = require("path")
let http = require("http");
let bodyParser = require("body-parser");
let socketIo = require("socket.io");
let mongoose = require("mongoose");
// Routes
let user = require("./js/routes/user.js")
// Setup
let app = express();
let server = http.createServer(app);
// Setup Database Connection
let url = "mongodb+srv://george3718:trtivep37eb1y5@comp3000.vdbje.mongodb.net/COMP3000PM?retryWrites=true&w=majority";
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
// Connection handling check
mongoose.connection.on('error', function () { console.log("Error Connecting to DB") });
mongoose.connection.on('disconnected', function () { console.log("Disconnected From DB") });
mongoose.connection.on('connected', function () {
    console.log("Connected to DB: " + mongoose.connection.db.databaseName);
});
// Post form processing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// Set up the websocket
let io = socketIo(server);
io.on("connection", function (socket) {
    socket.on("send message", function (msg) {
        socket.broadcast.emit("received message", msg);
    });
});
// View engine configuration ejs
app.set("views", path.join(__dirname, "js/views"));
app.set("view engine", "ejs");
// Static paths
app.use(express.static(path.join(__dirname, "pattern")));
app.use(express.static(path.join(__dirname, "js")));
app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(__dirname, "css")));
// User Routes
app.post("/api/getUsers", user.getAllUsers);
app.post("/api/getUserDetails", user.getUserDetails);
// User change Email/password and delete user account
app.post("/api/changeEmail", user.changeEmail);
app.post("/api/changePassword", user.changePassword);
app.post("/api/deleteAccount", user.deleteAccount);
// Admin user routes
app.post("/api/getAdmins", user.getAdmins);
app.post("/api/adminActive", user.adminActive);
// Register/login and logout routes
app.post("/api/register", user.registerUser);
app.post("/api/login", user.loginUser);
app.post("/api/logout", user.logoutUser);
// Webpage url /registration
app.get("/registration", function (request, response) {
    response.render("registration");
})
// Webpage url /login
app.get("/login", function (request, response) {
    response.render("login");
})
// Webpage url /main
app.get("/main", function (request, response) {
    response.render("main");
})
// Webpage url /account
app.get("/account", user.account);
// Webpage url /start
app.get("/start", function (request, response) {
    response.render("start");
})
// Webpage url /index
app.get("/index", function (request, response) {
    response.render("index");
})
// Webpage url /result
app.get("/result", function (request, response) {
    response.render("result");
})
// Webpage url /about
app.get("/about", function (request, response) {
    response.render("about");
})
// Webpage url /contact
app.get("/contact", function (request, response) {
    response.render("contact");
})
// Webpage url /support
app.get("/support", function (request, response) {
    response.render("support");
})
// Webpage url /privacy
app.get("/privacy", function (request, response) {
    response.render("privacy");
})
// Export
module.exports.app = app;
// Server listening on port 9000
server.listen(9000, function () {
    console.log("Listening on 9000");
})