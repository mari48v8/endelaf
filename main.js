'use strict';

// Get elements
//const txt_email = document.getElementById("txt_email");
//const txt_password = document.getElementById("txt_password");

// button that opens the form
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
// // button that send the form
//const btnSubmitLogIn = document.getElementById("btnSubmitLogIn");
//const btnSubmitSignUp = document.getElementById("btnSubmitSignUp");

// container used to hide/ show the login form
//const loginForm = document.getElementById("container-login");
//const btnSignUp = document.getElementById("btnSignUp");


let email;
let pass;
let auth;
let promise;


//Add realtime listner
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        //Log Out
        btnLogout.classList.remove('hide');
        btnLogin.classList.add('hide');



        //Signed in
        //  btnSignUp.classList.add('hide');
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

// //Eventlistner submitSignUp button
// btnSignUp.addEventListener('click', e => {
//     console.log("sendt");
// }) */