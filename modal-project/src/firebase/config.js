import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOZXQGmEc009uC8ggfrJx_0l0Cd5_Vmjw",
    authDomain: "tfi-cloud.firebaseapp.com",
    projectId: "tfi-cloud",
    storageBucket: "tfi-cloud.appspot.com",
    messagingSenderId: "282342022726",
    appId: "1:282342022726:web:b5b2f702fa1f63a5fbf447",
    measurementId: "G-VEXP5PWBM9"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)
  //init Authentication service
  const projectAuth = firebase.auth()
  //init firestore service
  const projectFirestore = firebase.firestore()
  //init Firestamp service
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  //init storage service
  const projectStorage = firebase.storage()
  //to use firestore in different componets of the project
  export{ projectFirestore, timestamp, projectAuth, projectStorage }