import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbpcl65vLWwgvuWQ8hdvmUteSn4-tgEMI",
    authDomain: "dropshare-4007c.firebaseapp.com",
    projectId: "dropshare-4007c",
    storageBucket: "dropshare-4007c.appspot.com",
    messagingSenderId: "903824799269",
    appId: "1:903824799269:web:039332cfd3b2c546b871cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage, projectFirestore, timestamp}