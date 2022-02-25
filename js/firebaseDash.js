var firebaseConfig = {
    apiKey: "AIzaSyBHWarnPOT1qRzxx4jJz-wa2k4OiIC8Lcc",
    authDomain: "hackathon-frbs.firebaseapp.com",
    projectId: "hackathon-frbs",
    storageBucket: "hackathon-frbs.appspot.com",
    messagingSenderId: "555214040612",
    appId: "1:555214040612:web:a80a214e9206d78efcf2b1"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

 console.log(auth)

let signOutButton = document.getElementById("signout")
signOutButton.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("clicked")
  
  auth.signOut()
  alert("Signed Out")
  window.location = "index.html";
})

auth.onAuthStateChanged (function(user) {
  if(user){
      var email = user.email;
      var users = document.getElementById('user-info');
      var write = document.createTextNode(email);

      users.appendChild(write);
  }
})