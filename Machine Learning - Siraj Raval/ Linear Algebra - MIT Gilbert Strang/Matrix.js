class Matrix {

  constructor(cols,rows) {
    this.matrix = new Array();
    this.cols = cols;
    this.rows = rows;
  }

  fill(args){

    for (var j = 1; j < this.rows+1; j++) {
      console.log(this.rows);
      var row = new Array()
      for (var i = 0; i < this.cols; i++) {
        //console.log(arguments[i]);
        if(((j*this.cols)-(this.cols-i))<arguments.length){
          row.push(arguments[((j*this.cols)-(this.cols-i))]);
        }
        else{
          row.push(0);
        }
      }
      //console.log(row);
      this.matrix.push(row);
    }
  }

  getMatrix(){
    return this.matrix
  }
}

matrix = new Matrix(3,3);
matrix.fill(1,2,3,4);
matrix.getMatrix();
