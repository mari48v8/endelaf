'use strict'

const dbRef = firebase.database();
init();

//let donations;
let donationsArr = [];

function init() {
    let dbRefDonations = dbRef.ref('donations');
    dbRefDonations.on('value', getDonationsData, errData);
    dbRefDonations.on('value', snap => {
        let donations = (snap.val());
        //  console.log(donations);


        //turn object into an array
        let donationsArrObj = Object.keys(donations).map(function (key) {
            return [Number(key), donations[key]];
        });
        //     console.log(donationsArrObj);
    });
}

function getDonationsData(data) {
    //     // console.log(data.val());
    let donations = data.val();
    let keys = Object.keys(donations);
    //     //console.log(keys);

    for (let i = 0; i < keys.length; i++) {
        let k = keys[i];
        let uId = donations[k].uId;
        let items = donations[k].item;
        //  console.log(uId, items);
        // donationsArr.push(items);
        searchItems(items);
    }

}

let dogFoodCount = 0;
let dogClothesCount = 0;
let dogToyCount = 0;
let wintercoatCount = 0;
let hatAndGlovesCount = 0;
let socksCount = 0;
let toothbrushCount = 0;
let tamponsCount = 0;
let shavingCount = 0;

function searchItems(items) {

    items.forEach(item => {
        // console.log(item.id);
        if (item.id === "dogFood") {
            dogFoodCount += 1;
        } else if (item.id === "dogClothes") {
            dogClothesCount += 1;
        } else if (item.id === "dogToy") {
            dogToyCount += 1;
        } else if (item.id === "wintercoat") {
            wintercoatCount += 1;
        } else if (item.id === "hatAndGloves") {
            hatAndGlovesCount += 1;
        } else if (item.id === "socks") {
            socksCount += 1;
        } else if (item.id === "toothbrush") {
            toothbrushCount += 1;
        } else if (item.id === "tampons") {
            tamponsCount += 1;
        } else if (item.id === "shaving") {
            shavingCount += 1;
        }

    });
    console.log("hundemad: " + dogFoodCount + " hundetøj: " + dogClothesCount + " hundelegetøj: " + dogToyCount + " Frakke:" + wintercoatCount + " Vanter: " + hatAndGlovesCount + " Sokker: " + socksCount + " Tandbørste: " + toothbrushCount + " Tamponer: " + tamponsCount + " Barbergrej: " + shavingCount);
    dogGraphs();
}

function errData(err) {
    console.log('Error');
    console.log(err);
}

function dogGraphs() {
    let height = (dogFoodCount * 1000);
    console.log(height);
    // let Ypos = 217 - height;
    document.querySelector("#doggraph1").setAttribute("height", height + "px");
    //  clone.querySelector("#Layer_2 rect.cls-1").setAttribute("y", Ypos);
}

