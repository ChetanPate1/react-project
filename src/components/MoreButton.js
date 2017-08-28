import React, { Component } from 'react';

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
      console.log(this.props.seasons, this.props.currentseason);
      this.behindCount(this.props.seasons, this.props.currentseason);
   }

   toggle(){
      this.setState(prevState => ({
         toggleOn: !prevState.toggleOn
      }));
   }

   behindCount(seasons, currentSeason){
      var currentSeason = parseInt(currentSeason);
      let seasonsLimit = seasons.length + currentSeason;
      let count = 0, j = 1, totalEpisodes = 0, season;
      console.log(seasons.length);
      for (currentSeason; currentSeason < seasonsLimit; currentSeason++) {
         season = seasons['season_' + currentSeason];
         totalEpisodes = season.length;

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
      let upToDateStateClass = behindCount == 0 ? ' up-to-date' : '';

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
