// Initialize Firebase
var config = {
    apiKey: "AIzaSyAYrL_S9fw2UEAFC69J8wNOWPRdx4yCIp4",
    authDomain: "endelaf-ace62.firebaseapp.com",
    databaseURL: "https://endelaf-ace62.firebaseio.com",
    projectId: "endelaf-ace62",
    storageBucket: "endelaf-ace62.appspot.com",
    messagingSenderId: "308620752271"
};

firebase.initializeApp(config);

// Get elements
const txt_email = document.getElementById("txt_email");
const txt_password = document.getElementById("txt_password");
// button that opens the form
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
// // button that send the form
const btnSubmitLogIn = document.getElementById("btnSubmitLogIn");

let email;
let pass;
let auth;
let promise;

//Add login event
btnSubmitLogIn.addEventListener('click', e => {
    //Get email and pass
    email = txt_email.value;
    pass = txt_password.value;
    auth = firebase.auth();

    //sign in
    //login alert
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

})

//Add realtime listner
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log("not logged in");

    }
})

/* (function (error) {
    var errorCode = error.code;
    console.log(e.message);
    if (errorCode == 'auth/invalid-email') {
        console.log('invalid email');
    } else if (errorCode == 'auth/wrong-password') {
        console.log('wrong password ... ')
    } else {
        console.log('Error:' + errorCode)
    }
}) */