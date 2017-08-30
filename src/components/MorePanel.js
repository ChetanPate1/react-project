import React, { Component } from 'react';
import MoreButton from './MoreButton';

class MorePanel extends Component {
   constructor(props){
      super(props);

      this.state = { open: false };
      this.toggle = this.toggle.bind(this);
   }

   toggle(){
      this.setState(prevState => ({
         toggleOn: !prevState.toggleOn
      }));
   }

   render() {
      let conditionalClass = this.state.open ? ' open' : '';

      return (
         <div>
            <MoreButton onClick={ this.toggle } seasons={ this.props.seasons } currentSeason={ this.props.currentSeason } />
            <div className={ 'more-panel' + conditionalClass } ></div>
         </div>
      );
   }
}
export default MorePanel;
