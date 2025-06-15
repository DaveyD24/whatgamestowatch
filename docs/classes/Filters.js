import { DocumentElement } from "./Elements.js";
import { allTeams, globalData } from "./Data.js";
export class Filters {
    constructor() {
        this.state = "NSW";
        this.teams = [];
        this.stadiums = [];
        this.upcoming = true;
        this.toggle = "round";
    }
    ChangeState(state) {
        this.state = state;
        this.stadiums = [];
        this.OnChange();
    }
    AddTeams(teams) {
        for (const team of teams) {
            this.teams.push(team);
        }
        this.OnChange();
    }
    RemoveTeams(teams) {
        for (const team of teams) {
            this.teams.splice(this.teams.indexOf(team), 1);
        }
        this.OnChange();
    }
    AddStadiums(stadiums) {
        for (const stadium of stadiums) {
            this.stadiums.push(stadium);
        }
        this.OnChange();
    }
    RemoveStadiums(stadiums) {
        for (const stadium of stadiums) {
            this.stadiums.splice(this.stadiums.indexOf(stadium), 1);
        }
        this.OnChange();
    }
    ToString() {
        return `${this.state}\n${this.teams}\n${this.stadiums}`;
    }
    OnChange() {
        console.log(this.ToString());
        const teamContainer = document.querySelector(".team-container");
        if (teamContainer === null) {
            return;
        }
        teamContainer.innerHTML = "";
        for (const team of allTeams) {
            const element = DocumentElement({
                elementType: "div",
                classList: ["team-option"],
                id: team.teamName,
                children: [
                    DocumentElement({ elementType: "div", className: "logo", children: [
                            DocumentElement({ elementType: "img", attribute: { name: "src", value: `image/${team.teamName}.png` }, })
                        ] })
                ],
                listener: { event: "click", callBack: () => {
                        if (this.teams.includes(team.teamName)) {
                            this.RemoveTeams([team.teamName]);
                        }
                        else {
                            this.AddTeams([team.teamName]);
                        }
                    } }
            });
            if (this.teams.includes(team.teamName)) {
                element.classList.add("team-selected");
            }
            else {
                element.classList.remove("team-selected");
            }
            teamContainer === null || teamContainer === void 0 ? void 0 : teamContainer.appendChild(element);
        }
        const stadiumContainer = document.querySelector(".stadium-options-container");
        if (stadiumContainer === null) {
            return;
        }
        stadiumContainer.innerHTML = "";
        for (const stadium of GetStadiumsByTeamsAndState(this.state, this.teams)) {
            const element = DocumentElement({
                elementType: "div",
                className: "stadium-option",
                children: [
                    DocumentElement({
                        elementType: "div",
                        classList: ["bar-overlay", "stadium-unselected"],
                        children: [
                            DocumentElement({ elementType: "div", className: "circle-large", children: [
                                    DocumentElement({ elementType: "div", className: "circle-small" })
                                ] })
                        ]
                    }),
                    DocumentElement({
                        elementType: "div",
                        className: "stadium-details",
                        children: [
                            DocumentElement({ elementType: "h5", innerText: `${stadium.venue}` }),
                            DocumentElement({ elementType: "p", innerText: `${stadium.city}` })
                        ]
                    }),
                    DocumentElement({ elementType: "p", className: "capacity", innerText: `${stadium.capacity}K` })
                ],
                listener: {
                    event: "click",
                    callBack: () => {
                        if (this.stadiums.includes(stadium.venue)) {
                            this.RemoveStadiums([stadium.venue]);
                        }
                        else {
                            this.AddStadiums([stadium.venue]);
                        }
                    }
                }
            });
            if (this.stadiums.includes(stadium.venue)) {
                element.children[0].classList.remove("stadium-unselected");
                element.children[0].classList.add("stadium-selected");
            }
            else {
                element.children[0].classList.remove("stadium-selected");
                element.children[0].classList.add("stadium-unselected");
            }
            stadiumContainer === null || stadiumContainer === void 0 ? void 0 : stadiumContainer.appendChild(element);
        }
        const gamesSection = document.querySelector(".games-section");
        if (gamesSection === null) {
            return;
        }
        const games = document.querySelectorAll(".game-collection");
        games.forEach(x => gamesSection.removeChild(x));
        const roundToggle = document.querySelector("#round-toggle");
        const stadiumToggle = document.querySelector("#stadium-toggle");
        if (roundToggle === null || stadiumToggle === null) {
            return;
        }
        if (this.toggle === "round") {
            roundToggle.classList.add("toggle-selected");
            roundToggle.classList.remove("toggle-unselected");
            stadiumToggle.classList.remove("toggle-selected");
            stadiumToggle.classList.add("toggle-unselected");
        }
        else {
            stadiumToggle.classList.add("toggle-selected");
            stadiumToggle.classList.remove("toggle-unselected");
            roundToggle.classList.remove("toggle-selected");
            roundToggle.classList.add("toggle-unselected");
        }
        for (const [key, collection] of Object.entries(groupBy(GetGames(this.state, this.teams, this.stadiums, this.upcoming), game => this.toggle === "round" ? game.round : game.venue))) {
            const gameCollection = DocumentElement({
                elementType: "div",
                className: "game-collection"
            });
            gameCollection.appendChild(DocumentElement({ elementType: "h3", innerText: this.toggle === "round" ? `Round ${key}` : key }));
            const games = DocumentElement({ elementType: "div", className: "games" });
            for (const game of collection) {
                const element = DocumentElement({
                    elementType: "div",
                    className: "game",
                    children: [
                        DocumentElement({
                            elementType: "div",
                            className: "top-bar",
                            innerText: `${game.date} ${game.time}`
                        }),
                        DocumentElement({
                            elementType: "div",
                            className: "main-game",
                            children: [
                                DocumentElement({ elementType: "p", innerText: `${game.homeTeam.localName} ${game.homeTeam.teamName}` }),
                                DocumentElement({ elementType: "p", innerText: "V" }),
                                DocumentElement({ elementType: "p", innerText: `${game.awayTeam.localName} ${game.awayTeam.teamName}` })
                            ]
                        }),
                        DocumentElement({
                            elementType: "div",
                            className: "image-overlays",
                            children: [
                                DocumentElement({ elementType: "img", id: "left", attribute: { name: "src", value: `image/facing/${game.homeTeam.teamName}Right.png` } }),
                                DocumentElement({ elementType: "img", id: "right", attribute: { name: "src", value: `image/facing/${game.awayTeam.teamName}Left.png` } })
                            ]
                        }),
                        DocumentElement({
                            elementType: "div",
                            className: "info-box",
                            children: [
                                DocumentElement({
                                    elementType: "div",
                                    className: "info-stadium",
                                    children: [DocumentElement({ elementType: "p", id: "stadium-header", innerText: game.venue })]
                                }),
                                DocumentElement({
                                    elementType: "button",
                                    id: "ticket-btn",
                                    innerText: "Tickets ->",
                                    // children: [DocumentElement({elementType: "a", className:"ticketAnchor"})],
                                    listener: { event: "click", callBack: () => { window.open(game.ticketUrl, "_blank").focus(); } }
                                })
                            ]
                        })
                    ]
                });
                games.appendChild(element);
                gameCollection.appendChild(games);
            }
            gamesSection === null || gamesSection === void 0 ? void 0 : gamesSection.appendChild(gameCollection);
        }
    }
}
function GetStadiumsByTeamsAndState(state, teams) {
    const stadiums = [];
    for (const stadium of globalData["stadiums"]) {
        if (stadium.state === state) {
            for (const team of teams) {
                if (stadium.teamsPlayed.includes(team)) {
                    stadiums.push(stadium);
                    break;
                }
            }
        }
    }
    return stadiums;
}
function GetGames(state, teams, stadiums, upcoming) {
    const games = [];
    for (const stadium of globalData["stadiums"]) {
        if (stadiums.includes(stadium.venue)) {
            if (stadium.state === state) {
                for (const game of stadium.games) {
                    if (game.completed) {
                        if (upcoming) {
                            continue;
                        }
                    }
                    if (teams.includes(game.homeTeam.teamName) || teams.includes(game.awayTeam.teamName)) {
                        games.push(game);
                    }
                }
            }
        }
    }
    return games;
}
//TODO Refactor this
function groupBy(array, keyFn) {
    return array.reduce((result, item) => {
        const key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}
