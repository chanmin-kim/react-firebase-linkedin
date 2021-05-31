import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCiLVYPW9homV0E5iYPzQ3mI03oyCWATnc",
    authDomain: "linkedin-clone-cmk.firebaseapp.com",
    projectId: "linkedin-clone-cmk",
    storageBucket: "linkedin-clone-cmk.appspot.com",
    messagingSenderId: "231118691347",
    appId: "1:231118691347:web:7e3faf3b85a9e9893673e6",
    measurementId: "G-9RFEXRBE4R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };