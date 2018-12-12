'use strict';

// Get element
const donationForm = document.getElementById("donationForm");

// Eventlistner for submitDonation
donationForm.addEventListener('submit', getCheckedBoxes);

let itemsArr = [];
let donationArr = [];
function getCheckedBoxes(e) {
    e.preventDefault();

    // Get values
    // Loop through checkbox's with the name=dog if checked push to array
    let dog = document.querySelectorAll('[name="dog"]');

    for (let i = 0; i < dog.length; i++) {
        if (dog[i].checked) {
            let dogItem = new Object();
            dogItem.id = dog[i].id;
            dogItem.value = dog[i].value;
            dogItem.name = dog[i].name;
            itemsArr.push(dogItem);
        }
    }
    // Loop through checkbox's with the name=clothes if checked push to array
    let clothes = document.querySelectorAll('[name="clothes"]');

    for (let i = 0; i < clothes.length; i++) {
        if (clothes[i].checked) {
            let clothesItem = new Object();
            clothesItem.id = clothes[i].id;
            clothesItem.value = clothes[i].value;
            clothesItem.name = clothes[i].name;
            itemsArr.push(clothesItem);
            // console.log(clothesItem);
        }
    }
    // Loop through checkbox's with the name=toiletries if checked push to array
    let toiletries = document.querySelectorAll('[name="toiletries"]');

    for (let i = 0; i < toiletries.length; i++) {
        if (toiletries[i].checked) {
            let toiletriesItem = new Object();
            toiletriesItem.id = toiletries[i].id;
            toiletriesItem.value = toiletries[i].value;
            toiletriesItem.name = toiletries[i].name;
            itemsArr.push(toiletriesItem);
            //console.log(toiletriesItem);
        }
    }
    timestamp();

};


// this does variable does not work if it is let
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
    console.log("submit");
    let newdbDonationRef = dbRefDonation.push();
    newdbDonationRef.set({
        uId: uId,
        item: itemsArr,
        time: formattedTime,
    })
}