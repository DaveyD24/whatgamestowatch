"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filters = void 0;
var Elements_js_1 = require("./Elements.js");
var Data_js_1 = require("./Data.js");
var Filters = /** @class */ (function () {
    function Filters() {
        this.state = "NSW";
        this.teams = [];
        this.stadiums = [];
        this.toggle = "round";
    }
    Filters.prototype.ChangeState = function (state) {
        this.state = state;
        this.stadiums = [];
        this.OnChange();
    };
    Filters.prototype.AddTeams = function (teams) {
        for (var _i = 0, teams_1 = teams; _i < teams_1.length; _i++) {
            var team = teams_1[_i];
            this.teams.push(team);
        }
        this.OnChange();
    };
    Filters.prototype.RemoveTeams = function (teams) {
        for (var _i = 0, teams_2 = teams; _i < teams_2.length; _i++) {
            var team = teams_2[_i];
            this.teams.splice(this.teams.indexOf(team), 1);
        }
        this.OnChange();
    };
    Filters.prototype.AddStadiums = function (stadiums) {
        for (var _i = 0, stadiums_1 = stadiums; _i < stadiums_1.length; _i++) {
            var stadium = stadiums_1[_i];
            this.stadiums.push(stadium);
        }
        this.OnChange();
    };
    Filters.prototype.RemoveStadiums = function (stadiums) {
        for (var _i = 0, stadiums_2 = stadiums; _i < stadiums_2.length; _i++) {
            var stadium = stadiums_2[_i];
            this.stadiums.splice(this.stadiums.indexOf(stadium), 1);
        }
        this.OnChange();
    };
    Filters.prototype.ToString = function () {
        return "".concat(this.state, "\n").concat(this.teams, "\n").concat(this.stadiums);
    };
    Filters.prototype.OnChange = function () {
        var _this = this;
        console.log(this.ToString());
        var teamContainer = document.querySelector(".team-container");
        if (teamContainer === null) {
            return;
        }
        teamContainer.innerHTML = "";
        var _loop_1 = function (team) {
            var element = (0, Elements_js_1.DocumentElement)({
                elementType: "div",
                classList: ["team-option"],
                id: team.teamName,
                children: [
                    (0, Elements_js_1.DocumentElement)({ elementType: "div", className: "logo", children: [
                            (0, Elements_js_1.DocumentElement)({ elementType: "img", attribute: { name: "src", value: "image/".concat(team.teamName, ".png") }, })
                        ] })
                ],
                listener: { event: "click", callBack: function () {
                        if (_this.teams.includes(team.teamName)) {
                            _this.RemoveTeams([team.teamName]);
                        }
                        else {
                            _this.AddTeams([team.teamName]);
                        }
                    } }
            });
            if (this_1.teams.includes(team.teamName)) {
                element.classList.add("team-selected");
            }
            else {
                element.classList.remove("team-selected");
            }
            teamContainer === null || teamContainer === void 0 ? void 0 : teamContainer.appendChild(element);
        };
        var this_1 = this;
        for (var _i = 0, allTeams_1 = Data_js_1.allTeams; _i < allTeams_1.length; _i++) {
            var team = allTeams_1[_i];
            _loop_1(team);
        }
        var stadiumContainer = document.querySelector(".stadium-options-container");
        if (stadiumContainer === null) {
            return;
        }
        stadiumContainer.innerHTML = "";
        var _loop_2 = function (stadium) {
            var element = (0, Elements_js_1.DocumentElement)({
                elementType: "div",
                className: "stadium-option",
                children: [
                    (0, Elements_js_1.DocumentElement)({
                        elementType: "div",
                        classList: ["bar-overlay", "stadium-unselected"],
                        children: [
                            (0, Elements_js_1.DocumentElement)({ elementType: "div", className: "circle-large", children: [
                                    (0, Elements_js_1.DocumentElement)({ elementType: "div", className: "circle-small" })
                                ] })
                        ]
                    }),
                    (0, Elements_js_1.DocumentElement)({
                        elementType: "div",
                        className: "stadium-details",
                        children: [
                            (0, Elements_js_1.DocumentElement)({ elementType: "h5", innerText: "".concat(stadium.venue) }),
                            (0, Elements_js_1.DocumentElement)({ elementType: "p", innerText: "".concat(stadium.city) })
                        ]
                    }),
                    (0, Elements_js_1.DocumentElement)({ elementType: "p", className: "capacity", innerText: "45K" })
                ],
                listener: {
                    event: "click",
                    callBack: function () {
                        if (_this.stadiums.includes(stadium.venue)) {
                            _this.RemoveStadiums([stadium.venue]);
                        }
                        else {
                            _this.AddStadiums([stadium.venue]);
                        }
                    }
                }
            });
            if (this_2.stadiums.includes(stadium.venue)) {
                element.children[0].classList.remove("stadium-unselected");
                element.children[0].classList.add("stadium-selected");
            }
            else {
                element.children[0].classList.remove("stadium-selected");
                element.children[0].classList.add("stadium-unselected");
            }
            stadiumContainer === null || stadiumContainer === void 0 ? void 0 : stadiumContainer.appendChild(element);
        };
        var this_2 = this;
        for (var _a = 0, _b = GetStadiumsByTeamsAndState(this.state, this.teams); _a < _b.length; _a++) {
            var stadium = _b[_a];
            _loop_2(stadium);
        }
        var gamesSection = document.querySelector(".games-section");
        if (gamesSection === null) {
            return;
        }
        var games = document.querySelectorAll(".game-collection");
        games.forEach(function (x) { return gamesSection.removeChild(x); });
        for (var _c = 0, _d = Object.entries(groupBy(GetGames(this.state, this.teams, this.stadiums), function (game) { return _this.toggle === "round" ? game.round : game.venue; })); _c < _d.length; _c++) {
            var _e = _d[_c], key = _e[0], collection = _e[1];
            var gameCollection = (0, Elements_js_1.DocumentElement)({
                elementType: "div",
                className: "game-collection"
            });
            gameCollection.appendChild((0, Elements_js_1.DocumentElement)({ elementType: "h3", innerText: this.toggle === "round" ? "Round ".concat(key) : key }));
            var games_1 = (0, Elements_js_1.DocumentElement)({ elementType: "div", className: "games" });
            for (var _f = 0, collection_1 = collection; _f < collection_1.length; _f++) {
                var game = collection_1[_f];
                var element = (0, Elements_js_1.DocumentElement)({
                    elementType: "div",
                    className: "game",
                    children: [
                        (0, Elements_js_1.DocumentElement)({
                            elementType: "div",
                            className: "top-bar",
                            innerText: "".concat(game.date, " ").concat(game.time)
                        }),
                        (0, Elements_js_1.DocumentElement)({
                            elementType: "div",
                            className: "main-game",
                            children: [
                                (0, Elements_js_1.DocumentElement)({ elementType: "p", innerText: "".concat(game.homeTeam.localName, " ").concat(game.homeTeam.teamName) }),
                                (0, Elements_js_1.DocumentElement)({ elementType: "p", innerText: "V" }),
                                (0, Elements_js_1.DocumentElement)({ elementType: "p", innerText: "".concat(game.awayTeam.localName, " ").concat(game.awayTeam.teamName) })
                            ]
                        }),
                        (0, Elements_js_1.DocumentElement)({
                            elementType: "div",
                            className: "image-overlays",
                            children: [
                                (0, Elements_js_1.DocumentElement)({ elementType: "img", id: "left", attribute: { name: "src", value: "image/facing/".concat(game.homeTeam.teamName, "Right.png") } }),
                                (0, Elements_js_1.DocumentElement)({ elementType: "img", id: "right", attribute: { name: "src", value: "image/facing/".concat(game.awayTeam.teamName, "Left.png") } })
                            ]
                        }),
                        (0, Elements_js_1.DocumentElement)({
                            elementType: "div",
                            className: "info-box",
                            children: [
                                (0, Elements_js_1.DocumentElement)({
                                    elementType: "div",
                                    className: "info-stadium",
                                    children: [(0, Elements_js_1.DocumentElement)({ elementType: "p", id: "stadium-header", innerText: game.venue })]
                                }),
                                (0, Elements_js_1.DocumentElement)({
                                    elementType: "button",
                                    id: "ticket-btn",
                                    innerText: "Tickets ->",
                                    listener: { event: "click", callBack: function () { console.log("open ticket tab lol"); } }
                                })
                            ]
                        })
                    ]
                });
                games_1.appendChild(element);
                gameCollection.appendChild(games_1);
            }
            gamesSection === null || gamesSection === void 0 ? void 0 : gamesSection.appendChild(gameCollection);
        }
    };
    return Filters;
}());
exports.Filters = Filters;
function GetStadiumsByTeamsAndState(state, teams) {
    var stadiums = [];
    for (var _i = 0, _a = Data_js_1.globalData["stadiums"]; _i < _a.length; _i++) {
        var stadium = _a[_i];
        if (stadium.state === state) {
            for (var _b = 0, teams_3 = teams; _b < teams_3.length; _b++) {
                var team = teams_3[_b];
                if (stadium.teamsPlayed.includes(team)) {
                    stadiums.push(stadium);
                    break;
                }
            }
        }
    }
    return stadiums;
}
function GetGames(state, teams, stadiums) {
    var games = [];
    for (var _i = 0, _a = Data_js_1.globalData["stadiums"]; _i < _a.length; _i++) {
        var stadium = _a[_i];
        if (stadiums.includes(stadium.venue)) {
            if (stadium.state === state) {
                for (var _b = 0, _c = stadium.games; _b < _c.length; _b++) {
                    var game = _c[_b];
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
    return array.reduce(function (result, item) {
        var key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}
