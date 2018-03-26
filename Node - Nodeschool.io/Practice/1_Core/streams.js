'use strict';
const fs = require('fs');
let readStream = fs.createReadStream('./streams.txt'),
    writeStream = fs.createWriteStream('./streamsCopy.txt');

readStream.pipe(writeStream);

readStream.on('data',chunk=>{
  console.log(chunk);
  console.log(chunk.toString());
  console.log(chunk.length);
}).on('end',()=>console.log('Finish reading file')
).on('error',()=>console.log(error.message));
