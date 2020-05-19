import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCXT9UozEup-gbcMjLqihuHq0HFZbRa2Oc",
    authDomain: "sample-notes-8fe8b.firebaseapp.com",
    databaseURL: "https://sample-notes-8fe8b.firebaseio.com",
    projectId: "sample-notes-8fe8b",
    storageBucket: "sample-notes-8fe8b.appspot.com",
    messagingSenderId: "212477572004",
    appId: "1:212477572004:web:9795b09cf9faf475118731",
    measurementId: "G-YWCVJ5WY7D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;