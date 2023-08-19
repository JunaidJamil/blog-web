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

 

const updatePasswordButton = document.getElementById("upt");
updatePasswordButton.addEventListener("click", () => {
    const oldPasswordInput = document.getElementById("oldPassword");
    const newPasswordInput = document.getElementById("newPassword");
    const repeatPasswordInput = document.getElementById("password");
    const user = auth.currentUser;

    const oldPassword = oldPasswordInput.value;
    const newPassword = newPasswordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    // Validation
    if (!oldPassword || !newPassword || !repeatPassword) {
        alert("All fields are required.");
        return;
    }

    if (newPassword !== repeatPassword) {
        alert("New passwords do not match.");
        return;
    }

    const credentials = firebase.auth.EmailAuthProvider.credential(
        user.email,
        oldPassword
    );

    // Reauthenticate the user
    user.reauthenticateWithCredential(credentials)
        .then(() => {
            // User has been reauthenticated, now update the password
            user.updatePassword(newPassword)
                .then(() => {
                    alert("Password updated successfully.");
                    oldPasswordInput.value = "";
                    newPasswordInput.value = "";
                    repeatPasswordInput.value = "";
                })
                .catch((error) => {
                    alert("Error updating password: " + error.message);
                });
        })
        .catch((error) => {
            alert("Error reauthenticating user: " + error.message);
        });
});



        
        


        
        
        
        

document.getElementById('c').addEventListener('click',()=>{

  
  signOut(auth).then(() => {
   alert('do you really want to sign out')
   prompt(`<button>Yes</button>`)
  }).catch((error) => {
    // An error happened.
  });
  
})