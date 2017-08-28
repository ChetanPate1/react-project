import React, { Component } from 'react';
import FrostGlass from './FrostGlass';
import MoreButton from './MoreButton';

class WatchlistCard extends Component {
   render() {
      const watchlist = this.props.watchlist;
      const style = { backgroundImage: 'url(' + watchlist.imgsrc + ')' };

      return (
         <div className="watchlist-card" style={ style }>
            <h2>{ watchlist.series }</h2>
            <h4>{ watchlist.subheading }</h4>
            <h5>On Season { watchlist.on.season } Episode { watchlist.on.episode }</h5>
            <h6>Next <small>Aired Episode</small></h6>

            <MoreButton seasons={ watchlist.unwatched } currentseason={ watchlist.on.season } />
            <FrostGlass imgsrc={ watchlist.imgsrc } />
         </div>
      );
   }
}

export default WatchlistCard;
