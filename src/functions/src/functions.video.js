/* --- Modules --- */
const admin = require("./firebase.admin");
const functions = require("firebase-functions");

/**
 * @name videoSync
 * @description Handle Pepo video update and contribution.
 */

const videoSync = functions.https.onRequest(async (request, response) => {
  try {
    /* --- Values --- */
    const topic = request.body.topic;
    const videoID = request.body.data.activity.video.id;
    if (!videoID) throw new Error("Unable to locate video ID.");

    switch (topic) {
      case "video/update":
        /* --- Video : Database Reference --- */
        const path = admin.database.ref("videos");
        await path.child(videoID).set(request.body);
        response.status(201).send();
        break;

      case "video/contribution":
        /* --- Video : Database Reference --- */
        const pathContributions = admin.database.ref("contributions");
        await pathContributions.child(videoID).set(request.body);
        response.status(201).send();
        break;

      default:
        break;
    }
  } catch (error) {
    /* --- Status 400 (Failure) : Send --- */
    response.status(400).send();
  }
});
exports.videoSync = videoSync;
