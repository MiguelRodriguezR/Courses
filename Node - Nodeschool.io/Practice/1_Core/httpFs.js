const http = require('http').createServer(webServer);
const fs = require('fs');

function webServer(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.readFile('./httpStream.html',(err,data)=>(err)?console.log(err.message):res.end(data));
}

http.listen(3000,'localhost',()=>{
      console.log("server at localhost:3000");
    });
