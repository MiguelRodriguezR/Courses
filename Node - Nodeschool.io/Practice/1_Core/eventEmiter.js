'use strict';

const EventEmitter = require('events').EventEmitter,
	ee = new EventEmitter();

ee.on( 'myevent', message => console.log(message) );
ee.once( 'myevent', message => console.log(`Emit just once: ${message}`) );

ee.emit('myevent', 'Emiter');
ee.emit('myevent', 'Emit again');
ee.removeAllListeners('myevent');
ee.emit('myevent', 'Emit again once more');
