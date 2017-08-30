import React, { Component } from 'react';
import TabButton from './TabButton';

class Tabs extends Component {
   constructor(props){
      super(props);
      this.state = { tabActive: 1 };
   }

   tabSelect(number) {
      this.setState({
         tabActive: number
      });
   }

   isTabSelected(number) {
      return this.state.tabActive === number;
   }

   render() {
      let buttonStateClass = 'active';
      let tabs = <TabButton name={ 'S01' } active={ false } />;
      return (
         <div className="tabs" >
            { tabs }
         </div>
      );
   }
}

export default Tabs;
