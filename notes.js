import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX1sqL2Bkety_VSxt7i3hLJ1hUC3Y5J4E",
  authDomain: "studyshare-25971.firebaseapp.com",
  projectId: "studyshare-25971",
  storageBucket: "studyshare-25971.firebasestorage.app",
  messagingSenderId: "390854880495",
  appId: "1:390854880495:web:9f01b09e5414129507ff1a",
  measurementId: "G-9TDL8TV1ES"
};
const app = 
initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesContainer =
document.getElementById("notesContainer");
console.log(notesContainer);


async function loadNotes(){
 console.log("Loding Notes...");
const querySnapshot =
await getDocs(collection(db,"notes"));

querySnapshot.forEach((doc)=>{
console.log(doc.data());
const note = doc.data();

notesContainer.innerHTML += `

<div class="note-card">

<h3>${note.title}</h3>

<p>${note.subject}</p>

<a href="${note.link}"
target="_blank">

View Notes

</a>

</div>

`;

});

}

loadNotes();