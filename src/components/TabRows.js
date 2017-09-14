import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleWatched } from '../actions';
import { timeNow, objSize } from '../helperFunctions';

class TabRows extends Component {
   constructor(props){
      super(props);

      this.state = { season: this.props.data };
console.log(this.state);
      this.watched = this.watched.bind(this);
      this.aired = this.aired.bind(this);
      this.createTabRows = this.createTabRows.bind(this);
   }

   watched(key, airDate){
      const season = this.state.season;
      const currentEpisode = parseInt(this.props.currentEpisode, 0);
      let isCurrentSeason = this.props.currentSeason === season[0].toString();
      var valid = key === currentEpisode || key === (currentEpisode - 1);

      if(!isCurrentSeason){
        return;
        if(!this.aired(airDate).isAired || !valid){
          return;
        }
      }

      season[key].watched = !season[key].watched;
      let seasonKey = season[0];
      this.setState({
         season: season
      });
      this.countWatched(season, this.props.currentSeason);
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

    //  this.$store.commit('setCurrentSeason', { on });
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
    watchlist: state
  }
};

export default connect(mapStateToProps)(TabRows);
