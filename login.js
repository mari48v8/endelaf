'use strict';

// Get elements
const txt_email = document.getElementById("txt_email");
const txt_password = document.getElementById("txt_password");
// button that opens the form
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
// button that send the form
const btnSubmitLogIn = document.getElementById("btnSubmitLogIn");
// container used to hide/ show the login form
const loginForm = document.getElementById("container-login");

const btnSignUp = document.getElementById("btnSignUp");
const btnSubmitSignUpForm = document.getElementById("btnSubmitSignUpForm");

let email;
let pass;
let auth;
let promise;

//show form when btnLogin is clicked
btnLogin.addEventListener('click', e => {
    //loginForm.classList.remove('hide');
    email = txt_email.value;
    pass = txt_password.value;
    auth = firebase.auth();

    //sign in
    promise = auth.signInWithEmailAndPassword(email, pass)
        .catch(function (error) {
            var errorCode = error.code;
            if (errorCode == 'auth/invalid-email') {
                console.log('invalid email');
            } else if (errorCode == 'auth/wrong-password') {
                console.log('wrong password ... ')
            } else {
                console.log('Error:' + errorCode)
            }
        })

});

//show form when btnSignUp is clicked
btnSignUp.addEventListener('click', e => {
    loginForm.classList.remove('hide');
})

//Add login event
btnSubmitLogIn.addEventListener('click', e => {
    //Get email and pass
    email = txt_email.value;
    pass = txt_password.value;
    auth = firebase.auth();

    //sign in
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
        //Log Out
        btnLogout.classList.remove('hide');
        var user = firebase.auth().currentUser;
        email = user.email;
        console.log('Email:' + email);

        //Logged in
        btnSubmitLogIn.classList.add('hide');
        //Signed in
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
