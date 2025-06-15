const { Game } = require('./classes/Game.js');
const { Team } = require('./classes/Team.js');

const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());


app.get('/api', async (req, res) => {

    for (let i = 1; i <= 27; i++) {
        let path = "https://www.nrl.com/draw//data?competition=111&round=" + i + "&season=2025";
        let query = await fetch(path)
            .then((res) => res.json())
            .then((data) => {
                ConvertRoundToGames(data);
            })
    }
})

const testGame =     {
    isCurrentRound: false,
    roundTitle: 'Round 18',
    type: 'Match',
    matchMode: 'Pre',
    matchState: 'Upcoming',
    venue: 'Accor Stadium',
    venueCity: 'Sydney',
    matchCentreUrl: '/draw/nrl-premiership/2025/round-18/bulldogs-v-broncos/',
    callToAction: [Object],
    homeTeam: [Object],
    awayTeam: [Object],
    clock: [Object],
    videoProviders: [Array],
    secondaryCallToAction: [Object]
}
// ConvertToGame(testGame);

const globalData = {
    "stadiums":
        [
            {
                "venue": "Allianz Stadium",
                "state": "NSW",
                "city": "Sydney",
                "homeTeams": [
                    {
                        "localName": "Sydney",
                        "teamName": "Roosters"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Campbelltown Sports Stadium",
                "state": "NSW",
                "city": "Sydney",
                "homeTeams": [
                    {
                        "localName": "Wests",
                        "teamName": "Tigers"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Commbank Stadium",
                "state": "NSW",
                "city": "Sydney",
                "homeTeams": [
                    {
                        "localName": "Sydney",
                        "teamName": "Roosters"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Netstrata Jubilee Stadium",
                "state": "NSW",
                "city": "Sydney",
                "homeTeams": [
                    {
                        "localName": "St George Illawarra",
                        "teamName": "Dragons"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "4 Pines Park",
                "state": "NSW",
                "city": "Sydney",
                "homeTeams": [
                    {
                        "localName": "Manly Warringah",
                        "teamName": "Sea Eagles"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "AAMI Park",
                "state": "VIC",
                "city": "Melbourne",
                "homeTeams": [
                    {
                        "localName": "Melbourne",
                        "teamName": "Storm"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "McDonald Jones Stadium",
                "state": "NSW",
                "city": "Newcastle",
                "homeTeams": [
                    {
                        "localName": "Newcastle",
                        "teamName": "Knights"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Go Media Stadium",
                "state": "NZ",
                "city": "Auckland",
                "homeTeams": [
                    {
                        "localName": "New Zealand",
                        "teamName": "Warriors"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "WIN Stadium",
                "state": "NSW",
                "city": "Wollongong",
                "homeTeams": [
                    {
                        "localName": "St George Illawarra",
                        "teamName": "Dragons"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Queensland Country Bank Stadium",
                "state": "QLD",
                "city": "Townsville",
                "homeTeams": [
                    {
                        "localName": "North Queensland",
                        "teamName": "Cowboys"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "GIO Stadium",
                "state": "ACT",
                "city": "Canberra",
                "homeTeams": [
                    {
                        "localName": "Canberra",
                        "teamName": "Raiders"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Belmore Sports Ground",
                "state": "NSW",
                "city": "Sydney",
                "homeTeams": [
                    {
                        "localName": "Canterbury Bankstown",
                        "teamName": "Bulldogs"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Suncorp Stadium",
                "state": "QLD",
                "city": "Brisbane",
                "homeTeams": [
                    {
                        "localName": "Brisbane",
                        "teamName": "Broncos"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Sharks Stadium",
                "state": "NSW",
                "city": "Sydney",
                "homeTeams": [
                    {
                        "localName": "Cronulla",
                        "teamName": "Sharks"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Kayo Stadium",
                "state": "QLD",
                "city": "Redcliffe",
                "homeTeams": [
                    {
                        "localName": "Redcliffe",
                        "teamName": "Dolphins"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Cbus Super Stadium",
                "state": "QLD",
                "city": "Gold Coast",
                "homeTeams": [
                    {
                        "localName": "Gold Coast",
                        "teamName": "Titans"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Accor Stadium",
                "state": "NSW",
                "city": "Sydney",
                "homeTeams": [
                    {
                        "localName": "Canterbury Bankstown",
                        "teamName": "Bulldogs"
                    },
                    {
                        "localName": "South Sydney",
                        "teamName": "Rabbitohs"
                    }
                ],
                "games": [

                ]
            },





            {
                "venue": "Optus Stadium",
                "state": "WA",
                "city": "Perth",
                "homeTeams": [

                ],
                "games": [

                ]
            },
            {
                "venue": "TIO Stadium",
                "state": "NT",
                "city": "Darwin",
                "homeTeams": [

                ],
                "games": [

                ]
            },
            {
                "venue": "Apollo Projects Stadium",
                "state": "NZ",
                "city": "Christchurch",
                "homeTeams": [

                ],
                "games": [

                ]
            },
            {
                "venue": "Leichhardt Oval",
                "state": "NSW",
                "city": "Sydney",
                "homeTeams": [
                    {
                        "localName": "Wests",
                        "teamName": "Tigers"
                    }
                ],
                "games": [

                ]
            },
            {
                "venue": "Carrington Park",
                "state": "NSW",
                "city": "Bathurst",
                "homeTeams": [

                ],
                "games": [

                ]
            },
            {
                "venue": "Industree Group Stadium",
                "state": "NSW",
                "city": "Gosford",
                "homeTeams": [

                ],
                "games": [

                ]
            },
            {
                "venue": "HBF Park",
                "state": "WA",
                "city": "Perth",
                "homeTeams": [

                ],
                "games": [

                ]
            },
            {
                "venue": "Glen Willow Oval",
                "state": "NSW",
                "city": "Mudgee",
                "homeTeams": [

                ],
                "games": [

                ]
            }
        ]
}



async function ConvertRoundToGames(roundFixtures) {
    for (const fixture of roundFixtures["fixtures"]) {
        const game = ConvertToGame(fixture);
        for (const stadium of globalData["stadiums"]) {
            if (stadium.venue === game.venue) {
                stadium.games.push(game);
                break;
            }
        }
    }
    console.dir(globalData, {depth: null});
}

function ConvertToGame(data) {
    // console.log(data.roundTitle.split(" ")[1]);
    const date = new Date(data.clock.kickOffTimeLong);

    let hours = date.getHours();  // Local time
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    return new Game(
        new Team(LocalNameOf(data.homeTeam.nickName), data.homeTeam.nickName),
        new Team(LocalNameOf(data.awayTeam.nickName), data.awayTeam.nickName),
        parseInt(data.roundTitle.split(" ")[1]),
        data.venue,
        data.matchState !== "Upcoming",
        `${date.toLocaleString('default', {month: 'long'})} ${date.getDate()}`,
        `${hours}:${minutes} ${ampm}`,
        data.secondaryCallToAction.url
    );
}

function LocalNameOf(teamNickname) {
    switch (teamNickname) {
        case "Broncos": return "Brisbane";
        case "Bulldogs": return "Canterbury Bankstown";
        case "Raiders": return "Canberra";
        case "Sharks": return "Cronulla";
        case "Titans": return "Gold Coast";
        case "Sea Eagles": return "Manly Warringah";
        case "Storm": return "Melbourne";
        case "Warriors": return "New Zealand";
        case "Knights": return "Newcastle";
        case "Cowboys": return "North Queensland";
        case "Eels": return "Parramatta";
        case "Panthers": return "Penrith";
        case "Dragons": return "St George Illawarra";
        case "Rabbitohs": return "South Sydney";
        case "Roosters": return "Sydney";
        case "Wests Tigers": return "Wests";
        case "Dolphins": return "Redcliffe";
    }
}


//Open server on localhost port 8080
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})