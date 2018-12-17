"use strict";

/////////////////////////// Display value and counts //////////////////////////////////////
let input
let count;
let checkedValue;

function checkbox() {

    input = document.querySelectorAll("input[type=checkbox]");
    count = document.querySelectorAll("[type='checkbox']:checked").length;
    checkedValue = "";
    let result = [];
    console.log(input);
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            result.push(input[i].value);
            console.log("Pushed : " + input[i].value);
        }
    }
    document.getElementById("show").value = result.join(",");
    document.getElementById("count").value = document.querySelectorAll("[type='checkbox']:checked").length;


}

/////////////////////////// Samlet pris //////////////////////////////////////

//Arrays
var productArray = new Array();
productArray["Hundemad"] = 75;
productArray["Hundefrakke"] = 150;
productArray["Hundelegetøj"] = 100;
productArray["Vinterfrakke"] = 200;
productArray["Hue og vanter"] = 100;
productArray["Uldne strømper"] = 125;
productArray["Tandpleje"] = 50;
productArray["Tamponer"] = 75;
productArray["Barbergrej"] = 75;

//check af de forskellige checkbokse
function getProduct() {

    var product = 0;
    var selectedProduct = document.querySelectorAll("input[type=checkbox]");

    for (var i = 0; i < selectedProduct.length; i++) {
        if (selectedProduct[i].checked) {
            product += productArray[selectedProduct[i].value] || 0;
        }
    }

    return product;
}

//Samlet pris
function getTotals() {
    var totalPrice = getProduct();
    var totalPriceDK = document.getElementById("totalPrice");
    totalPriceDK.innerText = "Samlet pris: " + "" + totalPrice + ",- Kr";
}


/////////////////////////// Display kategori //////////////////////////////////////

function showCategory() {
    hunden = document.getElementById("dog");
    checkedValue = "";
    let category = [];
    console.log(category_hunden);
    for (let i = 0; i < hunden.length; i++) {
        if (hunden[i].checked) {
            category.push(hunden[i].id);
            console.log("Pushed : " + hunden[i].id);
        }
    }
    document.getElementById("checkbox-kategori").value = category.join(",");



}


/* 
var e = document.getElementById("#dogFood"),
    t = document.querySelector(".block6 .jacket-choice");
var newline = '&nbsp';

function n(e) {
    var n = e.target.getAttribute("value");
    t.textContent = "", t.textContent += "Hjælp til hunden" + newline + " ", t.textContent += "Hundemad", n
}
e.forEach(function (e) {
    return e.addEventListener("change", n)
});

var e = new dogFood();
document.getElementById("#dogFood").innerHTML = e; */