import {Game} from "./Game.js";

export class Stadium {
    constructor(venue, venueCity, homeTeams) {
        this.venue = venue;
        this.venueCity = venueCity;
        this.games = [];
        this.homeTeams = homeTeams;
    }

    PushGame(game) {
        this.games.push(game);
    }
}