'use strict';

// Get elements
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
const btnSignUp = document.getElementById("btnSignUp");

let email;
let pass;
let auth;
let promise;

//Add realtime listner
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        btnLogout.classList.remove('hide');
        btnLogin.classList.add('hide');
        btnSignUp.classList.add('hide');

        // Add userId to local storage
        localStorage.setItem("uId", firebaseUser.uid);

    } else {
        console.log("not logged in");
        btnLogout.classList.add('hide');
        btnLogin.classList.remove('hide');
        btnSignUp.classList.remove('hide');
    }
})
