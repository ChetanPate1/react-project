import React, { Component } from 'react';
import Tabs from './Tabs';

class SlideOutPanel extends Component {
   render() {
      let conditionalClass = this.props.open ? ' open' : '';

      return (
         <div className={ 'slide-out-panel' + conditionalClass } >
            <Tabs seasons={ this.props.seasons } currentSeason={ this.props.currentSeason } currentEpisode={ this.props.currentEpisode } />
         </div>
      );
   }
}

export default SlideOutPanel;
