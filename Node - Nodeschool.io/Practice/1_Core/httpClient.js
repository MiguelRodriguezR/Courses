'use strict';

const http = require('http'),
	options = {
		host : 'www.google.com',
		port : 80,
		path : '/'
	};

http
	.get( options, res => console.log(`Site ${options.host}  Code: ${res.statusCode}`) )
	.on( 'error', err => console.log(`Site ${options.host}  Code: ${err.code}. Error: ${err.message}`) );
