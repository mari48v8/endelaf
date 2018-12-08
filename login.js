// Initialize Firebase
const config = {
    apiKey: "AIzaSyBmqq2D7nb4woMcMQ6Bs3ixbz-LzTtF8kk",
    authDomain: "exam-6c12b.firebaseapp.com",
    databaseURL: "https://exam-6c12b.firebaseio.com",
    projectId: "exam-6c12b",
    storageBucket: "exam-6c12b.appspot.com",
    messagingSenderId: "662756749781"
};
firebase.initializeApp(config);


// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");
const btnSubmit = document.getElementById("btnSubmit");

let email;
let pass;
let auth;


//Add login event
btnLogin.addEventListener('click', e => {
    //Get email and pass
    email = txtEmail.value;
    pass = txtPassword.value;
    auth = firebase.auth();

    //signIn
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
})


// SignUp event
btnSignUp.addEventListener('click', e => {
    //Get email and pass
    email = txtEmail.value;
    pass = txtPassword.value;
    auth = firebase.auth();

    // create user
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
})

// sign out
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
})


//Add realtime listner
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser.uid);
        btnLogout.classList.remove('hide');
        btnLogin.classList.add('hide');
        btnSignUp.classList.add('hide');
        document.querySelector("#uId").textContent = firebaseUser.uid;
        document.querySelector("#user").textContent = firebaseUser.email;

    } else {
        console.log("not logged in");
        btnLogout.classList.add('hide');
        //reaload page

    }
})

//Eventlistner submitbut
btnSignUp.addEventListener('click', e => {
    console.log("sendt");
})
