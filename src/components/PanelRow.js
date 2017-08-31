import React, { Component } from 'react';
import { timeNow } from '../helperFunctions';

class PanelRow extends Component {
   constructor(props){
      super(props);


      this.createPanelRows = this.createPanelRows.bind(this);
      this.aired = this.aired.bind(this);
   }

   aired(date) {
      date = parseInt(date, 0);
      let delta = Math.abs((date - timeNow()))/1000;
      let isAired = date - timeNow() < 0;
      let airedBy = '';

      if( isAired ){
         airedBy = `- ${ Math.ceil(delta / 86400) } days`;
         if(Math.ceil(delta / 86400) > 30){
            airedBy = 'aired';
         }
      }else {
         airedBy = 'not aired';
      }

      return airedBy;
   }

   createPanelRows(){
      const season = this.props.data.slice(1);

      const rows = season.map((episode, i) =>
         <div className={'panel-row' + (!episode.watched ? ' disabled' : '') } key={ i } >
            <div className="col-35">
               <span className="aired-by"><i className="dripicons-feed"></i> { this.aired(episode.airDate) }</span>
            </div>

            <div className="col-45">
               Episode { episode.number }
            </div>

            <div className="col-20">
               <span className={ 'dripicons-preview' + (episode.watched ? ' active' : '') }></span>
            </div>
         </div>
      );

      return rows;
   }

   render() {
      return (
         <div>{ this.createPanelRows() }</div>
      );
   }
}

export default PanelRow;
