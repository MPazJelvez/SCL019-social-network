import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';

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
export const app = initializeApp(firebaseConfig);
