/* --- Global Dependencies --- */
import firebaseInit from 'firebase';
/* --- Local Dependencies --- */
import {FIREBASE_CONFIG} from './firebase.env';

/* ------------------------ Initialize Dependencies ------------------------- */
export const firebase = firebaseInit.initializeApp(FIREBASE_CONFIG);
export const database = firebase.database();
