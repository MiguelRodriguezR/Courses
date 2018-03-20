var http = require('http');
var map = require('through2-map');
uc = map((chunk)=>{
  return chunk.toString().toUpperCase();
});
server = http.createServer((req, res)=>{
  if (req.method !== 'POST') {
       return res.end('send me a POST\n')
  }
  if (req.method == 'POST'){
    req.pipe(uc).pipe(res);
  }
});
server.listen(process.argv[2]);
