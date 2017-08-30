import React, { Component } from 'react';

class TabButton extends Component {
   render() {
      let buttonStateClass = this.props.active ? ' active' : '';

      return (
         <button className={'tab-button' + buttonStateClass }  >{ this.props.name }</button>
      );
   }
}

export default TabButton;
