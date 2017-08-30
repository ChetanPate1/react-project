import React, { Component } from 'react';

class TabButton extends Component {
   constructor(props){
      super(props);

      this.handleClick = this.props.handleClick;
   }

   render() {
      let buttonStateClass = this.props.active ? ' active' : '';

      return (
         <button className={'tab-button' + buttonStateClass } onClick={ this.handleClick } >{ this.props.name }</button>
      );
   }
}

export default TabButton;
