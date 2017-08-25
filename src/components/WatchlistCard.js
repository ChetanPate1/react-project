import React, { Component } from 'react';

class WatchlistCard extends Component {
   render() {
      return (
         <div className="watchlist-card">
            <h1>{ this.props.name }</h1>
         </div>
      );
   }
}

export default WatchlistCard;
