var fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2],(err,data)=>{
  if(err)
    console.log(err);
  data.forEach((c,i,a)=>{
    if(path.extname(c)=="."+process.argv[3])
      console.log(c);
  })
});
// ACTUAL                                 EXPECTED
// ────────────────────────────────────────────────────────────────────────────────
//
// "CHANGELOG.md"                      ==    "CHANGELOG.md"
// "LICENCE.md"                        ==    "LICENCE.md"
// "README.md"                         ==    "README.md"
// ""                                  ==    ""
//
//
// ────────────────────────────────────────────────────────────────────────────────
