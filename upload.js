// Firebase Imports

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAX1sqL2Bkety_VSxt7i3hLJ1hUC3Y5J4E",
  authDomain: "studyshare-25971.firebaseapp.com",
  projectId: "studyshare-25971",
  storageBucket: "studyshare-25971.firebasestorage.app",
  messagingSenderId: "390854880495",
  appId: "1:390854880495:web:9f01b09e5414129507ff1a",
  measurementId: "G-9TDL8TV1ES"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// Upload Function
console.log(document.getElementById("title"));
console.log(document.getElementById("subject"));
console.log(document.getElementById("link"));

window.uploadNote = async function(){
const title =
document.getElementById("title").value;

const subject =
document.getElementById("subject").value;

const link =
document.getElementById("link").value;

try{

await addDoc(
collection(db,"notes"),
{
title,
subject,
link,
createdAt:new Date()
}
);

alert("Note Uploaded Successfully");

}catch(error){

alert(error.message);

}

}