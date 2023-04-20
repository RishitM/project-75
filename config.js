import firebase from "firebase";

var firebaseConfig = {
 apiKey: "AIzaSyCGaGflUEhBNSKTNJigLi_2DTE-U1UGWWE",
  authDomain: "e-ride-d01f6.firebaseapp.com",
  projectId: "e-ride-d01f6",
  storageBucket: "e-ride-d01f6.appspot.com",
  messagingSenderId: "449196926923",
  appId: "1:449196926923:web:94c77c3a4aaf5aac93f84e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
