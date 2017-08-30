import React, { Component } from 'react';
import WatchlistCard from './components/WatchlistCard';

var watchlist = {
   "lastUpdated":1503307808437,
   "on":{
      "episode":7,
      "season":"7"
   },
   "showId":"-KqJ3X1UZtOJG6H7X3Fv",
   "series": "Game of Thrones",
   "subheading": "The Dragon and the Wolf",
   "imgsrc": "https://static.episodate.com/images/tv-show/full/23455.jpg",
   "unwatched":{
      "season_6":[
         6,
         {
            "airDate":1500235200000,
            "name":"Dragonstone",
            "number":1,
            "watched":true
         },
         {
            "airDate":1500840000000,
            "name":"Stormborn",
            "number":2,
            "watched":true
         },
         {
            "airDate":1501444800000,
            "name":"The Queen's Justice",
            "number":3,
            "watched":true
         },
         {
            "airDate":1502049600000,
            "name":"The Spoils of War",
            "number":4,
            "watched":true
         },
         {
            "airDate":1502654400000,
            "name":"Eastwatch",
            "number":5,
            "watched":true
         },
         {
            "airDate":1503259200000,
            "name":"Episode 6",
            "number":6,
            "watched":true
         },
         {
            "airDate":1503864000000,
            "name":"Episode 7",
            "number":7,
            "watched":false
         }
      ],
      "season_7":[
         7,
         {
            "airDate":1500235200000,
            "name":"Dragonstone",
            "number":1,
            "watched":true
         },
         {
            "airDate":1500840000000,
            "name":"Stormborn",
            "number":2,
            "watched":true
         },
         {
            "airDate":1501444800000,
            "name":"The Queen's Justice",
            "number":3,
            "watched":true
         },
         {
            "airDate":1502049600000,
            "name":"The Spoils of War",
            "number":4,
            "watched":true
         },
         {
            "airDate":1502654400000,
            "name":"Eastwatch",
            "number":5,
            "watched":true
         },
         {
            "airDate":1503259200000,
            "name":"Episode 6",
            "number":6,
            "watched":true
         },
         {
            "airDate":1503864000000,
            "name":"Episode 7",
            "number":7,
            "watched":false
         }
      ]
   },
   "upToDate":false
};

class App extends Component {
   render() {
      return (
         <div className="container">
            <WatchlistCard watchlist={watchlist} />
         </div>
      );
   }
}

export default App;
