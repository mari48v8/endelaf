'use strict';

// Get elements
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
const btnSignUp = document.getElementById("btnSignUp");
const btnSupport = document.getElementById("btnSupport");

// Firebase Variables
let auth = firebase.auth();

//Add realtime listner
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        btnLogout.classList.remove('hide');
        btnLogin.classList.add('hide');
        btnSignUp.classList.add('hide');
        // Add userId to local storage
        localStorage.setItem("uId", firebaseUser.uid);
        //show donations.html when btnSupport is clicked (from index.html)
        if (btnSupport) {
            btnSupport.addEventListener('click', e => {
                document.location.href = 'pages/donation.html';
            });
        }
    } else {
        console.log("not logged in");
        btnLogout.classList.add('hide');
        btnLogin.classList.remove('hide');
        btnSignUp.classList.remove('hide');

        //show newuser.html when btnSupport is clicked (from index.html)
        if (btnSupport) {
            btnSupport.addEventListener('click', e => {
                document.location.href = 'pages/newuser.html';
            });
        }

    }
})
