//bubble sort

function bubbleSort(arr) {
    var temp = 0;
    for(var x=0; x < arr.length - 1; x++){
        for(var y =0; y < arr.length - 1 - x; y++){
            if(arr[y] > arr[y+1]){
                temp = arr[y];
                arr[y] = arr[y + 1];
                arr[y + 1] = temp;
            }
        }
    }
    return arr;
}
//var b = bubbleSort([33,55,4,19,5,7]);
//console.log(b);


function sSort(arr) {
    var temp =0;
    for(var x=0; x < arr.length; x++){
        var currMin = x;
        for(var y=1; y < arr.length; y++){
            if(arr[y] < arr[currMin]){
                currMin = y;
            }
            else {
                temp = arr[y];
                arr[y] = arr[currMin + 1];
                arr[currMin + 1] = temp;
            }
        }
    }
   return arr; 
}
//var c = sSort([3, 44, 38, 5, 47, 15]);
//console.log(c);


function insertionSort(arr) {
    for(var x=1; x < arr.length; x++){ // loop through the array
        var firstSortElement = arr[x]; // set the first sorted element in our sorted side of the array
        var y = x; 
       while(y > 0 && arr[y -1] > firstSortElement) { 
            arr[y] = arr[y - 1];
            y = y -1;
            arr[y] = firstSortElement;
        }
    }
   return arr; 
}
//var i = insertionSort([3,55,48,7,9, 200, 4, 10]);
//console.log(i);

function mergeSort(arr1, arr2){
    var newArr = arr1.concat(arr2);
    for(var x=0; x < newArr.length -1; x++){
        for(var y= 0; y < newArr.length -1 -x; y++){
            if(newArr[y] > newArr[y + 1]){
                let temp = newArr[y];
                newArr[y] = newArr[y+1];
                newArr[y+1] = temp;
            }
        }
    }
   return newArr;
}
//var m = mergeSort([3,44,38,5], [47,15,36,26]);
//console.log(m);


function heap(){
    this.arr = [0];
}

heap.prototype.Add = function(val) {

    var idx = this.arr.length;
    var parent = Math.floor(this.arr.length / 2);

    if(this.arr.length == 1){
        this.arr.push(val);
        return this.arr;
    }
    this.arr.push(val);
    while(this.arr[parent] > val && parent !== 0){
        let temp = this.arr[parent];
        this.arr[parent] = this.arr[idx];
        this.arr[idx] = temp;
        idx = parent;
        parent = Math.floor(parent / 2); 
    }
    return this.arr;
}

var x = new heap();
console.log(x);
// console.log(x.Add(9));
// console.log(x.Add(15));
// console.log(x.Add(20));
// console.log(x.Add(1));
// console.log(x.Add(3));
// console.log(x.Add(7));
// console.log(x.Add(-13));
// console.log(x.Add(15));
// console.log(x.Add(-20));
// console.log(x.Add(25));

console.log(x.Add(9));
console.log(x.Add(6));
console.log(x.Add(9));
console.log(x.Add(-3));
console.log(x.Add(7));


