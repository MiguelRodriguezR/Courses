const http = require('http');
http.get(process.argv[2],(res)=>{
 var result = ""
 res.setEncoding("utf8");
 res.on("data",(data)=>{
   result+=data;
 });
 res.on("end",()=>{
    console.log(result.length);
    console.log(result);
  });
});
