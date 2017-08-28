import React, { Component } from 'react';
import { objSize } from '../helperFunctions';

class MoreButton extends Component {
   constructor(){
      super();

      this.state = {
         toggleOn: false,
         now: new Date().getTime(),
         behindCount: 0
      };

      this.toggle = this.toggle.bind(this);
      this.behindCount = this.behindCount.bind(this);
   }

   componentWillMount(){
      let currentSeason = parseInt(this.props.currentseason, 0);
      this.behindCount(this.props.seasons, currentSeason);
   }

   toggle(){
      this.setState(prevState => ({
         toggleOn: !prevState.toggleOn
      }));
   }

   behindCount(seasons, currentSeason){
      let seasonsLimit = objSize(seasons) + currentSeason;
      let count = 0, j = 1, totalEpisodes = 0, season;

      for (currentSeason; currentSeason < seasonsLimit; currentSeason++) {
         season = seasons['season_' + currentSeason];
         totalEpisodes = objSize(season);
         for (j; j < totalEpisodes; j++) {
            if(!season[j].watched && season[j].airDate - this.state.now < 0){
               count++;
            }
         }
         j = 1;
      }

      let behindCount = (count > 0) ? '-'+ count : count;
      this.setState({ behindCount : behindCount }) ;
   }

   render() {
      let behindCount = this.state.behindCount;
      let buttonStateClass = this.state.toggleOn ? ' open' : '';
      let upToDateStateClass = behindCount === 0 ? ' up-to-date' : '';

      return (
         <button className={ 'more-button' + buttonStateClass + upToDateStateClass }
            type="button" name="more" onClick={ this.toggle } >
            <span className="dripicons-plus"></span>
            <span className="behind">{ behindCount }</span>
         </button>
      );
   }
}
export default MoreButton;