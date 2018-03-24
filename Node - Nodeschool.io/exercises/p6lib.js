var fs = require('fs');
const path = require('path');
module.exports = function(dir,ext,callback){
  fs.readdir(dir,(err,data)=>{
    if(err)
      return callback(err);
    retr = [];
    data.forEach((c)=>{
      if(path.extname(c)=="."+ext)
        retr.push(c);
    });
  callback(null,retr);
  });
}
