import React, { Component } from 'react';

class CountdownTimer extends Component {
   constructor(){
      super();
      this.state = {
         inSeconds: {
            now: function () {
               return new Date().getTime() / 1000;
            },
            day: 86400,
            hour: 3600,
            minute: 60
         },
         counter: { d: [], h: [], m: [], s: [] }
      };
   }

   componentDidMount() {
      this.countDown = setInterval(
         () => this.timer(this.props.to, this.state.inSeconds.now())
      , 1000);
   }

   componentWillUnmount() {
      clearInterval(this.countDown);
   }

   timer(futureDate, nowDateInSec) {
      let inSeconds = this.state.inSeconds;
      inSeconds.futureDate = futureDate / 1000;

      let delta = Math.abs(inSeconds.futureDate - nowDateInSec);
      if(inSeconds.futureDate - nowDateInSec < 0 || !inSeconds.futureDate){
         this.prettifyTime( [0, 0, 0, 0] );
      }

      let days = Math.floor(delta / inSeconds.day);
         delta -= days * inSeconds.day;
      let hours = Math.floor(delta / inSeconds.hour) % inSeconds.hour;
         delta -= hours * inSeconds.hour;
      let minutes = Math.floor(delta / inSeconds.minute) % inSeconds.hour;
         delta -= minutes * inSeconds.minute;
      let seconds = Math.floor(delta);

      this.prettifyTime( [days, hours, minutes, seconds] );
   }

   prettifyTime(time) {
      let prettifiedTime = {};
      let names = ['day', 'hour', 'min', 'sec'],  i = 0;

      for (i; i < 4; i++){
         let prop = names[i].charAt(0);
         prettifiedTime[prop] = {
            name: names[i],
            val: '0'+ time[i]
         };

         if (time[i] > 1 && time[i] < 10){
            prettifiedTime[prop] = { name: names[i] +'s', val: '0'+ time[i] };
         }
         if (time[i] > 9){
            prettifiedTime[prop] = { name: names[i] +'s', val: ''+ time[i] };
         }
      }

      this.setState({ counter: prettifiedTime });
   }

   render() {
      let counter = this.state.counter;

      return (
         <div className="countdown-timer">
            <span className="time">
               { counter.d.val } <i>{ counter.d.name }</i>
            </span>
            <div className="time">
               { counter.h.val } <i>{ counter.h.name }</i>
            </div>
            <div className="time">
               { counter.m.val } <i>{ counter.m.name }</i>
            </div>
            <div className="time">
               { counter.s.val } <i>{ counter.s.name }</i>
            </div>
         </div>
      );
   }
}

export default CountdownTimer;
