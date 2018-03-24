var http = require('http');
http.get(process.argv[2],(res)=>{
 res.setEncoding("utf8");
 res.on("data",(data)=>{
   console.log(data);
 });
});
// ACTUAL                                 EXPECTED
// ────────────────────────────────────────────────────────────────────────────────
//
// "Pot"                               ==    "Pot"
//
// "Waratah"                           ==    "Waratah"
// "Slaps"                             ==    "Slaps"
// "Sickie"                            ==    "Sickie"
// "Boardies"                          ==    "Boardies"
// "Trackies"                          ==    "Trackies"
// "Relo"                              ==    "Relo"
// "Galah"                             ==    "Galah"
// "Jumbuck"                           ==    "Jumbuck"
// "Chuck a yewy"                      ==    "Chuck a yewy"
// ""                                  ==    ""
//
// ────────────────────────────────────────────────────────────────────────────────
