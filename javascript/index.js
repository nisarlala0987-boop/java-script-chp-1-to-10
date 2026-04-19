  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  import { getAuth, 
    createUserWithEmailAndPassword ,
    onAuthStateChanged,
    signInWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";






  const firebaseConfig = {
    apiKey: "AIzaSyD6H0JXLi8aV8rApfmkDeZBgFQk2vGHzxM",
    authDomain: "login-form-c178f.firebaseapp.com",
    projectId: "login-form-c178f",
    storageBucket: "login-form-c178f.firebasestorage.app",
    messagingSenderId: "954559059965",
    appId: "1:954559059965:web:80fa0f124c714d9d1bab94",
    measurementId: "G-GRPE86DBXP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log(app)
  const auth = getAuth(app);
  console.log(auth)



    
    var no =document.getElementById("place")
    var nom =document.getElementById("pss")
    var nisra=document.getElementById("pass")
    nisra.addEventListener("click",signup)


      onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      var para=document.getElementById("output")
      para.innerText=user.email

    } else {
      
    }
  });
  
function signup() {
    
createUserWithEmailAndPassword(auth, no.value,nom.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });


}


var pasw=document.getElementById("pasw")
var lala=document.getElementById("lala")
var nisar=document.getElementById("login")
nisar.addEventListener("click",login)

function login() {
signInWithEmailAndPassword(auth, lala.value, pasw.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("hugya")
    location.href="https://facebook.com"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(" nhi hugya")

  });

 
}

  





