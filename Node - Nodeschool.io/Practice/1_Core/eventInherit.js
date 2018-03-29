'use strict';

const EventEmitter = require('events').EventEmitter;
const inherits = require('util').inherits;

function Clock() {
  setInterval(()=>this.emit('tictac'),1000);
}

inherits(Clock,EventEmitter);

Clock.prototype.timet = function () {
  let date = new Date();
  let hour = date.toLocaleTimeString();
  console.log(hour);
};

let clock = new Clock();
clock.on('tictac',()=>{
  clock.timet();
});
