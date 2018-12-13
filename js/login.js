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

