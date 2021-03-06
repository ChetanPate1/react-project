import React, { Component } from 'react';
import CountdownTimer from './CountdownTimer';

class FrostGlass extends Component {
   render() {
      const style = { backgroundImage: 'url(' + this.props.imgSrc + ')' };
      const future = 1531771200000;
      return (
         <div className="frost-glass">
            <CountdownTimer to={ future } />
            <div className="frost" style={ style }></div>
         </div>
      );
   }
}

export default FrostGlass;
