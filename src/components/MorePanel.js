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
      return (
         <div>
            <MoreButton on={ this.state.open } handleClick={ this.toggle } />
            <SlideOutPanel open={ this.state.open } />
         </div>
      );
   }
}

export default MorePanel;
