class Game {
    constructor(homeTeam, awayTeam, round, venue, completed, date, time, ticketUrl) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.round = round;
        this.venue = venue;
        this.completed = completed;
        this.date = date;
        this.time = time;
        this.ticketUrl = ticketUrl;
    }
}

module.exports = {Game};