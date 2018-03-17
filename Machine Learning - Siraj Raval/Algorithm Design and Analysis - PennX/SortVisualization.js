var canvas;
var ctx;
var array;
var size = 100;
window.onload = function() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  array = new Array();
  for(var x=0;x<size;x++){
    rand = Math.floor((Math.random() * size) + 1);
    if(array.includes(rand)){
      while(array.includes(rand)){
        rand = Math.floor((Math.random() * size) + 1);
      }
    }
    array.push(rand);
  }
  ctx.save();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.stroke();
  ctx.restore();
  for(var x=0;x<size;x++){
    ctx.save();
      ctx.fillStyle = 'rgb('+(array[x]+230)+', '+(array[x]*2)+','+(array[x])+')';
      ctx.fillRect(
        x*canvas.width/size,
        canvas.height-2,
        Math.floor((canvas.width/size)-2),
        -Math.floor((array[x]/size)*canvas.height));
      ctx.stroke();
    ctx.restore();
  }
  console.log(array);
};
