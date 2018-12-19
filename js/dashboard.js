'use strict'

const dbRef = firebase.database();
init();

let donationsArr = [];

function init() {
    let dbRefDonations = dbRef.ref('donations');
    dbRefDonations.on('value', getDonationsData, errData);
    dbRefDonations.on('value', snap => {
        let donations = (snap.val());
    });
}

function getDonationsData(data) {
    let donations = data.val();
    let keys = Object.keys(donations);

    for (let i = 0; i < keys.length; i++) {
        let k = keys[i];
        let uId = donations[k].uId;
        let items = donations[k].item;
        searchItems(items);
        money(items);
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
let moneyCountArr = [];

function searchItems(items) {

    items.forEach(item => {
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
        totalGraphs();
    });
    // console.log("hundemad: " + dogFoodCount + " hundetøj: " + dogClothesCount + " hundelegetøj: " + dogToyCount + " Frakke:" + wintercoatCount + " Vanter: " + hatAndGlovesCount + " Sokker: " + socksCount + " Tandbørste: " + toothbrushCount + " Tamponer: " + tamponsCount + " Barbergrej: " + shavingCount);
}
let sum = 0;

function money(items) {
    items.forEach(item => {
        let moneyCount = item.value;
        moneyCountArr.push(moneyCount);


        for (let i = 0; i < moneyCountArr.length; i++) {
            moneyCountArr[i] = parseInt(moneyCountArr[i], 10);
            add();
        }

        function getSum(total, num) {
            return total + num;
        }

        function add() {
            document.querySelector(".col-money").innerHTML = moneyCountArr.reduce(getSum);
        }
    })
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
}

function clothesGraphs() {
    let wintercoatHeight = (wintercoatCount * 10);
    let hatAndGlovesHeight = (hatAndGlovesCount * 10);
    let socksHeight = (socksCount * 10);
    document.querySelector("#clothesgraph1").setAttribute("style", "height:" + wintercoatHeight + "px");
    document.querySelector("#clothesgraph2").setAttribute("style", "height:" + hatAndGlovesHeight + "px");
    document.querySelector("#clothesgraph3").setAttribute("style", "height:" + socksHeight + "px");
}

function toiletriesGraphs() {
    let toothbrushHeight = (toothbrushCount * 10);
    let tamponsHeight = (tamponsCount * 10);
    let shavingHeight = (shavingCount * 10);
    document.querySelector("#toiletriesgraph1").setAttribute("style", "height:" + toothbrushHeight + "px");
    document.querySelector("#toiletriesgraph2").setAttribute("style", "height:" + tamponsHeight + "px");
    document.querySelector("#toiletriesgraph3").setAttribute("style", "height:" + shavingHeight + "px");
}

function totalGraphs() {
    let dogTotal = dogFoodCount + dogClothesCount + dogToyCount;
    let clothesTotal = wintercoatCount + hatAndGlovesCount + socksCount;
    let toiletriesTotal = toothbrushCount + tamponsCount + shavingCount;
    let totalDogHeight = (dogTotal * 10);
    let totalClothesHeight = (clothesTotal * 10);
    let totalToiletriesHeight = (toiletriesTotal * 10);
    document.querySelector("#totaldoggraph1").setAttribute("style", "height:" + totalDogHeight + "px");
    document.querySelector("#totalclothesgraph2").setAttribute("style", "height:" + totalClothesHeight + "px");
    document.querySelector("#totaltoiletriesgraph3").setAttribute("style", "height:" + totalToiletriesHeight + "px");
}