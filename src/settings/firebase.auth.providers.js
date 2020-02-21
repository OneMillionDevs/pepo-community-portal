import firebaseInit from "firebase";
export const google = new firebaseInit.auth.GoogleAuthProvider();
export const github = new firebaseInit.auth.GithubAuthProvider();
export const facebook = new firebaseInit.auth.FacebookAuthProvider();

export default {
  google,
  github,
  facebook
};
