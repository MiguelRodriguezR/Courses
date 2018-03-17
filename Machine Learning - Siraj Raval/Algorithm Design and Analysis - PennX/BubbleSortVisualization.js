var canvas;
var ctx;
var array;
var size = 100;
var type;
window.onload = function() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  randomize();
  graph(array);
  console.log(array);
};

function randomize(){
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
}

function graph(arr){
  ctx.save();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.stroke();
  ctx.restore();
  for(var x=0;x<size;x++){
    ctx.save();
      ctx.fillStyle = 'rgb('+(arr[x]+230)+', '+(arr[x]*2)+','+(arr[x])+')';
      ctx.fillRect(
        x*canvas.width/size,
        canvas.height-2,
        Math.floor((canvas.width/size)-2),
        -Math.floor((arr[x]/size)*canvas.height));
      ctx.stroke();
    ctx.restore();
  }
}

function sort() {
  type = document.getElementById('sortType').value;
  console.log(type);
  if(type == 1){
    bubbleSort(array);
  }
  else if(type == 2){
    mergeSort(array);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



// function merge(leftArr, rightArr) {
//   var sortedArr = [];
//
//   while (leftArr.length && rightArr.length) {
//
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr[0]);
//       leftArr = leftArr.slice(1)
//      }else {
//        sortedArr.push(rightArr[0]);
//        rightArr = rightArr.slice(1)
//       }
//   }
//   while (leftArr.length){
//     sortedArr.push(leftArr.shift());
//   }
//   while (rightArr.length){
//     sortedArr.push(rightArr.shift());
//   }
//
//   return array = sortedArr;
// }


// function mergeSort(arr) {
//   //await sleep(0);
//   graph(array);
//   if (arr.length < 2) {
//     return arr; }
//   else {
//     var midpoint = parseInt(arr.length / 2);
//     var leftArr   = arr.slice(0, midpoint);
//     var rightArr  = arr.slice(midpoint, arr.length);
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
//   }
// }

async function bubbleSort(arr){
  var sorted = false

  while (!sorted){
    await sleep(100);
    sorted = true;
    arr.forEach(function (element, index, arrayt){
      graph(array);
      if (element > arrayt[index+1]) {
        arrayt[index] = arrayt[index+1];
        arrayt[index+1] = element;

        sorted = false;
      }
    });
  }
}

function reset() {
  sizet = document.getElementById("size").value;
  if(sizet != 0){
    size = sizet;
  }
  randomize();
  graph(array);
}
