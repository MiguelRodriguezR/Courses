var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var vectorV;
class VisualVector {
    constructor(canvas, ctx, size, rand = true) {
        this.colorCompare = "rgb(0,255,0)";
        this.colorChange = "rgb(0,0,255)";
        this.sleepTime = 20;
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = size;
        if (rand = true)
            this.randomize();
        this.drawVector();
        this.steps = [];
    }
    randomize() {
        var array = [];
        var rand;
        for (let x = 0; x < this.size; x++) {
            rand = Math.floor((Math.random() * this.size) + 1);
            if (array.includes(rand)) {
                while (array.includes(rand)) {
                    rand = Math.floor((Math.random() * this.size) + 1);
                }
            }
            array.push(rand);
        }
        this.vector = array;
    }
    compare(arr, x1, x2) {
        this.drawVector([x1, x2], [], arr);
    }
    change(arr, x1, x2) {
        this.drawVector([], [x1, x2], arr);
    }
    _run() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.steps.length > 0) {
                yield this.sleep(this.sleepTime);
                this._step();
            }
        });
    }
    addStep(method, array, x1, x2) {
        this.steps.push([method, array, x1, x2]);
    }
    _step() {
        let x = this.steps.shift();
        if (x[0] == "compare") {
            this.compare(x[1], x[2], x[3]);
        }
        else if (x[0] == "change") {
            this.change(x[1], x[2], x[3]);
        }
    }
    drawVector(compared = [], changer = [], vec = this.vector) {
        this.ctx.save();
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.stroke();
        this.ctx.restore();
        for (var x = 0; x < this.size; x++) {
            this.ctx.save();
            if (compared.includes(vec[x]))
                this.ctx.fillStyle = this.colorCompare;
            else if (changer.includes(vec[x]))
                this.ctx.fillStyle = this.colorChange;
            else
                this.ctx.fillStyle = 'rgb(' + (vec[x] + 230) + ', ' + (vec[x] * 2) + ',' + (vec[x]) + ')';
            this.ctx.fillRect(x * this.canvas.width / this.size, this.canvas.height - 2, Math.floor((this.canvas.width / this.size) - 2), -Math.floor((vec[x] / this.size) * this.canvas.height));
            this.ctx.stroke();
            this.ctx.restore();
        }
    }
    bubbleSort() {
        var sorted = false;
        while (!sorted) {
            sorted = true;
            for (var x = 0; x < this.size; x++) {
                let element = this.vector[x];
                let index = x;
                let arrayt = this.vector;
                let newA = arrayt.slice();
                vectorV.addStep("compare", newA, element, arrayt[index + 1]);
                if (element > arrayt[index + 1]) {
                    vectorV.addStep("change", newA, arrayt[index], arrayt[index + 1]);
                    arrayt[index] = arrayt[index + 1];
                    vectorV.addStep("change", newA, arrayt[index], arrayt[index + 1]);
                    arrayt[index + 1] = element;
                    sorted = false;
                }
            }
        }
        this._run();
    }
    mergeSortr() {
        this.vector = this.mergeSort(this.vector);
        this._run();
    }
    mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        else {
            var midpoint = Math.floor(arr.length / 2);
            var leftArr = arr.slice(0, midpoint);
            var rightArr = arr.slice(midpoint, arr.length);
            return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
        }
    }
    merge(leftArr, rightArr) {
        var sortedArr = [];
        while (leftArr.length && rightArr.length) {
            vectorV.addStep("compare", sortedArr, leftArr[0], rightArr[0]);
            if (leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr[0]);
                leftArr = leftArr.slice(1);
            }
            else {
                sortedArr.push(rightArr[0]);
                rightArr = rightArr.slice(1);
            }
        }
        while (leftArr.length) {
            sortedArr.push(leftArr.shift());
        }
        while (rightArr.length) {
            sortedArr.push(rightArr.shift());
        }
        return sortedArr;
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    vectorV = new VisualVector(canvas, ctx, 100);
};
function sort() {
    let type = document.getElementById('sortType');
    // let timeT = <HTMLInputElement>document.getElementById('sleep');
    // vectorV.sleepTime=timeT;
    let value = type.value;
    if (value == "1") {
        vectorV.bubbleSort();
    }
    else if (value == "2") {
        vectorV.mergeSortr();
    }
}
function reset() {
    let sizete = document.getElementById("size");
    let sizet = sizete.value;
    if (sizet != "0") {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext("2d");
        vectorV = new VisualVector(canvas, ctx, sizet);
    }
}
