const chia = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server.js");
chai.use(chaiHttp);

const userID = null;

suite("Test user", async function () {
    setup(function () {
        this.server = app.server;

        this.userID = 6;
        this.firstName = "testFirstName";
        this.lastName = "testLastName";
        this.username = "testUsername"
        this.email = "test@test.co.uk";
        this.password = "testPass";
        this.dob = "2003-04-26";
    });
    test("Register user", async function () {
        await chia.request(this.server).post("register").send( {
            inpAgree: "on",
            userID: this.userID,
            inpFirstName: this.firstName,
            inpLastName: this.lastName,
            inpUsername: this.username,
            inpEmail: this.email,
            inpPassword: this.password,
            inpConfirmPassword: this.password,
            inpDOB: this.dob
        }).then (function (response) {
            chia.assert.equal(response.status, 100);
            chia.assert.equal(response.text, "success", "user not registered");
        });
    });

    suiteTeardown(async function () {
        setTimeout((function () {
            return process.exit(0);
        }), 3000);
    })

});