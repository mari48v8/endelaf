"use strict";

/////////////////////////// Display value and counts //////////////////////////////////////

let results;

function checkbox() {
    //console.log("valg");
    let input = document.querySelectorAll("input[type=checkbox]");
    //checkedValue = "";
    //console.log(input);
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            //console.log("Pushed : " + input[i].value);
            results = input[i].value;
        }
    }
    let node = document.createElement("LI");
    let textnode = document.createTextNode(results);
    node.appendChild(textnode);
    document.getElementById("show").appendChild(node);
    document.getElementById("count").value = document.querySelectorAll("[type='checkbox']:checked").length;
}

/////////////////////////// Samlet pris //////////////////////////////////////

//Arrays
let productArray = new Array();
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

    let product = 0;
    let selectedProduct = document.querySelectorAll("input[type=checkbox]");

    for (let i = 0; i < selectedProduct.length; i++) {
        if (selectedProduct[i].checked) {
            product += productArray[selectedProduct[i].value] || 0;
        }
    }
    return product;
}

//Samlet pris
function getTotals() {
    let totalPrice = getProduct();
    let totalPriceDK = document.getElementById("totalPrice");
    totalPriceDK.innerText = "Samlet pris: " + "" + totalPrice + ",- Kr";
}

/////////////////////////// Samlet pris //////////////////////////////////////