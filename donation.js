// Get element
const donationForm = document.getElementById("donationForm");

// Eventlistner for submitDonation
donationForm.addEventListener('submit', submitDonation);

function submitDonation(e) {
    e.preventDefault();
    // Get values
    var amount = getInputVal('amount');

    console.log(amount);
}


//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}