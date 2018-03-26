const http = require('http').createServer();

function webServer(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end("<h1>Hey</h1>");
}

http.on('request',webServer)
    .on('error',err => console.log(err,message))
    .listen(3000,'localhost',()=>{
      console.log("server at localhost:3000");
    });
