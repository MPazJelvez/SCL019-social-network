import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

import { app } from "./config-firebase.js";

const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const userAuth = auth.currentUser;

// Firebase Functions 
export const authGoogle = () => {
  getRedirectResult(auth);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
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
      console.log("created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("ingresa correo y contraseña válidos");
      console.log(errorCode + errorMessage);

      const passwordInput = document.querySelector("#password").value;
      const passwordRepeat = document.querySelector("#repeatPassword").value;
      const username = document.querySelector("#user").value;
      // span errors
      const invalidEmail = document.getElementById("invalidEmail");
      const invalidPassword = document.getElementById("invalidPassword");
      const repeatPassword = document.getElementById("repeatPassword");
      const passwordNotMatch = document.getElementById("passwordNotMatch");
      const missingEmail = document.getElementById("missingEmail");
      const weakPassword = document.getElementById("weakPassword");
      const invalidUserName = document.getElementById("invalidUserName");
      const emailAlreadyUse = document.getElementById("emailAlreadyUse");
      const agreeTC = document.getElementById("agreeTC");
      // manejar el input de terminos y condiciones

      if (passwordInput != passwordRepeat) {
        passwordNotMatch.classList.toggle("hidden");
      }
      if (errorCode === "auth/missing-email") {
        missingEmail.classList.toggle("hidden");
      }
      if (errorCode === "auth/invalid-email" || username === "") {
        invalidEmail.classList.toggle("hidden");
      }
      if (errorCode === "auth/email-already-in-use") {
        emailAlreadyUse.classList.toggle("hidden");
      }
      if (errorCode === "auth/weak-password") {
        weakPassword.classList.toggle("hidden");
      }
      if (errorCode === "auth/internal-error") {
        invalidPassword.classList.toggle("hidden");
      }
      if (errorCode === "auth/invalid-display-name") {
        invalidUserName.classList.toggle("hidden");
      }
    });
  return createUserWithEmailAndPassword;
};

export const signIn = (emailInput, passwordInput) => {
  signInWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Ingresaste");
      console.log(user);
      window.location.hash = "#/firstPage";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      window.location.hash = "#/login";

      const emailError = document.getElementById("invalidEmail");
      const passwordError = document.getElementById("invalidPassword");
      const space = document.getElementById("noSpace");
      const completeError = document.getElementById("completeField");
      const userNotFound = document.getElementById("userNotFound");

      if (errorCode === "auth/invalid-email") {
        emailError.classList.toggle("hidden");
      }
      if (errorCode === "auth/wrong-password") {
        passwordError.classList.toggle("hidden");
      }
      if (errorCode === "auth/user-not-found") {
        userNotFound.classList.toggle("hidden");
      }
      if (errorCode === "auth/internal-error") {
        completeError.classList.toggle("hidden");
      }
    });
  return signInWithEmailAndPassword;
};
