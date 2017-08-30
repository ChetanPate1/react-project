import React, { Component } from 'react';
import MoreButton from './MoreButton';
import SlideOutPanel from './SlideOutPanel';

class MorePanel extends Component {
   constructor(props){
      super(props);

      this.state = { open: false };
      this.toggle = this.toggle.bind(this);
   }

   toggle(){
      this.setState(prevState => ({
         open: !prevState.open
      }));
   }

   render() {
      const seasons = this.props.seasons;
      const currentSeason = this.props.currentSeason;

      return (
         <div>
            <MoreButton on={ this.state.open } onClick={ this.toggle } seasons={ seasons } currentSeason={ currentSeason } />
            <SlideOutPanel open={ this.state.open } seasons={ seasons } currentSeason={ currentSeason } />
         </div>
      );
   }
}

export default MorePanel;
