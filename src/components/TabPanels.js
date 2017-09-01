import React, { Component } from 'react';
import PanelRow from './PanelRow';

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
            <PanelRow
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

export default TabPanels;
