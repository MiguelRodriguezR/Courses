var result = 0
process.argv.forEach((c,i,a)=>{
  if(i>1)result+=Number(c);
});
console.log(result)
// ACTUAL                                 EXPECTED
// ────────────────────────────────────────────────────────────────────────────────
//
// "58"                                ==    "58"
// ""                                  ==    ""
//
// ────────────────────────────────────────────────────────────────────────────────
