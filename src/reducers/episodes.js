const watchlistApp = (state = watchlist, action) => {
  switch (action.type) {
    case 'TOGGLE_WATCHED':
      console.log(state);
      return state;

    case 'SET_CURRENT_SEASON':
      return state;

    default:
      return state;
  }
}

let watchlist = {
  "on":{
    "episode":1,
    "season":"1"
  },
  "showId":"-KqJ3X1UZtOJG6H7X3Fv",
  "series": "Game of Thrones",
  "subheading": "The Dragon and the Wolf",
  "imgsrc": "https://static.episodate.com/images/tv-show/full/23455.jpg",
  "unwatched":{
    "season_1" : [ 1, {
      "airDate" : 1303070400000,
      "name" : "Winter is Coming",
      "number" : 1,
      "watched" : false
    }, {
      "airDate" : 1303675200000,
      "name" : "The Kingsroad",
      "number" : 2,
      "watched" : false
    }, {
      "airDate" : 1304280000000,
      "name" : "Lord Snow",
      "number" : 3,
      "watched" : false
    }, {
      "airDate" : 1304884800000,
      "name" : "Cripples, Bastards, and Broken Things",
      "number" : 4,
      "watched" : false
    }, {
      "airDate" : 1305489600000,
      "name" : "The Wolf and the Lion",
      "number" : 5,
      "watched" : false
    }, {
      "airDate" : 1306094400000,
      "name" : "A Golden Crown",
      "number" : 6,
      "watched" : false
    }, {
      "airDate" : 1306699200000,
      "name" : "You Win or You Die",
      "number" : 7,
      "watched" : false
    }, {
      "airDate" : 1307304000000,
      "name" : "The Pointy End",
      "number" : 8,
      "watched" : false
    }, {
      "airDate" : 1307908800000,
      "name" : "Baelor",
      "number" : 9,
      "watched" : false
    }, {
      "airDate" : 1308513600000,
      "name" : "Fire and Blood",
      "number" : 10,
      "watched" : false
    } ],
    "season_2" : [ 2, {
      "airDate" : 1333310400000,
      "name" : "The North Remembers",
      "number" : 1,
      "watched" : false
    }, {
      "airDate" : 1333915200000,
      "name" : "The Night Lands",
      "number" : 2,
      "watched" : false
    }, {
      "airDate" : 1334520000000,
      "name" : "What is Dead May Never Die",
      "number" : 3,
      "watched" : false
    }, {
      "airDate" : 1335124800000,
      "name" : "Garden of Bones",
      "number" : 4,
      "watched" : false
    }, {
      "airDate" : 1335729600000,
      "name" : "The Ghost of Harrenhal",
      "number" : 5,
      "watched" : false
    }, {
      "airDate" : 1336334400000,
      "name" : "The Old Gods and the New",
      "number" : 6,
      "watched" : false
    }, {
      "airDate" : 1336939200000,
      "name" : "A Man Without Honor",
      "number" : 7,
      "watched" : false
    }, {
      "airDate" : 1337544000000,
      "name" : "The Prince of Winterfell",
      "number" : 8,
      "watched" : false
    }, {
      "airDate" : 1338148800000,
      "name" : "Blackwater",
      "number" : 9,
      "watched" : false
    }, {
      "airDate" : 1338753600000,
      "name" : "Valar Morghulis",
      "number" : 10,
      "watched" : false
    } ],
    "season_3" : [ 3, {
      "airDate" : 1364760000000,
      "name" : "Valar Dohaeris",
      "number" : 1,
      "watched" : false
    }, {
      "airDate" : 1365364800000,
      "name" : "Dark Wings, Dark Words",
      "number" : 2,
      "watched" : false
    }, {
      "airDate" : 1365969600000,
      "name" : "Walk of Punishment",
      "number" : 3,
      "watched" : false
    }, {
      "airDate" : 1366574400000,
      "name" : "And Now His Watch is Ended",
      "number" : 4,
      "watched" : false
    }, {
      "airDate" : 1367179200000,
      "name" : "Kissed by Fire",
      "number" : 5,
      "watched" : false
    }, {
      "airDate" : 1367784000000,
      "name" : "The Climb",
      "number" : 6,
      "watched" : false
    }, {
      "airDate" : 1368388800000,
      "name" : "The Bear and the Maiden Fair",
      "number" : 7,
      "watched" : false
    }, {
      "airDate" : 1368993600000,
      "name" : "Second Sons",
      "number" : 8,
      "watched" : false
    }, {
      "airDate" : 1370203200000,
      "name" : "The Rains of Castamere",
      "number" : 9,
      "watched" : false
    }, {
      "airDate" : 1370808000000,
      "name" : "Mhysa",
      "number" : 10,
      "watched" : false
    } ],
    "season_4" : [ 4, {
      "airDate" : 1396814400000,
      "name" : "Two Swords",
      "number" : 1,
      "watched" : false
    }, {
      "airDate" : 1397419200000,
      "name" : "The Lion and the Rose",
      "number" : 2,
      "watched" : false
    }, {
      "airDate" : 1398024000000,
      "name" : "Breaker of Chains",
      "number" : 3,
      "watched" : false
    }, {
      "airDate" : 1398628800000,
      "name" : "Oathkeeper",
      "number" : 4,
      "watched" : false
    }, {
      "airDate" : 1399233600000,
      "name" : "First of His Name",
      "number" : 5,
      "watched" : false
    }, {
      "airDate" : 1399838400000,
      "name" : "The Laws of Gods and Men",
      "number" : 6,
      "watched" : false
    }, {
      "airDate" : 1400443200000,
      "name" : "Mockingbird",
      "number" : 7,
      "watched" : false
    }, {
      "airDate" : 1401652800000,
      "name" : "The Mountain and the Viper",
      "number" : 8,
      "watched" : false
    }, {
      "airDate" : 1402257600000,
      "name" : "The Watchers on the Wall",
      "number" : 9,
      "watched" : false
    }, {
      "airDate" : 1402862400000,
      "name" : "The Children",
      "number" : 10,
      "watched" : false
    } ],
    "season_5" : [ 5, {
      "airDate" : 1428868800000,
      "name" : "The Wars to Come",
      "number" : 1,
      "watched" : false
    }, {
      "airDate" : 1429473600000,
      "name" : "The House of Black and White",
      "number" : 2,
      "watched" : false
    }, {
      "airDate" : 1430078400000,
      "name" : "High Sparrow",
      "number" : 3,
      "watched" : false
    }, {
      "airDate" : 1430683200000,
      "name" : "Sons of the Harpy",
      "number" : 4,
      "watched" : false
    }, {
      "airDate" : 1431288000000,
      "name" : "Kill the Boy",
      "number" : 5,
      "watched" : false
    }, {
      "airDate" : 1431892800000,
      "name" : "Unbowed, Unbent, Unbroken",
      "number" : 6,
      "watched" : false
    }, {
      "airDate" : 1432497600000,
      "name" : "The Gift",
      "number" : 7,
      "watched" : false
    }, {
      "airDate" : 1433102400000,
      "name" : "Hardhome",
      "number" : 8,
      "watched" : false
    }, {
      "airDate" : 1433707200000,
      "name" : "The Dance of Dragons",
      "number" : 9,
      "watched" : false
    }, {
      "airDate" : 1434312000000,
      "name" : "Mother's Mercy",
      "number" : 10,
      "watched" : false
    } ],
    "season_6" : [ 6, {
      "airDate" : 1461528000000,
      "name" : "The Red Woman",
      "number" : 1,
      "watched" : false
    }, {
      "airDate" : 1462132800000,
      "name" : "Home",
      "number" : 2,
      "watched" : false
    }, {
      "airDate" : 1462737600000,
      "name" : "Oathbreaker",
      "number" : 3,
      "watched" : false
    }, {
      "airDate" : 1463342400000,
      "name" : "Book of the Stranger",
      "number" : 4,
      "watched" : false
    }, {
      "airDate" : 1463947200000,
      "name" : "The Door",
      "number" : 5,
      "watched" : false
    }, {
      "airDate" : 1464552000000,
      "name" : "Blood of My Blood",
      "number" : 6,
      "watched" : false
    }, {
      "airDate" : 1465156800000,
      "name" : "The Broken Man",
      "number" : 7,
      "watched" : false
    }, {
      "airDate" : 1465761600000,
      "name" : "No One",
      "number" : 8,
      "watched" : false
    }, {
      "airDate" : 1466366400000,
      "name" : "Battle of the Bastards",
      "number" : 9,
      "watched" : false
    }, {
      "airDate" : 1466971200000,
      "name" : "The Winds of Winter",
      "number" : 10,
      "watched" : false
    } ],
    "season_7" : [ 7, {
      "airDate" : 1500235200000,
      "name" : "Dragonstone",
      "number" : 1,
      "watched" : false
    }, {
      "airDate" : 1500840000000,
      "name" : "Stormborn",
      "number" : 2,
      "watched" : false
    }, {
      "airDate" : 1501444800000,
      "name" : "The Queen's Justice",
      "number" : 3,
      "watched" : false
    }, {
      "airDate" : 1502049600000,
      "name" : "The Spoils of War",
      "number" : 4,
      "watched" : false
    }, {
      "airDate" : 1502654400000,
      "name" : "Eastwatch",
      "number" : 5,
      "watched" : false
    }, {
      "airDate" : 1503259200000,
      "name" : "Beyond the Wall",
      "number" : 6,
      "watched" : false
    }, {
      "airDate" : 1503864000000,
      "name" : "The Dragon and the Wolf",
      "number" : 7,
      "watched" : false
    } ],
    "season_8" : [ 8, {
      "airDate" : 1531771200000,
      "name" : "Episode 1",
      "number" : 1,
      "watched" : false
    } ]
  }
};

export default watchlistApp;
