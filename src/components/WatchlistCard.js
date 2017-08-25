import React, { Component } from 'react';

class WatchlistCard extends Component {
   render() {
      const style = { backgroundImage: 'url(' + this.props.imgsrc + ')' };
      return (
         <div className="watchlist-card" style={ style }>
            <h2>{ this.props.heading }</h2>
            <h4>{ this.props.details }</h4>
            <h5>On { this.props.on }</h5>
            <h6>Next <small>Aired Episode</small></h6>
         </div>
      );
   }
}

export default WatchlistCard;
