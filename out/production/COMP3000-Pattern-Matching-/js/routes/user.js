let db = require("../collect/db.js");
async function getAllUsers(request, response) {
    let users = await db.getUsers();
    let data = { users: users };

    response.send(data);
}
async function getUserDetails(request, response) {

}
async function registerUser(request, response) {

}
async function loginUser(request, response) {

}
async function logoutUser(request, response) {

}
async function changeEmail(request, response) {

}
async function changePassword(request, response) {

}
async function deleteAccount(request, response) {

}
async function account(request, response) {

}

/* User exports*/
module.exports.getAllUsers = getAllUsers;
module.exports.getUserDetails = getUserDetails;
module.exports.changeEmail = changeEmail;
module.exports.changePassword = changePassword;
module.exports.deleteAccount = deleteAccount;
module.exports.account = account;
/* User exports*/
module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
module.exports.logoutUser = logoutUser;