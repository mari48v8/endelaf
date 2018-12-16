// Firebase Variables
var auth = firebase.auth();

var signupForm = document.querySelector("#signup-form");
var userName = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var signupButton = document.querySelector("#signup");

signupButton.addEventListener("click", clickSignupButton);

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
        /*   signupForm.style.display = 'none'; */
        // Add userId to local storage
        localStorage.setItem("uId", firebaseUser.uid);
    } else {
        /* signupForm.style.display = 'block'; */
    }

});