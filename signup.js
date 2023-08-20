import {auth, db , storage} from "./firebase.mjs"
import{createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import{doc, setDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
import {ref, uploadBytes } from " https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js "


let btn = document.getElementById('sign')
btn.addEventListener('click',()=>{


    let username = document.getElementById('username').value
    let last = document.getElementById('lastname').value
    let email = document.getElementById('Email').value
    let password = document.getElementById('password').value
    let repeat = document.getElementById('repeatPassword').value
    
    
    if(repeat===password){
      
      createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential)  => {
        await setDoc(doc(db, "hack", userCredential.user.uid), {
          username:username,
          lastname:last,
          email:email,
          password:password,
          repeatpassword:repeat
        });
        window.location.href = "login.html"
        
        
      })
      
      const storageRef = ref(storage, email);
      let file = document.getElementById('file').files;
      uploadBytes(storageRef, file[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    
      })
      
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
      })
      
    }
    
    else{
      alert('Enter correct')
    }
  })