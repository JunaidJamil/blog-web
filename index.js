import { auth, db, storage } from "./firebase.mjs"
import { doc, getDoc, addDoc, getDocs, collection, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { getDownloadURL, ref } from " https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js"


onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);

    const docRef = doc(db, "hack", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      document.getElementById("names").innerHTML = docSnap.data().username
      document.getElementById("c").innerHTML = "Logout"
      document.getElementById("hello").innerHTML = "Hello,"
      document.getElementById("prof").innerHTML = "My Profile"
      document.getElementById('blog').innerHTML = "My blog"
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");

    }
  }
  else {
    document.getElementById("inform").style.display = "none"
  }
  
  let butn = document.getElementById('show')
  butn.addEventListener('click', async () => {
    
    let title = document.getElementById('title').value;
    let fname = document.getElementById('desc').value;
    // window.location.href = "/login.html"
    
    try {
      const docRef = await addDoc(collection(db, "hacka"), {
        title: title,
        fname: fname
      });
      alert("done")
      console.log("Document written with ID: ", docRef.id);
      
    }
    catch (e) {
      console.error("Error adding document: ", e);
    }
    
    
    window.location.reload();
  })
  
  
  let main = document.getElementById('main')

  const querySnapshot = await getDocs(collection(db, "hacka"));
  querySnapshot.forEach((doc) => {
    getDownloadURL(ref(storage, user.email))
    .then((url) => {
   
    main.innerHTML += `
    <div class = "" >
    <div class="todo">
    <div id="POST" class="post" >
    <div><img src="${url}" id="myimg"alt=""></div>
    <p id="nam">
  
    </p>
    </div>
    <div class="desc-div">
    <div id="title"> ${doc.data().title}</div>

    <p id="desc">
    ${doc.data().fname}
    </p>
    </div>
    </div>
    <div class="flex">
    <button onclick="del('${doc.id}')" class="buttons">Delete</button>
    <button onclick= "update('${doc.id}')" class="buttons">Edit</button>
    </div>
    </div>
    
    `
 
    })
    .catch((error) => {
      console.log(error)
    });
    
  });
 
  // let mai = document.getElementById('nam')

  // const querSnapshot = await getDocs(collection(db, "hack"));
  // querSnapshot.forEach((doc) => {
  //   main.innerHTML = `

  //   <p id="nam">
  //   ${doc.data().username}
  //   </p>
    
  //   `
  
  // })
  
  
  async function update(id) {
    
    const updatelist = doc(db, "hacka", id);
    var updatename = prompt('enter title')
   var update = prompt("Enter description")
    await updateDoc(updatelist, {
      title: updatename,
      fname: update
    }).then(() => {
      
      window.location.reload();
    })
    
  }
  
  const del = async (id) => {
    await deleteDoc(doc(db, "hacka", id))
    
    .then(() => {
      window.location.reload();
    });
    
  }
  window.del = del;
  window.update = update;
  
});
  
  
  
  
  document.getElementById('c').addEventListener('click', () => {
    
    
    signOut(auth).then(() => {
      alert('do you really want to sign out')
    
    }).catch((error) => {
      // An error happened.
  });

})
