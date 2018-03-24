var http = require('http')
var results = []
var count = 0

function printResults () {
  results.forEach((e)=>{
    console.log(e)
  })
}

function httpGet (index) {
  http.get(process.argv[2+index],(res)=>{
   var result = ""
   res.setEncoding("utf8");
   res.on("data",(data)=>{
     result+=data;
   });
   res.on("end",()=>{
      results[index]=result;
      count++;
      if(count === 3){
        printResults()
      }
    });
  });
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
