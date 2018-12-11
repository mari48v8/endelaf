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
// button that opens the form
const btnLogin = document.getElementById("btnLogin");
// button that send the form
const btnSubmitLogIn = document.getElementById("btnSubmitLogIn");
// container used to hide/ show the login form
const loginForm = document.getElementById("loginContainer");

const btnSignUp = document.getElementById("btnSignUp");
const btnSubmitSignUpForm = document.getElementById("btnSubmitSignUpForm");

const btnLogout = document.getElementById("btnLogout");



let email;
let pass;
let auth;

//show form when btnLogin is clicked
btnLogin.addEventListener('click', e => {
    loginForm.classList.remove('hide');
})

//show form when btnSignUp is clicked
btnSignUp.addEventListener('click', e => {
    loginForm.classList.remove('hide');
})

//Add login event
btnSubmitLogIn.addEventListener('click', e => {
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
        btnSubmitLogIn.classList.add('hide');
        btnSignUp.classList.add('hide');
        document.querySelector("#uId").textContent = firebaseUser.uid;
        document.querySelector("#user").textContent = firebaseUser.email;
        // Add userId to local storage
        localStorage.setItem("uId", firebaseUser.uid);

        // Retrieve - @TODO hvor skal denne placeres?????
        // document.getElementById("uId2").innerHTML = sessionStorage.getItem("uId");
    } else {
        console.log("not logged in");
        btnLogout.classList.add('hide');
        //reaload page

    }
})

//Eventlistner submitSignUp button
btnSignUp.addEventListener('click', e => {
    console.log("sendt");
})

