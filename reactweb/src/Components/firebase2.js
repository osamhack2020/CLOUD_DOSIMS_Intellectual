import firebase from 'firebase';

var Config = {
    apiKey: "AIzaSyC-39P6iYoEQ8pYdjkOUMAjL0Mj2X1tYMM",
    authDomain: "leave-pass-management-system.firebaseapp.com",
    databaseURL: "https://leave-pass-management-system.firebaseio.com",
    projectId: "leave-pass-management-system",
    storageBucket: "leave-pass-management-system.appspot.com",
    messagingSenderId: "860597117782"
};

//firebase.initializeApp(Config);
export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();