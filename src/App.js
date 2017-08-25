import React, { Component } from 'react';
import WatchlistCard from './components/WatchlistCard';

class App extends Component {
   render() {
      return (
         <div className="container">
            <WatchlistCard name="watchlist card"/>
         </div>
      );
   }
}

export default App;
