"use strict"
let x;

function btnRadio(x) {
    if (x == 0) {
        document.getElementById("btnSubmitDonation").style.display = "block";
        document.getElementById("swip").style.display = "none";
    } else {
        document.getElementById("btnSubmitDonation").style.display = "none";
        document.getElementById("swip").style.display = "block";
        return;
    }
}

function removeC(x) {
    let element = document.getElementById("mobile-pay-confirm");
    element.classList.remove("not-active");
}

function show1() {
    document.getElementById('div1').style.display = 'block';
    document.getElementById('div2').style.display = 'none';
    //element.classList.add("not-active");
}

function show2() {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'block';

}