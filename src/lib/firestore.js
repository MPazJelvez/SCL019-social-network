import {
    getFirestore,

    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    updateDoc

  } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

import { auth } from "./index.js";
  
const db = getFirestore();





export const createPost = (title,description) => {
    let userName;
      // si el usuario se registró sin google (es decir no se guardó su displayName)
      // al momento de crear el post
      // su nombre será el email.
      if (auth.currentUser.displayName === null) {
        userName = auth.currentUser.email;
      } else {
        userName = auth.currentUser.displayName;
      };
    addDoc(collection(db, 'post'), {title, description, userName})
    
}


  export const getPost = id => 
    getDoc(doc(db, 'post', id ))
  
  
    
  export const onGetPost = (callback) => {
    onSnapshot(collection(db, 'post'), callback )
  }
  
//   export const getPosts = (callback) => {
//   onSnapshot(collection(db, 'post'), callback)
//   }
  
  export const deletePost =  id =>{
    deleteDoc(doc(db, 'post', id));
  } 

  export const editPost = (id, newDescription) => 
  updateDoc(doc(db,'post', id) , newDescription)