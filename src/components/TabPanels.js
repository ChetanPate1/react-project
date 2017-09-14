import React, { Component } from 'react';
import { connect } from 'react-redux';

import TabRows from './TabRows';

class TabPanels extends Component {
   constructor(props){
      super(props);

      this.createTabsPanels = this.createTabsPanels.bind(this);
      this.isTabSelected = this.isTabSelected.bind(this);
   }

   createTabsPanels(){
      let tabPanels = [];
      const seasons = this.props.panelContent;

      Object.keys(seasons).map((prop, index) =>
         tabPanels.push(seasons[prop][0])
      );

      const panels = tabPanels.map((tabPanel, i) =>
         <div className={'tab-panel' + (this.isTabSelected(tabPanels[i]) ? ' active' : '') } key={ i } >
            <TabRows
              tabActive={ this.props.tabActive }
              currentEpisode={ this.props.currentEpisode }
              currentSeason={ this.props.currentSeason }
              data={ seasons['season_' + tabPanels[i]] }
            />
         </div>
      );

      return panels;
   }

   isTabSelected(number) {
      return this.props.tabActive == number;
   }

   render() {
      return (
         <div className="tab-panels" >
            { this.createTabsPanels() }
         </div>
      );
   }
}

const mapStateToProps = state => {
  return {
    watchlist: state,
    panelContent: state.unwatched
  }
};

export default connect(mapStateToProps)(TabPanels);
