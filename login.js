import {auth} from "./firebase.mjs"
import{signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
// import{ref, set, get,child,onValue} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"



let btn = document.getElementById('login')
btn.addEventListener('click', ()=>{
    
const email = document.getElementById('Email').value;
const password =document.getElementById('password').value;

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // ...
  alert('Logged in')
  window.location.href ="/index.html"
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert('invalid Id')
});

})


   
 