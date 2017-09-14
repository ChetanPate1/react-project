import React, { Component } from 'react';
import { connect } from 'react-redux';

import TabButton from './TabButton';
import TabPanels from './TabPanels';

class Tabs extends Component {
   constructor(props){
      super(props);

      this.state = { tabActive: this.props.watchlist.on.season };

      this.createTabs = this.createTabs.bind(this);
      this.isTabSelected = this.isTabSelected.bind(this);
   }

   createTabs(){
      let tabNumbers = [];
      const seasons = this.props.watchlist.unwatched;

      Object.keys(seasons).map((prop, index) =>
         tabNumbers.push(seasons[prop][0])
      );

      const tabs = tabNumbers.map((tabNumber, i) =>
         <TabButton key={ i }
            name={'S ' + tabNumber }
            active={ this.isTabSelected(tabNumber) }
            handleClick={ this.tabSelect.bind(this, tabNumber) }
         />
      );
      return tabs;
   }

   tabSelect(tabNumber) {
      this.setState({
         tabActive: tabNumber
      });
   }

   isTabSelected(number) {
      return this.state.tabActive == number;
   }

   render() {
      return (
         <div>
            <div className="tabs" >{ this.createTabs() }</div>
            <TabPanels tabActive={ this.state.tabActive } />
         </div>
      );
   }
}

const mapStateToProps = state => {
  return {
    watchlist: state
  }
};

export default connect(mapStateToProps)(Tabs);
