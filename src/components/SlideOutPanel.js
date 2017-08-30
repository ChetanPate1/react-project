import React, { Component } from 'react';

class SlideOutPanel extends Component {
   render() {
      let conditionalClass = this.props.open ? ' open' : '';

      return (
         <div className={ 'slide-out-panel' + conditionalClass } >

         </div>
      );
   }
}

export default SlideOutPanel;
