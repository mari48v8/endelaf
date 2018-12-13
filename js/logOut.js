
// sign out
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    localStorage.clear();
})