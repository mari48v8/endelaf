//'use strict'


let signupForm = document.querySelector("#signup-form");
// let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signupButton = document.querySelector("#signup");


// Authentication
signupButton.addEventListener("click", clickSignupButton);

// listen for submit - form
signupForm.addEventListener('submit', submitUserData);

function clickSignupButton() {
    //signup firebase method
    auth.createUserWithEmailAndPassword(email.value, password.value).
        then(function (user) {
            console.log(auth.currentUser.email)
        }, function (error) {
            console.log(error.message);
        });
}

auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        // Add userId to local storage
        localStorage.setItem("uId", firebaseUser.uid);
    } else {
        /* signupForm.style.display = 'block'; */
    }

});

const dbUserRef = firebase.database().ref('users')

function submitUserData(e) {
    e.preventDefault();

    //get values
    let firstname_val = getInputValues('txt_fornavn');
    let lastname_val = getInputValues('txt_efternavn');
    let adress_val = getInputValues('txt_adresse');
    let postnr_val = getInputValues('txt_postnr');
    let by_val = getInputValues('txt_by');
    let email_val = getInputValues('email');
    let phone_val = getInputValues('txt_telefon');
    //let uId = localStorage.getItem("uId");
    //console.log(uId);
    saveUser(firstname_val, lastname_val, adress_val, postnr_val, by_val, email_val, phone_val);
}

// get input values
function getInputValues(id) {
    return document.getElementById(id).value;
}

// save User to db
function saveUser(firstname_val, lastname_val, adress_val, postnr_val, by_val, email_val, phone_val) {
    let newdbUserRef = dbUserRef.push();
    newdbUserRef.set({
        fornavn: firstname_val,
        efternavn: lastname_val,
        adresse: adress_val,
        postnr: postnr_val,
        by: by_val,
        email: email_val,
        telefon: phone_val,
        //UID: uId // this doesn't not work because it takes Uid from localstorage, but there is nothing in localstorage before the button is pushed.
    })
    console.log("submit");
}



