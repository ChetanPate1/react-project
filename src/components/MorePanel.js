import React, { Component } from 'react';

class MorePanel extends Component {
   constructor(){
      super();
   }

   componentWillMount(){

   }

   render() {
      let conditionalClass = ' open';
      return (
         <div className={ 'more-panel' + conditionalClass } ></div>
      );
   }
}
export default MorePanel;
