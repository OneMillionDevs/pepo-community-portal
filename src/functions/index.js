/* ------ Global ------ */
const functions = require('firebase-functions');

const firebase = require('firebase-admin');
/* ------ Local ------ */


const auth = require('./functions.authentication');

const video = require('./functions.video');
/* ------ Functions ------ */


exports.authenticationComplete = auth.authenticationComplete;
exports.videoSync = video.videoSync; // exports.videoCreateOrUpdate = video.videoCreateOrUpdate;
// exports.videoContribution = video.videoContribution;