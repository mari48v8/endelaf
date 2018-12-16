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

        dogGraphs();
        clothesGraphs();
        toiletriesGraphs();
    });
    console.log("hundemad: " + dogFoodCount + " hundetøj: " + dogClothesCount + " hundelegetøj: " + dogToyCount + " Frakke:" + wintercoatCount + " Vanter: " + hatAndGlovesCount + " Sokker: " + socksCount + " Tandbørste: " + toothbrushCount + " Tamponer: " + tamponsCount + " Barbergrej: " + shavingCount);
}

function errData(err) {
    console.log('Error');
    console.log(err);
}

function dogGraphs() {
    let dogFoodHeight = (dogFoodCount * 10);
    let dogClothesHeight = (dogClothesCount * 10);
    let dogToyHeight = (dogToyCount * 10);
    document.querySelector("#doggraph1").setAttribute("style", "height:" + dogFoodHeight + "px");
    document.querySelector("#doggraph2").setAttribute("style", "height:" + dogClothesHeight + "px");
    document.querySelector("#doggraph3").setAttribute("style", "height:" + dogToyHeight + "px");
    console.log(dogFoodHeight, +" " + dogClothesHeight + " " + dogToyHeight);
}

function clothesGraphs() {
    let wintercoatHeight = (wintercoatCount * 10);
    let hatAndGlovesHeight = (hatAndGlovesCount * 10);
    let socksHeight = (socksCount * 10);
    document.querySelector("#clothesgraph1").setAttribute("style", "height:" + wintercoatHeight + "px");
    document.querySelector("#clothesgraph2").setAttribute("style", "height:" + hatAndGlovesHeight + "px");
    document.querySelector("#clothesgraph3").setAttribute("style", "height:" + socksHeight + "px");
    console.log(wintercoatHeight, +" " + hatAndGlovesHeight + " " + socksHeight);
}

function toiletriesGraphs() {
    let toothbrushHeight = (toothbrushCount * 10);
    let tamponsHeight = (tamponsCount * 10);
    let shavingHeight = (shavingCount * 10);
    document.querySelector("#toiletriesgraph1").setAttribute("style", "height:" + toothbrushHeight + "px");
    document.querySelector("#toiletriesgraph2").setAttribute("style", "height:" + tamponsHeight + "px");
    document.querySelector("#toiletriesgraph3").setAttribute("style", "height:" + shavingHeight + "px");
    console.log(toothbrushHeight, +" " + tamponsHeight + " " + shavingHeight);
}