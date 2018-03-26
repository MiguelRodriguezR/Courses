const http = require('http');

function webServer(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end("<h1>Hey</h1>");
}

http.createServer(webServer).listen(3000,'localhost',()=>{
  console.log("server at localhost:3000");
});
