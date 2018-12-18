// sign out
if (btnLogout) {
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        localStorage.clear();
        document.location.href = '../index.html';
    })
}

const btnDonateAgain = document.querySelector("#btnDonateAgain");

if (btnDonateAgain) {
    console.log("donér igen")
    btnDonateAgain.addEventListener('click', e => {
        e.preventDefault();
        document.location.href = 'donation.html';
    })
}


// const btnDonateAgain = document.querySelector("#btnDonateAgain");

if (btnLogout) {
    console.log("gå til forside")
    btnLogout.addEventListener('click', e => {
        e.preventDefault();
        document.location.href = '../index.html';
    })
}  