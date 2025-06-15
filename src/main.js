"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filters_js_1 = require("./classes/Filters.js");
var filter = new Filters_js_1.Filters();
//Change state filter on click
var state_dropdown = document.querySelector("#state");
if (state_dropdown) {
    state_dropdown.onchange = function () {
        filter.ChangeState(state_dropdown.value);
    };
}
//Change sort mode on the click of either button
var roundToggle = document.querySelector("#round-toggle");
var stadiumToggle = document.querySelector("#stadium-toggle");
console.log(roundToggle, stadiumToggle);
if (roundToggle && stadiumToggle) {
    roundToggle.onclick = function () {
        console.log("brah");
        filter.toggle = "round";
        filter.OnChange();
    };
    stadiumToggle.onclick = function () {
        filter.toggle = "venue";
        filter.OnChange();
    };
}
//Allow scrolling through the stadium and team containers if content overflows
var teamContainer = document.querySelector('.team-container');
var stadiumContainer = document.querySelector(".stadium-options-container");
if (teamContainer && stadiumContainer) {
    stadiumContainer.addEventListener('wheel', function (e) {
        e.preventDefault();
        stadiumContainer.scrollLeft += e.deltaY / 2;
    });
    teamContainer.addEventListener('wheel', function (e) {
        e.preventDefault();
        teamContainer.scrollLeft += e.deltaY / 2;
    });
}
