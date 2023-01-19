(function(){

    "use strict";

    var cvs,ctx;
    var nodes = 6;
    var waves = [];
    var waveHeight = 60;
    var colours = ["#f80000","#00f800","#0000f8"];



// Initiator function

function init() {

cvs = document.getElementById("canvas");

ctx = cvs.getContext("2d");

resizeCanvas(cvs);



for (var i = 0; i < 3; i++) {

  waves.push(new waves(colours[i], 1, nodes));

}
update();

}
function update() {

var fill = window.getComputedStyle(document.querySelector("header"),null).getPropertyValue("background-color"); 

