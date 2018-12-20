'use strict';

let itemsArr = [];

//const btnSubmitDonation = document.getElementById("btnSubmitDonation");
const submitDonationForm = document.getElementById("donationForm");
const choose = document.querySelector("#choose");

// Eventlistner for submitDonation
submitDonationForm.addEventListener('submit', getCheckedBoxes);


function getCheckedBoxes(e) {
    e.preventDefault();
    // Loop through checkbox's if checked push to array
    let donations = document.querySelectorAll('[name="toiletries"],[name="clothes"],[name="dog"]');

    for (let i = 0; i < donations.length; i++) {
        if (donations[i].checked) {
            let donationItem = new Object();
            donationItem.id = donations[i].id;
            donationItem.value = donations[i].min;
            donationItem.name = donations[i].name;
            itemsArr.push(donationItem);
        }
    }
    timestamp();
};

// this variable does not work if it is let
var formattedTime;
// get timestamp (Primært fra https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript)
function timestamp() {
    let timestamp = Number(new Date());
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    submitDonation();
}
// Create reference to firebase
const dbRefDonation = firebase.database().ref('donations');
const uId = localStorage.getItem("uId");

// save donation to firebase
function submitDonation() {
    if (itemsArr.length == 0) {
        choose.style.display = "block";

        setTimeout(hide, 5000);

        function hide() {
            choose.style.display = "none";
        }
    } else {

        let newdbDonationRef = dbRefDonation.push();
        newdbDonationRef.set({
            uId: uId,
            item: itemsArr,
            time: formattedTime,
        })
        console.log(newdbDonationRef);

        submitDonationForm.submit();
    }
}