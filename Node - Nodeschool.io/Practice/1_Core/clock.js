'use strict';



class Clock{

  constructor(){
    setInterval(()=>this.timet(),1000);
  };

  timet() {
    let date = new Date();
    let hour = date.toLocaleTimeString();
    return console.log(hour);
  };

}

//let clock = new Clock();

module.exports = Clock;
