const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: String,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: Object,
    dob: String
});

const User = mongoose.model("User", userSchema);
module.exports = User;