import firebase from "firebase";

// API credentials
var firebaseConfig = {
    apiKey: "AIzaSyBWL1yinxdXsISTy5thRgiGu-gjJUgREFI",
    authDomain: "your-piece-of-ground-test.firebaseapp.com",
    databaseURL: "https://your-piece-of-ground-test.firebaseio.com",
    projectId: "your-piece-of-ground-test",
    storageBucket: "your-piece-of-ground-test.appspot.com",
    messagingSenderId: "489124311670",
    appId: "1:489124311670:web:509fb9ade7b56632a52557"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
export const fs = app.firestore();
export const auth = app.auth();
// export const an = firebase.analytics();

// export const st = app.storage();