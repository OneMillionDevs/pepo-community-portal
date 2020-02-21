/* --- Global --- */
const admin = require("firebase-admin");
const serviceAccount = require("./secrets/service_account.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "INSERT_URL"
});

const database = admin.database();

module.exports.admin = admin;
module.exports.database = database;
