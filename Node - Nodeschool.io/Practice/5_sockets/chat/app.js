'use strict';

const express = require('express'),
	app = express(),
	http = require('http').createServer(app),
	io = require('socket.io')(http),
	port = process.env.PORT || 3000,
	publicDir = express.static(`${__dirname}/public`);

app.use(publicDir)
   .get('/',(req,res)=>res.sendFile(publicDir+'/index.html'));

http.listen(port,()=>console.log("server running at localhost:%d",port));

io.on('connection',(socket)=>{

  socket.broadcast.emit('newUser',{
    message:'New User'
  });

  socket.on('newMessage',(message)=>{
    socket.emit('someoneSays',message);
    socket.broadcast.emit('someoneSays',message);
  });

  socket.on('disconnect',()=>{
    socket.broadcast.emit('byeUser',{
      message:'User Gone'
    });
  });

})
