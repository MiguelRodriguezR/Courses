'use strict';

let buf = new Buffer(26);

console.log(buf,buf.length,buf.toString());

for (let i=0; i<buf.length; i++){
  buf[i]=i+97;
}

console.log("================");
console.log(buf,buf.toString());
