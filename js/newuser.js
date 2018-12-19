'use strict'

let signupForm = document.querySelector("#signup-form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signupButton = document.querySelector("#signup");

// listen for submit - form
signupForm.addEventListener('submit', submitUserData);

function clickSignupButton() {
    //signup firebase method
    auth.createUserWithEmailAndPassword(email.value, password.value).
        then(function (user) {
            console.log(auth.currentUser.email);
            document.location.href = '../pages/donation.html';
        }, function (error) {
            console.log(error.message);
        });
}

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
    })
    clickSignupButton();
}



