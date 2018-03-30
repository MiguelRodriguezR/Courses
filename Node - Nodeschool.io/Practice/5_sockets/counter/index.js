'use strict';

const http = require('http').createServer(server);
const fs = require('fs');
const io = require('socket.io')(http);

let connections = 0;

function server(req,res) {
  fs.readFile('index.html',(err,data)=>{
    if(err){
        res.writeHead(500,{'Content-Type':'text/html'});
        return res.end('error 500');
    }else {
      res.writeHead(200,{'Content-Type':'text/html'});
      return res.end(data,'utf-8');
    }
  });
}
http.listen(3000,()=>console.log('server at localhost:3000'));

io.on('connection',(socket)=>{
  socket.emit('hello',{
    message:'Hey how you doing?'
  });
  socket.on('oev',data=>console.log(data));

  connections+=1;
  console.log(connections);
  socket.emit('conUsers',{number:connections});
  socket.broadcast.emit('conUsers',{number:connections});

  socket.on('disconnect',()=>{
    connections-=1;
    socket.broadcast.emit('conUsers',{number:connections});
  })
});
