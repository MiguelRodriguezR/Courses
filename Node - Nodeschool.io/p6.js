const p6lib = require('./p6lib');
p6lib(process.argv[2],process.argv[3],(err,data)=>{
  if(err)
    console.log(err);
  data.forEach((c)=>{
    console.log(c);
  });
});
