// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyALG5VQqCtMA67D7fR4PVsi66pcPyf28l4',
  authDomain: 'social-craft-47f2f.firebaseapp.com',
  projectId: 'social-craft-47f2f',
  storageBucket: 'social-craft-47f2f.appspot.com',
  messagingSenderId: '845365335828',
  appId: '1:845365335828:web:db1c7348112e58ff0b9401',
  measurementId: 'G-TDZE93W9E2'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authGoogle = () => {
  getRedirectResult(auth);
  signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
