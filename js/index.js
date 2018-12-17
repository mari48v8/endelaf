'use strict'

// show / hide overlay
function myShowFunction() {
    var x = document.getElementById("panel");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    //document.getElementById("panel").style.display = "block";
}