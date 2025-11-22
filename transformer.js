import fs from "fs";
import util from "util";

const stadiumsKeys = {
    1: "Suncorp Stadium",
    2: "AAMI Park",
    3: "Go Media Stadium",
    4: "Sharks Stadium",
    5: "4 Pines Park",
    6: "Allianz Stadium",
    7: "Leichhardt Oval",
    8: "WIN Stadium",
    9: "Carrington Park",
    10: "GIO Stadium",
    11: "McDonald Jones Stadium",
    12: "Polytec Stadium",
    13: "CommBank Stadium",
    14: "Queensland Country Bank Stadium",
    15: "Accor Stadium",
    16: "Cbus Super Stadium",
    17: "Kayo Stadium",
    18: "Jubilee Oval",
    19: "Optus Stadium",
    20: "Campbelltown Sports Stadium",
    21: "TIO Stadium",
    22: "Sky Stadium",
    23: "One NZ Stadium",
    24: "Glen Willow Oval",
    25: "HBF Park",
}
const localNameKeys = {
    "Brisbane": "Broncos",
    "Canterbury Bankstown": "Bulldogs",
    "Canberra": "Raiders",
    "Cronulla": "Sharks",
    "Gold Coast": "Titans",
    "Manly Warringah": "Sea Eagles",
    "Melbourne": "Storm",
    "New Zealand": "Warriors",
    "Newcastle": "Knights",
    "North Queensland": "Cowboys",
    "Parramatta": "Eels",
    "Penrith": "Panthers",
    "South Sydney": "Rabbitohs",
    "St George Illawarra": "Dragons",
    "Sydney": "Roosters",
    "Wests": "Wests Tigers",
    "Redcliffe": "Dolphins"
}

let allGames = [];
for (let round = 1; round <= 27; round++) {
    const games = await getRound(round);
    allGames.push(...games);
}
// console.log(allGames);
const jsReadableGames = util.inspect(allGames, {
    depth: null,
    maxArrayLength: null,
    compact: true
});
fs.writeFileSync("gameData.json", jsReadableGames);

async function getRound(roundNumber) {
    const path = `https://www.nrl.com/draw//data?competition=111&round=${roundNumber}&season=2026`;
    try {
        const r = await fetch(path);
        const json = await r.json();

        const filtered = json.fixtures.map(fixture => ({
            homeTeam: {localName: Object.entries(localNameKeys).find(([k,v]) => v === fixture.homeTeam.nickName)?.[0], teamName: fixture.homeTeam.nickName === "Wests Tigers" ? "Tigers" : fixture.homeTeam.nickName},
            awayTeam: {localName: Object.entries(localNameKeys).find(([k,v]) => v === fixture.awayTeam.nickName)?.[0], teamName: fixture.awayTeam.nickName === "Wests Tigers" ? "Tigers" : fixture.awayTeam.nickName},
            round: roundNumber,
            stadiumId: parseInt(Object.entries(stadiumsKeys).find(([k,v]) => v === fixture.venue)?.[0]),
            date: new Date(fixture.clock.kickOffTimeLong).toLocaleDateString("en-AU", {
                month: "long",
                day: "numeric",
                timeZone: "Australia/Sydney"
            }),
            time: new Date(fixture.clock.kickOffTimeLong).toLocaleTimeString("en-AU", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                timeZone: "Australia/Sydney"
            })
        }))
        return filtered;
    }
    catch (e) {
        console.log(e);
    }
}