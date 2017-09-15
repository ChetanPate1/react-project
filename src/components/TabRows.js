import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleWatched, setCurrentSeason } from '../actions';
import { timeNow, objSize } from '../helperFunctions';

class TabRows extends Component {
   constructor(props){
      super(props);
      this.state = {
        season: this.props.seasons[this.props.seasonKey]
      };

      this.watched = this.watched.bind(this);
      this.aired = this.aired.bind(this);
      this.createTabRows = this.createTabRows.bind(this);
   }

   watched(key, airDate){
     const season = this.state.season;
     const currentEpisode = parseInt(this.props.watchlist.on.episode, 0);
     let isCurrentSeason = this.props.watchlist.on.season === season[0].toString();
     let isOneMoreOrOneLess = key === currentEpisode || key === currentEpisode - 1;
     let seasonKey =  `season_${ season[0] }`;

     if(!isCurrentSeason || !this.aired(airDate).isAired || !isOneMoreOrOneLess){
       return;
     }

      this.props.toggleWatched(seasonKey, key);
      this.countWatched(season, this.props.watchlist.on.season);
   }

   countWatched(season, currentSeason) {
     let count = 1, j = 1;
     let totalEpisodes = objSize(season);
     let nextSeason = parseInt(currentSeason, 0) + 1;
     let on = { episode: 1, season: currentSeason };
     for (j; j < totalEpisodes; j++) {
       if(season[j].watched){
         count++;
       }
       if (!season[j].watched) {
         count + 1;
       }
     }
     if(count === objSize(season)){
       on.season = nextSeason.toString();
       on.episode = 1;
     }else {
       on.episode = count;
     }
     console.log('counted', on);
     this.props.setCurrentSeason(on);
   }

   aired(date) {
      date = parseInt(date, 0);
      let delta = Math.abs((date - timeNow()))/1000;
      let isAired = date - timeNow() < 0;
      let aired = { isAired: isAired };

      if( isAired ){
         aired.by = `- ${ Math.ceil(delta / 86400) } days`;
         if(Math.ceil(delta / 86400) > 30){
            aired.by = 'aired';
         }
      }else {
         aired.by = 'not aired';
      }

      return aired;
   }

   createTabRows(){
      const season = this.state.season.slice(1);

      const rows = season.map((episode, i) =>
         <div className={'tab-row' + (!episode.watched ? ' disabled' : '') } key={ i } >
            <div className="col-35">
               <span className="aired-by"><i className="dripicons-feed"></i> { this.aired(episode.airDate).by }</span>
            </div>

            <div className="col-45">
               Episode { episode.number }
            </div>

            <div className="col-20" onClick={ () => { this.watched(i + 1, episode.airDate) } } >
               <span className={ 'dripicons-preview' + (episode.watched ? ' active' : '') } ></span>
            </div>
         </div>
      );

      return rows;
   }

   render() {
      return (
         <div>{ this.createTabRows() }</div>
      );
   }
}

const mapStateToProps = state => {
  return {
    watchlist: state,
    seasons: state.unwatched
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleWatched: (seasonKey, episode) => {
      dispatch(toggleWatched(seasonKey, episode));
    },
    setCurrentSeason: (on) => {
      dispatch(setCurrentSeason(on));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TabRows);
