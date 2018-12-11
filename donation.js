'use strict';
// Get element
const donationForm = document.getElementById("donationForm");

// Eventlistner for submitDonation
donationForm.addEventListener('submit', submitDonation);

function submitDonation(e) {
    e.preventDefault();
    let donationArr = []
    // Get values


    // Loop through checkbox's with the name=dog if checked push to array
    let dog = document.querySelectorAll('[name="dog"]');

    for (let i = 0; i < dog.length; i++) {
        if (dog[i].checked) {
            let dogItem = new Object();
            dogItem.id = dog[i].id;
            dogItem.value = dog[i].value;
            dogItem.name = dog[i].name;
            donationArr.push(dogItem);
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
            donationArr.push(clothesItem);
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
            donationArr.push(toiletriesItem);
            //console.log(toiletriesItem);
        }
    }
    console.log(donationArr);
};
