import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAfIKGNo-d8zh26GuT_aoTWrnjPDEyE7T4",
  authDomain: "net-nija-marioplan-37b66.firebaseapp.com",
  databaseURL: "https://net-nija-marioplan-37b66.firebaseio.com",
  projectId: "net-nija-marioplan-37b66",
  storageBucket: "net-nija-marioplan-37b66.appspot.com",
  messagingSenderId: "132918433763",
  appId: "1:132918433763:web:dbddcebc2f0ef7850fb2d6",
  measurementId: "G-YC9QHBJMDJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
