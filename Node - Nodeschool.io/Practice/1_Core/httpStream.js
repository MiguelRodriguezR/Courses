const http = require('http').createServer(webServer);
const fs = require('fs');
let index = fs.createReadStream('./httpStream.html')

function webServer(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  index.pipe(res);
}

http.listen(3000,'localhost',()=>{
      console.log("server at localhost:3000");
    });
