const net = require('net');
function z(i){
  return (i < 10 ? '0' : '') + i
}
var server = net.createServer((socket)=>{
  date = new Date();
  socket.write(
    z(date.getFullYear())+
    "-"+(z(date.getMonth()+1))+
    "-"+z(date.getDate())+
    " "+z(date.getHours())+
    ":"+z(date.getMinutes())+"\n"
  );
  socket.end("");
})
server.listen(process.argv[2]);
