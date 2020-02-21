/* --- Global --- */
const functions = require("firebase-functions");

const admin = require("./firebase.admin");
/**
 * @name authenticationComplete
 * @description Handle new user registration and login.
 */


const authenticationComplete = functions.auth.user().onCreate(async event => {});
exports.authenticationComplete = authenticationComplete;