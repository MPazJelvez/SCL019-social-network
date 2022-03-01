// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js';
import { getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

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

const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export const auth = getAuth();
const userAuth = auth.currentUser;

export const authGoogle = () => {
  getRedirectResult(auth);
  signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
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
};

export const createUser = (emailInput, passwordInput) => {
  createUserWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log('created');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('ingresa correo y contraseña válidos');
      console.log(errorCode + errorMessage);
      const passwordInput = document.querySelector('#password').value;
      const passwordRepeat = document.querySelector('#repeatPassword').value;
      const username = document.querySelector('#user').value;

      if (passwordInput != passwordRepeat) {
        alert('Las contraseñas no coinciden');
      }
      if (username === '') {
        alert('Completa este campo')
      }
      if (errorCode === 'auth/missing-email') {
        alert('Ingresa un correo');
      }
      if (errorCode === 'auth/invalid-email') {
        alert('Correo Inválido');
      }
      if (errorCode === 'email-already-in-use') {
        alert('Usuario ya existe');
      }
      if (errorCode === 'weak-password') {
        alert('Contraseña débil');
      }
      if (errorCode === 'auth/internal-error') {
        alert('Ingresa una contraseña');
      }
    });
};

export const signIn = (emailInput, passwordInput) => {
  signInWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log('Ingresaste');
      console.log(user);
      window.location.hash = '#/firstPage';
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      window.location.hash = '#/login';
      const emailError = document.getElementById('invalidEmail');
      const passwordError = document.getElementById('invalidPassword');
      const space = document.getElementById('noSpace');
      const completeError = document.getElementById('completeField');

      if (errorCode === 'auth/invalid-email') {
        alert('Correo Inválido');
      }
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña Incorrecta');
      }
      if (errorCode === 'auth/user-not-found') {
        alert('Usuario no encontrado');
      }
      if (errorCode === 'auth/internal-error') {
        alert('Ingresa una contraseña');
      }
    });
};
