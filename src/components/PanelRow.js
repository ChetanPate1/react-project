import React, { Component } from 'react';
import { timeNow } from '../helperFunctions';

class PanelRow extends Component {
   constructor(props){
      super(props);

      this.state = { season: this.props.data };

      this.watched = this.watched.bind(this);
      this.aired = this.aired.bind(this);
      this.createPanelRows = this.createPanelRows.bind(this);
   }

   watched(key){
      const season = this.state.season;
      let valid = this.props.tabActive == season[0];

      if(!valid){
         return;
      }
      season[key].watched = !season[key].watched;

      this.setState({
         season: season
      });
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
      const season = this.state.season.slice(1);

      const rows = season.map((episode, i) =>
         <div className={'panel-row' + (!episode.watched ? ' disabled' : '') } key={ i } >
            <div className="col-35">
               <span className="aired-by"><i className="dripicons-feed"></i> { this.aired(episode.airDate) }</span>
            </div>

            <div className="col-45">
               Episode { episode.number }
            </div>

            <div className="col-20" onClick={ () => { this.watched(i + 1 ) } } >
               <span className={ 'dripicons-preview' + (episode.watched ? ' active' : '') } ></span>
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
