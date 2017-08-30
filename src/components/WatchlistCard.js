import React, { Component } from 'react';
import FrostGlass from './FrostGlass';
import MorePanel from './MorePanel';

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

            <MorePanel seasons={ watchlist.unwatched } currentSeason={ watchlist.on.season } />
            <FrostGlass imgSrc={ watchlist.imgsrc } />
         </div>
      );
   }
}

export default WatchlistCard;
