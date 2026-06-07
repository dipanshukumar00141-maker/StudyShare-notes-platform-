import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  // apna firebase config yaha paste karo
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAX1sqL2Bkety_VSxt7i3hLJ1hUC3Y5J4E",
  authDomain: "studyshare-25971.firebaseapp.com",
  projectId: "studyshare-25971",
  storageBucket: "studyshare-25971.firebasestorage.app",
  messagingSenderId: "390854880495",
  appId: "1:390854880495:web:9f01b09e5414129507ff1a",
  measurementId: "G-9TDL8TV1ES"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function () {

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    createUserWithEmailAndPassword(auth,email,password)
    .then(() => {
        alert("Account Created");
        window.location="login.html";
    })
    .catch(error => {
        alert(error.message);
    });
}

window.login = function () {

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    signInWithEmailAndPassword(auth,email,password)
    .then(() => {
        alert("Login Success");
        window.location="dashboard.html";
    })
    .catch(error => {
        alert(error.message);
    });
}