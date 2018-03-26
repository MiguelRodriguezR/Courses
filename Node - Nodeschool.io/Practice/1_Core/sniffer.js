'use strict';

const http = require('http'),
	options = {
		host : 'www.google.com',
		port : 80,
		path : ''
	};

let htmlCode = '';

function httpClient(res) {
	console.log(`Site ${options.host} Code: ${res.statusCode}`);
	res.on('data', data => {
		htmlCode += data;
		console.log( data, data.toString() );
	});
}

function httpError(err) {
	console.log(`Site ${options.host} Code: ${err.code}. Error: ${err.message}`);
}

function webServer(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end(htmlCode);
}

//instance client HTTP
http
	.get(options, httpClient)
	.on('error', httpError);

//instance server HTTP
http
	.createServer(webServer)
	.listen( 3000, 'localhost', () => console.log('server at http://localhost:3000/') );
