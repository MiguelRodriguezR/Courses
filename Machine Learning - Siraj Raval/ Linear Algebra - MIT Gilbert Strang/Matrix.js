class Matrix {

  constructor(rows,cols) {
    this.matrix = new Array();
    this.cols = cols;
    this.rows = rows;
  }
  fillPos(row,col,dat){
    var aux = this.matrix[row]
    aux[col]=dat;
  }
  fill(args){

    for (var j = 1; j < this.rows+1; j++) {
      //
      var row = new Array()
      for (var i = 0; i < this.cols; i++) {
        //
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
  getPos(row,col){
      var aux = this.matrix[row]
      return aux[col];
  }
}

// matrix = new Matrix(5,8);
// matrix.fill();
// matrix.getMatrix();
// matrix.getPos(1,3);
