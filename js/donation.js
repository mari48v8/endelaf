'use strict';

let itemsArr = [];
let donationArr = [];
const btnSubmitDonation = document.getElementById("btnSubmitDonation");

//show tak.html when btnSubmitDonation is clicked
btnSubmitDonation.addEventListener('click', e => {
    console.log("button find index.html")
    document.location.href = 'tak.html';

})

// Eventlistner for submitDonation
btnSubmitDonation.addEventListener('click', getCheckedBoxes);

function getCheckedBoxes(e) {
    e.preventDefault();
    // Loop through checkbox's with the name=dog if checked push to array
    let dog = document.querySelectorAll('[name="dog"]');

    for (let i = 0; i < dog.length; i++) {
        if (dog[i].checked) {
            let dogItem = new Object();
            dogItem.id = dog[i].id;
            dogItem.value = dog[i].min;
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
            clothesItem.value = clothes[i].min;
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
            toiletriesItem.value = toiletries[i].min;
            toiletriesItem.name = toiletries[i].name;
            itemsArr.push(toiletriesItem);
            //console.log(toiletriesItem);
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
    let newdbDonationRef = dbRefDonation.push();
    console.log(newdbDonationRef);
    newdbDonationRef.set({
        uId: uId,
        item: itemsArr,
        time: formattedTime,
    })

}