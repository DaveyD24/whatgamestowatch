export const allTeams = [
    {localName: "Brisbane", teamName: "Broncos"},
    {localName: "Canterbury Bankstown", teamName: "Bulldogs"},
    {localName: "Canberra", teamName: "Raiders"},
    {localName: "Cronulla", teamName: "Sharks"},
    {localName: "Gold Coast", teamName: "Titans"},
    {localName: "Manly Warringah", teamName: "Sea Eagles"},
    {localName: "Melbourne", teamName: "Storm"},
    {localName: "New Zealand", teamName: "Warriors"},
    {localName: "North Queensland", teamName: "Cowboys"},
    {localName: "Newcastle", teamName: "Knights"},
    {localName: "Parramatta", teamName: "Eels"},
    {localName: "Penrith", teamName: "Panthers"},
    {localName: "St George Illawarra", teamName: "Dragons"},
    {localName: "South Sydney", teamName: "Rabbitohs"},
    {localName: "Sydney", teamName: "Roosters"},
    {localName: "Wests", teamName: "Tigers"},
    {localName: "Redcliffe", teamName: "Dolphins"},
]
export const globalData =  {stadiums: [
        {
            venue: 'Allianz Stadium',
            state: 'NSW',
            city: 'Sydney',
            capacity: 46,
            homeTeams: [ { localName: 'Sydney', teamName: 'Roosters' } ],
            teamsPlayed: ["Roosters", "Broncos", "Titans", "Panthers", "Raiders", "Cowboys", "Bulldogs", "Dragons", "Tigers", "Storm", "Sea Eagles", "Rabbitohs", "Eels"],
            games: [
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 1,
                    venue: 'Allianz Stadium',
                    completed: true,
                    date: 'March 6',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/roosters-v-broncos/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 4,
                    venue: 'Allianz Stadium',
                    completed: true,
                    date: 'March 28',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-4/roosters-v-titans/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 7,
                    venue: 'Allianz Stadium',
                    completed: true,
                    date: 'April 19',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-7/roosters-v-panthers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 8,
                    venue: 'Allianz Stadium',
                    completed: true,
                    date: 'April 25',
                    time: '4:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-8/roosters-v-dragons/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 13,
                    venue: 'Allianz Stadium',
                    completed: true,
                    date: 'June 1',
                    time: '6:15 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-13/roosters-v-raiders/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 16,
                    venue: 'Allianz Stadium',
                    completed: false,
                    date: 'June 22',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-16/roosters-v-cowboys/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 18,
                    venue: 'Allianz Stadium',
                    completed: false,
                    date: 'July 6',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-18/roosters-v-wests-tigers/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 21,
                    venue: 'Allianz Stadium',
                    completed: false,
                    date: 'July 24',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-21/roosters-v-storm/#tab--stats'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 21,
                    venue: 'Allianz Stadium',
                    completed: false,
                    date: 'July 27',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-21/bulldogs-v-sea-eagles/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    round: 24,
                    venue: 'Allianz Stadium',
                    completed: false,
                    date: 'August 15',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-24/roosters-v-bulldogs/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 24,
                    venue: 'Allianz Stadium',
                    completed: false,
                    date: 'August 16',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-24/rabbitohs-v-eels/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 24,
                    venue: 'Allianz Stadium',
                    completed: false,
                    date: 'August 17',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-24/wests-tigers-v-sea-eagles/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 27,
                    venue: 'Allianz Stadium',
                    completed: false,
                    date: 'September 5',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-27/roosters-v-rabbitohs/#tab--stats'
                }
            ]
        },
        {
            venue: 'Campbelltown Sports Stadium',
            state: 'NSW',
            city: 'Sydney',
            capacity: 18,
            homeTeams: [ { localName: 'Wests', teamName: 'Tigers' } ],
            teamsPlayed: ["Tigers", "Knights", "Warriors", "Rabbitohs", "Raiders"],
            games: [
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 1,
                    venue: 'Campbelltown Sports Stadium',
                    completed: true,
                    date: 'March 7',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 4,
                    venue: 'Campbelltown Sports Stadium',
                    completed: true,
                    date: 'March 30',
                    time: '6:15 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-4/wests-tigers-v-warriors/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 11,
                    venue: 'Campbelltown Sports Stadium',
                    completed: true,
                    date: 'May 18',
                    time: '6:15 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-11/wests-tigers-v-rabbitohs/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 16,
                    venue: 'Campbelltown Sports Stadium',
                    completed: false,
                    date: 'June 20',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-16/wests-tigers-v-raiders/#tab--stats'
                }
            ]
        },
        {
            venue: 'Commbank Stadium',
            state: 'NSW',
            city: 'Sydney',
            capacity: 30,
            homeTeams: [ { localName: 'Parramatta', teamName: 'Eels' },
                { localName: 'Penrith', teamName: 'Panthers' },
                { localName: 'Wests', teamName: 'Tigers' }
            ],
            teamsPlayed: ["Rabbitohs", "Dolphins", "Panthers", "Roosters", "Eels", "Tigers", "Bulldogs", "Cowboys", "Dragons", "Sea Eagles", "Titans", "Storm", "Knights"],
            games: [
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 1,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'March 7',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 2,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'March 14',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 2,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'March 16',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Canterbury Bankstown', teamName: 'Bulldogs' },
                    round: 3,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'March 23',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 5,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'April 4',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'St George Illawarra', teamName: 'Dragons' },
                    round: 5,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'April 5',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 7,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'April 21',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 8,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'April 26',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 10,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'May 8',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 12,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'May 23',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 13,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'June 1',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 14,
                    venue: 'CommBank Stadium',
                    completed: true,
                    date: 'June 8',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/wests-tigers-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 16,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'June 22',
                    time: '6:15 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-16/eels-v-titans/'
                },
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'Canterbury Bankstown', teamName: 'Bulldogs' },
                    round: 17,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'June 26',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-17/panthers-v-bulldogs/'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 19,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'July 12',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-19/eels-v-panthers/'
                },
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 20,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'July 18',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-20/panthers-v-rabbitohs/'
                },
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 21,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'July 26',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-21/panthers-v-wests-tigers/'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 22,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'July 31',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-22/eels-v-storm/'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'Canterbury Bankstown', teamName: 'Bulldogs' },
                    round: 22,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'August 3',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-22/wests-tigers-v-bulldogs/'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round:23,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'August 10',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-23/eels-v-cowboys/'
                },
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 24,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'August 14',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-24/panthers-v-storm/'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 25,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'August 23',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-25/eels-v-roosters/'
                },
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 27,
                    venue: 'CommBank Stadium',
                    completed: false,
                    date: 'September 7',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-27/eels-v-knights/'
                }
            ]
        },
        {
            venue: 'Netstrata Jubilee Stadium',
            state: 'NSW',
            city: 'Sydney',
            capacity: 21,
            homeTeams: [ { localName: 'St George Illawarra', teamName: 'Dragons' } ],
            teamsPlayed: ["Dragons", "Bulldogs", "Storm", "Knights", "Roosters", "Sharks", "Sea Eagles"],
            games: [
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    round: 1,
                    venue: 'Netstrata Jubilee Stadium',
                    completed: true,
                    date: 'March 8',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/dragons-v-bulldogs/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  {
                        localName: 'Melbourne',
                        teamName: 'Storm'
                    },
                    round: 4,
                    venue: 'Netstrata Jubilee Stadium',
                    completed: true,
                    date: 'March 29',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/dragons-v-bulldogs/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  {
                        localName: 'Newcastle',
                        teamName: 'Knights'
                    },
                    round: 13,
                    venue: 'Netstrata Jubilee Stadium',
                    completed: true,
                    date: 'May 30',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/dragons-v-bulldogs/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  {
                        localName: 'Sydney',
                        teamName: 'Roosters'
                    },
                    round: 19,
                    venue: 'Netstrata Jubilee Stadium',
                    completed: false,
                    date: 'July 12',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-19/dragons-v-roosters/'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  {
                        localName: 'Cronulla',
                        teamName: 'Sharks'
                    },
                    round: 23,
                    venue: 'Netstrata Jubilee Stadium',
                    completed: false,
                    date: 'August 9',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-23/dragons-v-sharks/'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  {
                        localName: 'Manly Warringah',
                        teamName: 'Sea Eagles'
                    },
                    round: 26,
                    venue: 'Netstrata Jubilee Stadium',
                    completed: false,
                    date: 'August 30',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-26/dragons-v-sea-eagles/'
                }
            ]
        },
        {
            venue: '4 Pines Park',
            state: 'NSW',
            city: 'Sydney',
            capacity: 18,
            homeTeams: [ { localName: 'Manly Warringah', teamName: 'Sea Eagles' } ],
            teamsPlayed: ["Sea Eagles", "Cowboys", "Raiders", "Eels", "Storm", "Dragons", "Sharks", "Broncos", "Tigers", "Rabbitohs", "Roosters", "Dolphins", "Warriors"],
            games: [
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 1,
                    venue: '4 Pines Park',
                    completed: true,
                    date: 'March 8',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/sea-eagles-v-cowboys/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 3,
                    venue: '4 Pines Park',
                    completed: true,
                    date: 'March 23',
                    time: '6:15 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-3/sea-eagles-v-raiders/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 4,
                    venue: '4 Pines Park',
                    completed: true,
                    date: 'March 30',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-4/sea-eagles-v-eels/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 5,
                    venue: '4 Pines Park',
                    completed: true,
                    date: 'April 6',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-5/sea-eagles-v-storm/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 7,
                    venue: '4 Pines Park',
                    completed: true,
                    date: 'April 17',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-7/sea-eagles-v-dragons/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 10,
                    venue: '4 Pines Park',
                    completed: true,
                    date: 'May 11',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-10/sea-eagles-v-sharks/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 13,
                    venue: '4 Pines Park',
                    completed: true,
                    date: 'May 31',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-13/sea-eagles-v-broncos/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 17,
                    venue: '4 Pines Park',
                    completed: false,
                    date: 'June 27',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-17/sea-eagles-v-wests-tigers/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 18,
                    venue: '4 Pines Park',
                    completed: false,
                    date: 'July 6',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-18/sea-eagles-v-rabbitohs/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 22,
                    venue: '4 Pines Park',
                    completed: false,
                    date: 'August 2',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-22/sea-eagles-v-roosters/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 25,
                    venue: '4 Pines Park',
                    completed: false,
                    date: 'August 23',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-25/sea-eagles-v-dolphins/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 27,
                    venue: '4 Pines Park',
                    completed: false,
                    date: 'September 5',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-27/sea-eagles-v-warriors/#tab--stats'
                }
            ]
        },
        {
            venue: 'AAMI Park',
            state: 'VIC',
            city: 'Melbourne',
            capacity: 30,
            homeTeams: [ { localName: 'Melbourne', teamName: 'Storm' } ],
            teamsPlayed: ["Storm", "Eels", "Panthers", "Warriors", "Rabbitohs", "Tigers", "Cowboys", "Sharks", "Sea Eagles", "Broncos", "Bulldogs", "Roosters"],
            games: [
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 1,
                    venue: 'AAMI Park',
                    completed: true,
                    date: 'March 9',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-1/storm-v-eels/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 3,
                    venue: 'AAMI Park',
                    completed: true,
                    date: 'March 20',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-3/storm-v-panthers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 6,
                    venue: 'AAMI Park',
                    completed: true,
                    date: 'April 13',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-6/storm-v-warriors/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 8,
                    venue: 'AAMI Park',
                    completed: true,
                    date: 'April 25',
                    time: '8:10 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-8/storm-v-rabbitohs/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 10,
                    venue: 'AAMI Park',
                    completed: true,
                    date: 'May 11',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-10/storm-v-wests-tigers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 14,
                    venue: 'AAMI Park',
                    completed: true,
                    date: 'June 6',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-14/storm-v-cowboys/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 17,
                    venue: 'AAMI Park',
                    completed: false,
                    date: 'June 29',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-17/storm-v-sharks/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 20,
                    venue: 'AAMI Park',
                    completed: false,
                    date: 'July 19',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-20/storm-v-sea-eagles/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 23,
                    venue: 'AAMI Park',
                    completed: false,
                    date: 'August 7',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-23/storm-v-broncos/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    round: 25,
                    venue: 'AAMI Park',
                    completed: false,
                    date: 'August 22',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-25/storm-v-bulldogs/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 26,
                    venue: 'AAMI Park',
                    completed: false,
                    date: 'August 29',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-26/storm-v-roosters/#tab--stats'
                }
            ]
        },
        {
            venue: 'McDonald Jones Stadium',
            state: 'NSW',
            city: 'Newcastle',
            capacity: 33,
            homeTeams: [ { localName: 'Newcastle', teamName: 'Knights' } ],
            teamsPlayed: ["Knights", "Dolphins", "Tigers", "Sharks", "Titans", "Eels", "Sea Eagles", "Roosters", "Raiders", "Storm", "Warriors", "Panthers", "Broncos"],
            games: [
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 2,
                    venue: 'McDonald Jones Stadium',
                    completed: true,
                    date: 'March 13',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-2/knights-v-dolphins/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 6,
                    venue: 'McDonald Jones Stadium',
                    completed: true,
                    date: 'April 13',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-6/knights-v-wests-tigers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 7,
                    venue: 'McDonald Jones Stadium',
                    completed: true,
                    date: 'April 20',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-7/knights-v-sharks/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 10,
                    venue: 'McDonald Jones Stadium',
                    completed: true,
                    date: 'May 9',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-10/knights-v-titans/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 11,
                    venue: 'McDonald Jones Stadium',
                    completed: true,
                    date: 'May 16',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-11/knights-v-eels/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 14,
                    venue: 'McDonald Jones Stadium',
                    completed: true,
                    date: 'June 5',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-14/knights-v-sea-eagles/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 15,
                    venue: 'McDonald Jones Stadium',
                    completed: false,
                    date: 'June 14',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.ticketmaster.com.au/event/13006194A3B91063?utm_source=nrl&utm_medium=network&utm_campaign=NRL25'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 17,
                    venue: 'McDonald Jones Stadium',
                    completed: false,
                    date: 'June 27',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-17/knights-v-raiders/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 19,
                    venue: 'McDonald Jones Stadium',
                    completed: false,
                    date: 'July 12',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-19/knights-v-storm/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 20,
                    venue: 'McDonald Jones Stadium',
                    completed: false,
                    date: 'July 20',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-20/knights-v-warriors/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 23,
                    venue: 'McDonald Jones Stadium',
                    completed: false,
                    date: 'August 8',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-23/knights-v-panthers/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 25,
                    venue: 'McDonald Jones Stadium',
                    completed: false,
                    date: 'August 24',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-25/knights-v-broncos/#tab--stats'
                }
            ]
        },
        {
            venue: 'Go Media Stadium',
            state: 'NZ',
            city: 'Auckland',
            capacity: 25,
            homeTeams: [ { localName: 'New Zealand', teamName: 'Warriors' } ],
            teamsPlayed: ["Warriors", "Sea Eagles", "Roosters", "Broncos", "Raiders", "Panthers", "Tigers", "Titans", "Dolphins", "Dragons", "Eels"],
            games: [
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 2,
                    venue: 'Go Media Stadium',
                    completed: true,
                    date: 'March 14',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-2/warriors-v-sea-eagles/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 3,
                    venue: 'Go Media Stadium',
                    completed: true,
                    date: 'March 21',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-3/warriors-v-roosters/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 7,
                    venue: 'Go Media Stadium',
                    completed: true,
                    date: 'April 19',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-7/warriors-v-broncos/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 12,
                    venue: 'Go Media Stadium',
                    completed: true,
                    date: 'May 25',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-12/warriors-v-raiders/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 16,
                    venue: 'Go Media Stadium',
                    completed: false,
                    date: 'June 21',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-16/warriors-v-panthers/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 19,
                    venue: 'Go Media Stadium',
                    completed: false,
                    date: 'July 13',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-19/warriors-v-wests-tigers/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 21,
                    venue: 'Go Media Stadium',
                    completed: false,
                    date: 'July 26',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-21/warriors-v-titans/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 22,
                    venue: 'Go Media Stadium',
                    completed: false,
                    date: 'August 1',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-22/warriors-v-dolphins/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 24,
                    venue: 'Go Media Stadium',
                    completed: false,
                    date: 'August 15',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-24/warriors-v-dragons/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 26,
                    venue: 'Go Media Stadium',
                    completed: false,
                    date: 'August 29',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-26/warriors-v-eels/#tab--stats'
                }
            ]
        },
        {
            venue: 'WIN Stadium',
            state: 'NSW',
            city: 'Wollongong',
            capacity: 24,
            homeTeams: [ { localName: 'St George Illawarra', teamName: 'Dragons' } ],
            teamsPlayed: ["Dragons", "Rabbitohs", "Titans", "Warriors", "Eels", "Raiders", "Panthers"],
            games: [
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 2,
                    venue: 'WIN Stadium',
                    completed: true,
                    date: 'March 15',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-2/dragons-v-rabbitohs/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 6,
                    venue: 'WIN Stadium',
                    completed: true,
                    date: 'April 11',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-6/dragons-v-titans/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 10,
                    venue: 'WIN Stadium',
                    completed: true,
                    date: 'May 10',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-10/dragons-v-warriors/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 17,
                    venue: 'WIN Stadium',
                    completed: false,
                    date: 'June 28',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-17/dragons-v-eels/#tab--stats'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 22,
                    venue: 'WIN Stadium',
                    completed: false,
                    date: 'August 2',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-22/dragons-v-raiders/#tab--stats'
                },
                {
                    homeTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 27,
                    venue: 'WIN Stadium',
                    completed: false,
                    date: 'September 6',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-27/dragons-v-panthers/#tab--stats'
                }
            ]
        },
        {
            venue: 'Queensland Country Bank Stadium',
            state: 'QLD',
            city: 'Townsville',
            capacity: 25,
            homeTeams: [ { localName: 'North Queensland', teamName: 'Cowboys' } ],
            teamsPlayed: ["Cowboys", "Sharks", "Raiders", "Titans", "Panthers", "Sea Eagles", "Tigers", "Dolphins", "Storm", "Bulldogs", "Dragons", "Knights", "Bulldogs"],
            games: [
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 2,
                    venue: 'Queensland Country Bank Stadium',
                    completed: true,
                    date: 'March 15',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-2/cowboys-v-sharks/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 4,
                    venue: 'Queensland Country Bank Stadium',
                    completed: true,
                    date: 'March 29',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-4/cowboys-v-raiders/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 8,
                    venue: 'Queensland Country Bank Stadium',
                    completed: true,
                    date: 'April 26',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-8/cowboys-v-titans/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 10,
                    venue: 'Queensland Country Bank Stadium',
                    completed: true,
                    date: 'May 10',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-10/cowboys-v-panthers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 11,
                    venue: 'Queensland Country Bank Stadium',
                    completed: true,
                    date: 'May 17',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-11/cowboys-v-sea-eagles/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 13,
                    venue: 'Queensland Country Bank Stadium',
                    completed: true,
                    date: 'May 31',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-13/cowboys-v-wests-tigers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 15,
                    venue: 'Queensland Country Bank Stadium',
                    completed: false,
                    date: 'June 14',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.ticketmaster.com.au/event/25006246FCB91C2D?utm_source=nrl&utm_medium=network&utm_campaign=NRL25'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 18,
                    venue: 'Queensland Country Bank Stadium',
                    completed: false,
                    date: 'July 5',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-18/cowboys-v-storm/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    round: 19,
                    venue: 'Queensland Country Bank Stadium',
                    completed: false,
                    date: 'July 12',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-19/cowboys-v-bulldogs/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 21,
                    venue: 'Queensland Country Bank Stadium',
                    completed: false,
                    date: 'July 25',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-21/cowboys-v-dragons/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 24,
                    venue: 'Queensland Country Bank Stadium',
                    completed: false,
                    date: 'August 17',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-24/cowboys-v-knights/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 26,
                    venue: 'Queensland Country Bank Stadium',
                    completed: false,
                    date: 'August 30',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-26/cowboys-v-broncos/#tab--stats'
                }
            ]
        },
        {
            venue: 'GIO Stadium',
            state: 'ACT',
            city: 'Canberra',
            capacity: 25,
            homeTeams: [ { localName: 'Canberra', teamName: 'Raiders' } ],
            teamsPlayed: ["Raiders", "Broncos", "Sharks", "Dolphins", "Bulldogs", "Titans", "Rabbitohs", "Dragons", "Eels", "Knights", "Sea Eagles", "Tigers"],
            games: [
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 2,
                    venue: 'GIO Stadium',
                    completed: true,
                    date: 'March 15',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-2/raiders-v-broncos/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 5,
                    venue: 'GIO Stadium',
                    completed: true,
                    date: 'April 3',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-5/raiders-v-sharks/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 8,
                    venue: 'GIO Stadium',
                    completed: true,
                    date: 'April 27',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-8/raiders-v-dolphins/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    round: 10,
                    venue: 'GIO Stadium',
                    completed: true,
                    date: 'May 10',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-10/raiders-v-bulldogs/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 11,
                    venue: 'GIO Stadium',
                    completed: true,
                    date: 'May 18',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-11/raiders-v-titans/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 14,
                    venue: 'GIO Stadium',
                    completed: true,
                    date: 'June 8',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-14/raiders-v-rabbitohs/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 18,
                    venue: 'GIO Stadium',
                    completed: false,
                    date: 'July 5',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-18/raiders-v-dragons/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 20,
                    venue: 'GIO Stadium',
                    completed: false,
                    date: 'July 19',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-20/raiders-v-eels/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 21,
                    venue: 'GIO Stadium',
                    completed: false,
                    date: 'July 27',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-21/raiders-v-knights/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 23,
                    venue: 'GIO Stadium',
                    completed: false,
                    date: 'August 8',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-23/raiders-v-sea-eagles/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 26,
                    venue: 'GIO Stadium',
                    completed: false,
                    date: 'August 30',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-26/raiders-v-wests-tigers/#tab--stats'
                }
            ]
        },
        {
            venue: 'Belmore Sports Ground',
            state: 'NSW',
            city: 'Sydney',
            capacity: 19,
            homeTeams: [ { localName: 'Canterbury Bankstown', teamName: 'Bulldogs' } ],
            teamsPlayed: ["Bulldogs", "Titans"],
            games: [
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 2,
                    venue: 'Belmore Sports Ground',
                    completed: true,
                    date: 'March 16',
                    time: '6:15 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-2/bulldogs-v-titans/#tab-news-video'
                }
            ]
        },
        {
            venue: 'Suncorp Stadium',
            state: 'QLD',
            city: 'Brisbane',
            capacity: 53,
            homeTeams: [ { localName: 'Brisbane', teamName: 'Broncos' } ],
            teamsPlayed: ["Broncos", "Bulldogs", "Raiders", "Sharks", "Titans", "Sea Eagles", "Storm", "Warriors", "Knights", "Cowboys", "Eels", "Panthers", "Dragons", "Rabbitohs", "Roosters", "Tigers", "Dolphins"],
            games: [
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 3,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'March 21',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-3/broncos-v-cowboys/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 4,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'March 28',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-4/dolphins-v-broncos/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 5,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'April 5',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-5/broncos-v-wests-tigers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 6,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'April 10',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-6/dolphins-v-panthers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 6,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'April 11',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-6/broncos-v-roosters/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 7,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'April 18',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-7/dolphins-v-storm/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    round: 8,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'April 24',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-8/broncos-v-bulldogs/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 9,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 2',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-9/sharks-v-eels/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 9,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 2',
                    time: '8:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-9/roosters-v-dolphins/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 9,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 3',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-9/rabbitohs-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 9,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 3',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-9/warriors-v-cowboys/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 9,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 3',
                    time: '7:45 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-9/wests-tigers-v-dragons/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    round: 9,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 4',
                    time: '1:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-9/titans-v-bulldogs/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 9,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 4',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-9/panthers-v-broncos/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 9,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 4',
                    time: '6:25 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-9/storm-v-raiders/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 11,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 17',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-11/dolphins-v-warriors/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 11,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'May 18',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-11/broncos-v-dragons/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 14,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'June 6',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-14/dolphins-v-dragons/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 14,
                    venue: 'Suncorp Stadium',
                    completed: true,
                    date: 'June 7',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-14/broncos-v-titans/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 16,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'June 22',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-16/broncos-v-sharks/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 17,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'June 28',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-17/broncos-v-warriors/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 17,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'June 28',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-17/rabbitohs-v-dolphins/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 20,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'July 17',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-20/dolphins-v-cowboys/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 21,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'July 25',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-21/broncos-v-eels/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 22,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'August 1',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-22/broncos-v-rabbitohs/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 23,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'August 9',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-23/dolphins-v-roosters/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 24,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'August 16',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-24/broncos-v-dolphins/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 26,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'August 31',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-26/dolphins-v-titans/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 27,
                    venue: 'Suncorp Stadium',
                    completed: false,
                    date: 'September 4',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-27/broncos-v-storm/#tab--stats'
                }
            ]
        },
        {
            venue: 'Sharks Stadium',
            state: 'NSW',
            city: 'Sydney',
            capacity: 22,
            homeTeams: [ { localName: 'Cronulla', teamName: 'Sharks' } ],
            teamsPlayed: ["Sharks", "Rabbitohs", "Bulldogs", "Storm", "Warriors", "Dragons", "Dolphins", "Roosters", "Cowboys", "Titans", "Knights"],
            games: [
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 3,
                    venue: 'Sharks Stadium',
                    completed: true,
                    date: 'March 22',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-3/sharks-v-rabbitohs/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    round: 4,
                    venue: 'Sharks Stadium',
                    completed: true,
                    date: 'March 29',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-4/sharks-v-bulldogs/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 11,
                    venue: 'Sharks Stadium',
                    completed: true,
                    date: 'May 17',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-11/sharks-v-storm/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 14,
                    venue: 'Sharks Stadium',
                    completed: true,
                    date: 'June 7',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-14/sharks-v-warriors/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 15,
                    venue: 'Sharks Stadium',
                    completed: false,
                    date: 'June 12',
                    time: '7:50 PM',
                    ticketUrl: 'https://premier.ticketek.com.au/shows/Show.aspx?sh=SHA1525&utm_source=nrl&utm_medium=network&utm_campaign=NRL25'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 19,
                    venue: 'Sharks Stadium',
                    completed: false,
                    date: 'July 11',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-19/sharks-v-dolphins/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 20,
                    venue: 'Sharks Stadium',
                    completed: false,
                    date: 'July 18',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-20/sharks-v-roosters/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 22,
                    venue: 'Sharks Stadium',
                    completed: false,
                    date: 'August 3',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-22/sharks-v-cowboys/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 24,
                    venue: 'Sharks Stadium',
                    completed: false,
                    date: 'August 16',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-24/sharks-v-titans/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 26,
                    venue: 'Sharks Stadium',
                    completed: false,
                    date: 'August 31',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-26/sharks-v-knights/#tab--stats'
                }
            ]
        },
        {
            venue: 'Kayo Stadium',
            state: 'QLD',
            city: 'Redcliffe',
            capacity: 10,
            homeTeams: [ { localName: 'Redcliffe', teamName: 'Dolphins' } ],
            teamsPlayed: ["Dolphins", "Tigers", "Raiders"],
            games: [
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 3,
                    venue: 'Kayo Stadium',
                    completed: true,
                    date: 'March 22',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-3/dolphins-v-wests-tigers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 27,
                    venue: 'Kayo Stadium',
                    completed: false,
                    date: 'September 7',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-27/dolphins-v-raiders/#tab--stats'
                }
            ]
        },
        {
            venue: 'Cbus Super Stadium',
            state: 'QLD',
            city: 'Gold Coast',
            capacity: 28,
            homeTeams: [ { localName: 'Gold Coast', teamName: 'Titans' } ],
            teamsPlayed: ["Titans", "Knights", "Dolphins", "Raiders", "Storm", "Sea Eagles", "Cowboys", "Broncos", "Panthers", "Rabbitohs", "Warriors", "Tigers"],
            games: [
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 3,
                    venue: 'Cbus Super Stadium',
                    completed: true,
                    date: 'March 22',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-3/titans-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 5,
                    venue: 'Cbus Super Stadium',
                    completed: true,
                    date: 'April 5',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-5/titans-v-dolphins/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 7,
                    venue: 'Cbus Super Stadium',
                    completed: true,
                    date: 'April 20',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-7/titans-v-raiders/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 13,
                    venue: 'Cbus Super Stadium',
                    completed: true,
                    date: 'May 31',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-13/titans-v-storm/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 15,
                    venue: 'Cbus Super Stadium',
                    completed: false,
                    date: 'June 13',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.ticketmaster.com.au/gold-coast-titans-v-sea-eagles-robina-gold-coast-13-06-2025/event/2500618DD3BB1272?utm_source=nrl&utm_medium=network&utm_campaign=NRL25'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 17,
                    venue: 'Cbus Super Stadium',
                    completed: false,
                    date: 'June 29',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-17/titans-v-cowboys/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 19,
                    venue: 'Cbus Super Stadium',
                    completed: false,
                    date: 'July 13',
                    time: '6:15 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-19/titans-v-broncos/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 22,
                    venue: 'Cbus Super Stadium',
                    completed: false,
                    date: 'August 2',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-22/titans-v-panthers/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 23,
                    venue: 'Cbus Super Stadium',
                    completed: false,
                    date: 'August 10',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-23/titans-v-rabbitohs/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 25,
                    venue: 'Cbus Super Stadium',
                    completed: false,
                    date: 'August 23',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-25/titans-v-warriors/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    awayTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    round: 27,
                    venue: 'Cbus Super Stadium',
                    completed: false,
                    date: 'September 6',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-27/titans-v-wests-tigers/#tab--stats'
                }
            ]
        },
        {
            venue: 'Accor Stadium',
            state: 'NSW',
            city: 'Sydney',
            capacity: 84,
            homeTeams: [
                { localName: 'Canterbury Bankstown', teamName: 'Bulldogs' },
                { localName: 'South Sydney', teamName: 'Rabbitohs' }
            ],
            teamsPlayed: ["Bulldogs", "Rabbitohs", "Panthers", "Roosters", "Knights", "Broncos", "Dolphins", "Warriors", "Eels", "Storm", "Dragons"],
            games: [
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 4,
                    venue: 'Accor Stadium',
                    completed: true,
                    date: 'March 27',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-4/rabbitohs-v-panthers/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 5,
                    venue: 'Accor Stadium',
                    completed: true,
                    date: 'April 4',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-5/rabbitohs-v-roosters/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 5,
                    venue: 'Accor Stadium',
                    completed: true,
                    date: 'April 6',
                    time: '6:15 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-5/bulldogs-v-knights/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    round: 7,
                    venue: 'Accor Stadium',
                    completed: true,
                    date: 'April 18',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-7/bulldogs-v-rabbitohs/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 10,
                    venue: 'Accor Stadium',
                    completed: true,
                    date: 'May 9',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-10/rabbitohs-v-broncos/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    round: 11,
                    venue: 'Accor Stadium',
                    completed: true,
                    date: 'May 16',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-11/bulldogs-v-roosters/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    round: 12,
                    venue: 'Accor Stadium',
                    completed: true,
                    date: 'May 22',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-12/bulldogs-v-dolphins/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 13,
                    venue: 'Accor Stadium',
                    completed: true,
                    date: 'June 1',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-13/rabbitohs-v-warriors/#tab-news-video'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    round: 14,
                    venue: 'Accor Stadium',
                    completed: true,
                    date: 'June 9',
                    time: '4:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-14/bulldogs-v-eels/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    round: 15,
                    venue: 'Accor Stadium',
                    completed: false,
                    date: 'June 15',
                    time: '4:05 PM',
                    ticketUrl: 'https://premier.ticketek.com.au/shows/Show.aspx?sh=RBS1525&utm_source=nrl&utm_medium=network&utm_campaign=NRL25'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'Melbourne', teamName: 'Storm' },
                    round: 16,
                    venue: 'Accor Stadium',
                    completed: false,
                    date: 'June 21',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-16/rabbitohs-v-storm/#tab--stats'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'Brisbane', teamName: 'Broncos' },
                    round: 18,
                    venue: 'Accor Stadium',
                    completed: false,
                    date: 'July 4',
                    time: '8:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-18/bulldogs-v-broncos/#tab--stats'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 20,
                    venue: 'Accor Stadium',
                    completed: false,
                    date: 'July 19',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-20/bulldogs-v-dragons/#tab--stats'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    round: 23,
                    venue: 'Accor Stadium',
                    completed: false,
                    date: 'August 9',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-23/bulldogs-v-warriors/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  {
                        localName: 'St George Illawarra',
                        teamName: 'Dragons'
                    },
                    round: 25,
                    venue: 'Accor Stadium',
                    completed: false,
                    date: 'August 21',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-25/rabbitohs-v-dragons/#tab--stats'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    round: 26,
                    venue: 'Accor Stadium',
                    completed: false,
                    date: 'August 28',
                    time: '7:50 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-26/bulldogs-v-panthers/#tab--stats'
                },
                {
                    homeTeam:  {
                        localName: 'Canterbury Bankstown',
                        teamName: 'Bulldogs'
                    },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 27,
                    venue: 'Accor Stadium',
                    completed: false,
                    date: 'September 6',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-27/bulldogs-v-sharks/#tab--stats'
                }
            ]
        },
        {
            venue: 'Optus Stadium',
            state: 'WA',
            city: 'Perth',
            homeTeams: [],
            capacity: 65,
            teamsPlayed: ["Sharks", "Sea Eagles", "Rabbitohs", "Cowboys"],
            games: [
                {
                    homeTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    awayTeam:  { localName: 'Manly Warringah', teamName: 'Sea Eagles' },
                    round: 6,
                    venue: 'Optus Stadium',
                    completed: true,
                    date: 'April 12',
                    time: '3:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-6/sharks-v-sea-eagles/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 6,
                    venue: 'Optus Stadium',
                    completed: true,
                    date: 'April 12',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-6/rabbitohs-v-cowboys/#tab-news-video'
                }
            ]
        },
        {
            venue: 'TIO Stadium',
            state: 'NT',
            city: 'Darwin',
            homeTeams: [],
            capacity: 13,
            teamsPlayed: ["Eels", "Raiders"],
            games: [
                {
                    homeTeam:  { localName: 'Parramatta', teamName: 'Eels' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 6,
                    venue: 'TIO Stadium',
                    completed: true,
                    date: 'April 12',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-6/eels-v-raiders/#tab-news-video'
                }
            ]
        },
        {
            venue: 'Apollo Projects Stadium',
            state: 'NZ',
            city: 'Christchurch',
            homeTeams: [],
            capacity: 17,
            teamsPlayed: ["Warriors", "Knights"],
            games: [
                {
                    homeTeam:  { localName: 'New Zealand', teamName: 'Warriors' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 8,
                    venue: 'Apollo Projects Stadium',
                    completed: true,
                    date: 'April 25',
                    time: '6:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-8/warriors-v-knights/#tab--stats'
                }
            ]
        },
        {
            venue: 'Leichhardt Oval',
            state: 'NSW',
            city: 'Sydney',
            capacity: 20,
            homeTeams: [ { localName: 'Wests', teamName: 'Tigers' } ],
            teamsPlayed: ["Tigers", "Sharks", "Titans", "Cowboys"],
            games: [
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 8,
                    venue: 'Leichhardt Oval',
                    completed: true,
                    date: 'April 27',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-8/wests-tigers-v-sharks/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'Gold Coast', teamName: 'Titans' },
                    round: 20,
                    venue: 'Leichhardt Oval',
                    completed: false,
                    date: 'July 20',
                    time: '2:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-20/wests-tigers-v-titans/#tab--stats'
                },
                {
                    homeTeam:  { localName: 'Wests', teamName: 'Tigers' },
                    awayTeam:  { localName: 'North Queensland', teamName: 'Cowboys' },
                    round: 25,
                    venue: 'Leichhardt Oval',
                    completed: false,
                    date: 'August 24',
                    time: '4:05 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-25/wests-tigers-v-cowboys/#tab--stats'
                }
            ]
        },
        {
            venue: 'Carrington Park',
            state: 'NSW',
            city: 'Bathurst',
            homeTeams: [],
            capacity: 12,
            teamsPlayed: ["Panthers", "Knights"],
            games: [
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 12,
                    venue: 'Carrington Park',
                    completed: true,
                    date: 'May 24',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-12/panthers-v-knights/#tab-news-video'
                }
            ]
        },
        {
            venue: 'Industree Group Stadium',
            state: 'NSW',
            city: 'Gosford',
            homeTeams: [],
            capacity: 20,
            teamsPlayed: ["Roosters", "Sharks"],
            games: [
                {
                    homeTeam:  { localName: 'Sydney', teamName: 'Roosters' },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 12,
                    venue: 'Industree Group Stadium',
                    completed: true,
                    date: 'May 24',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-12/roosters-v-sharks/#tab-news-video'
                },
                {
                    homeTeam:  { localName: 'South Sydney', teamName: 'Rabbitohs' },
                    awayTeam:  { localName: 'Cronulla', teamName: 'Sharks' },
                    round: 21,
                    venue: 'Industree Group Stadium',
                    completed: false,
                    date: 'July 26',
                    time: '7:35 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-21/rabbitohs-v-sharks/#tab--stats'
                }
            ]
        },
        {
            venue: 'HBF Park',
            state: 'WA',
            city: 'Perth',
            homeTeams: [],
            capacity: 21,
            teamsPlayed: ["Dolphins", "Knights"],
            games: [
                {
                    homeTeam:  { localName: 'Redcliffe', teamName: 'Dolphins' },
                    awayTeam:  { localName: 'Newcastle', teamName: 'Knights' },
                    round: 16,
                    venue: 'HBF Park',
                    completed: false,
                    date: 'June 21',
                    time: '5:30 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-16/dolphins-v-knights/#tab--stats'
                }
            ]
        },
        {
            venue: 'Glen Willow Oval',
            state: 'NSW',
            city: 'Mudgee',
            homeTeams: [],
            capacity: 10,
            teamsPlayed: ["Panthers", "Raiders"],
            games: [
                {
                    homeTeam:  { localName: 'Penrith', teamName: 'Panthers' },
                    awayTeam:  { localName: 'Canberra', teamName: 'Raiders' },
                    round: 25,
                    venue: 'Glen Willow Oval',
                    completed: false,
                    date: 'August 22',
                    time: '6:00 PM',
                    ticketUrl: 'https://www.nrl.com/draw/nrl-premiership/2025/round-25/panthers-v-raiders/#tab--stats'
                }
            ]
        }
    ]
}