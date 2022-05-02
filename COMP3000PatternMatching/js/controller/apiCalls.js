// Variables
let Admins = [];

// Getting Admins from DB
await $.post("/api/getAdmins", async function (data) {
    let admins = data;

    for (let i = 0; i < admins.length; i++) {
        await addAdmin(new Admin(admins[i].adminID, admins[i].userID));
    }
})
// Add admin
function addAdmin(admin) {
    Admins.push(admin);
}