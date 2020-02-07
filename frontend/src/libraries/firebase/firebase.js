import firebase from "firebase";

// API credentials
var firebaseConfig = {
    apiKey: "AIzaSyAlkq8ErPHAyv53W8s8llItiflXi1SHSgw",
    authDomain: "tu-parcela.firebaseapp.com",
    databaseURL: "https://tu-parcela.firebaseio.com",
    projectId: "tu-parcela",
    storageBucket: "tu-parcela.appspot.com",
    messagingSenderId: "943265874838",
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
export const fs = app.firestore();
export const auth = app.auth();
// export const an = firebase.analytics();

// export const st = app.storage();