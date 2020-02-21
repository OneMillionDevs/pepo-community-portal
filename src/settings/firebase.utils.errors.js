export const handleError = err => {
  console.log(err)
  // Handle Errors here.
  var errCode = err.code;
  var errMessage = err.message;
  // The email of the user's account used.
  var email = err.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = err.credential;
}