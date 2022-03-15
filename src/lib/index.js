import {
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged, 
  onAuthState,
  doc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  onSnapshot,
} from "./config-firebase.js";

// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
//const userAuth = auth.currentUser;


// Firebase Functions
export const authGoogle = (auth) => {
  getRedirectResult(auth);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = "#/feed";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorCode)
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const createUser = (auth, emailInput, passwordInput) => {
  createUserWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user);
      const username = document.querySelector("#user").value;
      user.displayName = username;
      // console.log(username);
      emailVerification(auth);
      alert("Revisa tu correo!");
      // console.log('created');
      window.location.hash = "#/login";

      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorCode + errorMessage);

      const username = document.querySelector("#user").value;
      const checkbox = document.getElementById("checkbox");
      // span errors
      const invalidEmail = document.getElementById("invalidEmail");
      const invalidPassword = document.getElementById("invalidPassword");
      const missingEmail = document.getElementById("missingEmail");
      const weakPassword = document.getElementById("weakPassword");
      const invalidUserName = document.getElementById("invalidUserName");
      const emailAlreadyUse = document.getElementById("emailAlreadyUse");
      const agreeTC = document.getElementById("agreeTC");
      // manejar el input de terminos y condiciones

      if (errorCode === "auth/missing-email") {
        missingEmail.classList.toggle("hidden");
      }
      if (errorCode === "auth/invalid-email") {
        invalidEmail.classList.toggle("hidden");
      }
      if (errorCode === "auth/email-already-in-use") {
        emailAlreadyUse.classList.toggle("hidden");
      }
      if (errorCode === "auth/internal-error") {
        invalidPassword.classList.toggle("hidden");
      }
      if (errorCode === "auth/weak-password") {
        weakPassword.classList.toggle("hidden");
      }
      if (errorCode === "auth/invalid-display-name" || username === "") {
        invalidUserName.classList.toggle("hidden");
      }
      if (!checkbox.checked) {
        agreeTC.classList.toggle("hidden");
      }
    });
  return createUserWithEmailAndPassword;
};

  
  const authState = () =>{
  //const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    const uid = user.uid;
    console.log(uid)
    console.log('auth state true')
    // if (user) { 
       
    //   // User is signed in, see docs for a list of available properties
    //   // https://firebase.google.com/docs/reference/js/firebase.User
    //   console.log(uid)
    //   return true
    //   // ...
    // } else {
    //   console.log('auth state false')
    //   return false
    //   // User is signed out
    //   // ...
    // }
  });
}

export const signIn = (auth, emailInput, passwordInput) => {
  signInWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      
    // if (authState) {
    //   console.log('es true')
    //   window.location.hash = "#/feed"
    // } 
    // else {
    //   console.log('es false')
    //   window.location.hash = "#/login";
    // }

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorCode);
      window.location.hash = "#/login";

      const emailError = document.getElementById("invalidEmail");
      const passwordError = document.getElementById("invalidPassword");
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

const emailVerification = (auth) => {
  sendEmailVerification(auth.currentUser).then(() => {
    // console.log('correo enviado');
    // Email verification sent!
    // ...
  });
};


export const resetPassword = (auth, email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // console.log('Correo enviado');
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const logOut = (auth) => {
  signOut(auth)
    .then(() => {
      alert("saliste");
      window.location.hash = "#/home";
    })
    .catch((error) => {
      // console.log('aun no haz salido')
      // An error happened.
    });
};

// FIREBASE DATA BASE

export const createPost = async ( db, title, description ) => {
  // addDoc(collection(db, 'post'), { title, description });
  // const docRef = addDoc(collection(db, 'post'), { title, description });
  const docRef = await addDoc(collection(db, "post"), {
    title,
    description
  });
  console.log("Document written with ID: ", docRef.id)
};

export const getPost = (id) => {
  addDoc(doc( db, 'post', id ))
}

export const onGetPost = (callback) => {
  onSnapshot(collection(db, 'post'), callback )
}

