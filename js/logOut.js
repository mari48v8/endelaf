// sign out
if (btnLogout) {
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        localStorage.clear();
        document.location.href = '../index.html';
    })
}

if (btnDonateAgain) {
    document.querySelector("btnDonateAgain").addEventListener('click', e => {
        console.log("støt")
        document.location.href = '../pages/donation.html';
    })
}