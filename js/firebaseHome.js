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

  /*------ USER LOGIN CODE ------*/
  let signInButton = document.getElementById('signin')
  signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("lEmail")
    var password = document.getElementById("lPassword")

    auth.signInWithEmailAndPassword(email.value, password.value) 
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("user",user.email)
      window.location = "dash.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = "Invalid user credentials";
      alert( errorMessage)
    });
   })

/*------ USER REGISTRATION CODE ------*/
  let registerButton = document.getElementById("register");
  registerButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("rEmail")
    var password = document.getElementById("rPassword")

    auth.createUserWithEmailAndPassword(email.value, password.value) 
    .then((userCredential) => {
      var user = userCredential.user;
      alert('user created');
      window.location = "dash.html";
    })
    .catch((error) => {
      
    });
   })