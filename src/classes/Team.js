class Team {
    constructor(localName, teamName) {
        this.localName = localName;
        this.teamName = teamName === "Wests Tigers" ? "Tigers" : teamName;
    }
}
module.exports = {Team};