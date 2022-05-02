// Import
let mongoose = require("mongoose");
// User schema setup
let userSchema = new mongoose.Schema({
    userID: String,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: Object,
    dob: String,
});
let User = mongoose.model("users", userSchema);
async function getUsers() {
    let users = await User.find({});
    return users;
}
// Getting all user details but password
async function getUser(userID) {
    let user = await User.find({ "userID": userID.toString() }, { password: 0, _id: 0, __v: 0 });
    return user;
}
// Getting all usernames from DB for username check
async function getUsernames() {
    let usernames = await User.find({}, {username: 1});
    return usernames;
}
// Add a new user to DB
async function addUser(userID, firstName, lastName, username, email, password, dob) {
    let user = {
        userID: userID,
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        dob: dob,
    }
    await User.create({ userID: userID, firstName: firstName, lastName: lastName, username: username, email: email, password: password, dob: dob});
}
// User login
async function loginUser(email) {
    let password = await User.find({ "email": email}, { password: 1 });
    return password;
}
// getting user password
async function getUserDetails(email) {
    let user = await User.find({ "email": email }, { password: 0 });
    return user;
}
// Update user email
async function updateEmail(userID, email) {
    await User.updateOne({ "userID": userID }, { $set: { email: email } });
}
// Update user password
async function updatePassword(userID, password) {
    await User.updateOne({ "userID": userID }, { $set: { password: password } })
}
// Delete user
async function deleteUser(userID){
    await User.deleteOne({ "userID": userID });
}
// Admin schema setup
let adminSchema = new mongoose.Schema({
    adminID: String,
    userID: String
})
let Admin = mongoose.model("admins", adminSchema);
// Get the list of admins
async function getAdmins() {
    let admins = await Admin.find();
    return admins;
}
// User exports
module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.getUsernames = getUsernames;
module.exports.getUserDetails = getUserDetails;
module.exports.getAdmins = getAdmins;
// User options exports
module.exports.updateEmail = updateEmail;
module.exports.updatePassword = updatePassword;
module.exports.deleteUser = deleteUser;
// Login/register exports
module.exports.loginUser = loginUser;
module.exports.addUser = addUser;
