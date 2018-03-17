var vectorV;


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


class VisualVector{

  vector:Array<number>;
  colorCompare="rgb(0,255,0)";
  colorChange="rgb(0,0,255)";
  size:number;
  canvas:HTMLCanvasElement;
  ctx:CanvasRenderingContext2D;
  sleepTime = 20;
  steps:Array<any>;

  constructor(canvas,ctx,size,rand=true){
    this.canvas = canvas;
    this.ctx = ctx;
    this.size = size;
    if(rand=true)this.randomize();
    this.drawVector();
    this.steps =[];
  }

   public randomize(){
     var array:Array<number>=[];
     var rand;
     for(let x=0;x<this.size;x++){
       rand = Math.floor((Math.random() * this.size) + 1);
       if(array.includes(rand)){
          while(array.includes(rand)){
            rand = Math.floor((Math.random() * this.size) + 1);
          }
        }
        array.push(rand);
      }
      this.vector = array;
    }

    public compare(arr,x1,x2){
      this.drawVector([x1,x2],[],arr);
    }

    public change(arr,x1,x2){
      this.drawVector([],[x1,x2],arr);
    }

    private async _run(){
      while(this.steps.length>0){
        await this.sleep(this.sleepTime);
        this._step();
      }
    }

    public addStep(method,array,x1,x2){
      this.steps.push([method,array,x1,x2]);
    }

    private _step(){
        let x = this.steps.shift();
        if(x[0]=="compare"){
          this.compare(x[1],x[2],x[3]);
        }
        else if(x[0]=="change"){
          this.change(x[1],x[2],x[3]);
        }
    }

    public drawVector(compared:Array<number>=[],changer:Array<number>=[],vec=this.vector){
      this.ctx.save();
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.stroke();
      this.ctx.restore();
      for(var x=0;x<this.size;x++){
        this.ctx.save();
          if(compared.includes(vec[x]))this.ctx.fillStyle =  this.colorCompare;
          else if(changer.includes(vec[x]))this.ctx.fillStyle =  this.colorChange;
          else this.ctx.fillStyle = 'rgb('+(vec[x]+230)+', '+(vec[x]*2)+','+(vec[x])+')';
          this.ctx.fillRect(
            x*this.canvas.width/this.size,
            this.canvas.height-2,
            Math.floor((this.canvas.width/this.size)-2),
            -Math.floor((vec[x]/this.size)*this.canvas.height));
          this.ctx.stroke();
        this.ctx.restore();
      }
    }

    public bubbleSort(){
      var sorted = false;
      while (!sorted){
        sorted = true;
        for(var x = 0;x<this.size;x++){
          let element=this.vector[x]
          let index = x;
          let arrayt = this.vector;
          let newA = arrayt.slice();
          vectorV.addStep("compare",newA,element,arrayt[index+1]);
          if (element > arrayt[index+1]) {
            vectorV.addStep("change",newA,arrayt[index],arrayt[index+1]);
            arrayt[index] = arrayt[index+1];
            vectorV.addStep("change",newA,arrayt[index],arrayt[index+1]);
            arrayt[index+1] = element;
            sorted = false;
          }
        }
      }
      this._run();
    }

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

}

window.onload = function() {
  let canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
  let ctx:CanvasRenderingContext2D = canvas.getContext("2d");
  vectorV = new VisualVector(canvas,ctx,100);

}

function sort() {
  let type = <HTMLInputElement>document.getElementById('sortType');
  // let timeT = <HTMLInputElement>document.getElementById('sleep');
  // vectorV.sleepTime=timeT;
  let value = type.value;
  if(value == "1"){
    vectorV.bubbleSort();
  }
  else if(value == "2"){
    //mergeSort(array);
  }
}

function reset() {
  let sizete = <HTMLInputElement>document.getElementById("size");
  let sizet = sizete.value
  if(sizet!="0"){
    let canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
    let ctx:CanvasRenderingContext2D = canvas.getContext("2d");
    vectorV = new VisualVector(canvas,ctx,sizet);
  }
}
