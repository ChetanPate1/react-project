import React, { Component } from 'react';

class FrostGlass extends Component {
   render() {
      const style = { backgroundImage: 'url(' + this.props.imgsrc + ')' };
      return (
         <div className="frost-glass">
            <div className="frost" style={ style }></div>
         </div>
      );
   }
}

export default FrostGlass;
