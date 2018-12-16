'use strict'
// button that send the form
const btnSubmitLogIn = document.getElementById("btnSubmitLogIn");
const btnSubmitSignUp = document.getElementById("btnSubmitSignUp");


// SignUp event
btnSubmitSignUp.addEventListener('click', e => {
    //Get email and pass
    email = txt_email.value;
    pass = txt_password.value;
    auth = firebase.auth();

    // create user
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
})

//Add realtime listner
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        //Log Out
        // btnLogout.classList.remove('hide');
        // var user = firebase.auth().currentUser;
        // email = user.email;
        //   console.log('Email:' + email);


        //Signed in
        btnSignUp.classList.add('hide');
        //  document.querySelector("#uId").textContent = firebaseUser.uid;
        //   document.querySelector("#user").textContent = firebaseUser.email;
        // Add userId to local storage
        // localStorage.setItem("uId", firebaseUser.uid);

        // Retrieve - @TODO hvor skal denne placeres?????
        // document.getElementById("uId2").innerHTML = sessionStorage.getItem("uId");
    } else {
        console.log("not logged in");
        //  btnLogout.classList.add('hide');
        //reaload page

    }
})