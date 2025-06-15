import {Filters} from "./classes/Filters.js";

const filter = new Filters();

//Change state filter on click
const state_dropdown = document.querySelector<HTMLSelectElement>("#state");
if (state_dropdown) {
    state_dropdown.onchange = () => {
        filter.ChangeState(state_dropdown.value);
    }
}

//Change filter to show only upcoming games when selected
const upcomingCheckbox = document.querySelector<HTMLInputElement>("#upcomingCb");
if (upcomingCheckbox) {
    upcomingCheckbox.onclick = () => {
        filter.upcoming = upcomingCheckbox.checked;
        filter.OnChange();
    }
}

//Change sort mode on the click of either button
const roundToggle = document.querySelector<HTMLButtonElement>("#round-toggle");
const stadiumToggle = document.querySelector<HTMLButtonElement>("#stadium-toggle");
console.log(roundToggle, stadiumToggle);
if (roundToggle && stadiumToggle) {
    roundToggle.onclick = () => {
        console.log("brah");
        filter.toggle = "round";
        filter.OnChange();
    }
    stadiumToggle.onclick = () => {
        filter.toggle = "venue";
        filter.OnChange();
    }
}

//Allow scrolling through the stadium and team containers if content overflows
const teamContainer = document.querySelector('.team-container');
const stadiumContainer = document.querySelector(".stadium-options-container");
if (teamContainer && stadiumContainer) {
    stadiumContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        stadiumContainer.scrollLeft += e.deltaY/2;
    });
    teamContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        teamContainer.scrollLeft += e.deltaY/2;
    });
}

//Rerun the filter when the page loads
window.addEventListener('load', () => {
    filter.OnChange();
})
