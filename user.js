import { auth,db,storage } from "./firebase.mjs"
import { doc, getDoc,addDoc,getDocs,collection,deleteDoc,updateDoc  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
import { onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import {getDownloadURL ,ref} from " https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js "

onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      // ...
  
      const docRef = doc(db, "hack", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        document.getElementById("names").innerHTML = docSnap.data().username
        document.getElementById("c").innerHTML="Logout"
        document.getElementById("hello").innerHTML="Hello,"
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
  
    }
    
    getDownloadURL(ref(storage, user.email))
.then((url) => {
  const img = document.getElementById('myimg');
  img.setAttribute('src', url);
})
.catch((error) => {
  console.log(error)
});
});



let main =  document.getElementById('main')
  
const querySnapshot = await getDoc(collection(db, 'hack'));
querySnapshot.forEach((doc) => {
  main.innerHTML =` <div id="title"> ${doc.data().username}</div>
 `
  
});

 
const user = auth.currentUser;
const newPassword = newpass.value

updatePassword(user, newPassword)
.then(() => {
  // Update successful.
  alert("updated")
}).catch((error) => {
  // An error ocurred
  // ...
});



        
        


        
        
        
        

document.getElementById('c').addEventListener('click',()=>{

  
  signOut(auth).then(() => {
   alert('do you really want to sign out')
   prompt(`<button>Yes</button>`)
  }).catch((error) => {
    // An error happened.
  });
  
})