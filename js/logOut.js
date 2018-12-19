'use strict'

if (btnLogout) {
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        localStorage.clear();
        document.location.href = '../index.html';
    })
}

const btnDonateAgain = document.querySelector("#btnDonateAgain");

if (btnDonateAgain) {
    btnDonateAgain.addEventListener('click', e => {
        e.preventDefault();
        document.location.href = 'donation.html';
    })
}

if (btnLogout) {
    btnLogout.addEventListener('click', e => {
        e.preventDefault();
        document.location.href = '../index.html';
    })
}  