//bubble sort
//compare the 1st item to the second itwem , if 1st item is bigger then we swap them to the second
//until we reached the last element.

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

//Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.
//Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.
//thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.

function selectionSort(arr) {
    var temp, currMin;

    for(var x=0; x < arr.length; x++){
        currMinIdx = x;

        for(var y= x + 1; y < arr.length; y++){
            if(arr[y] < arr[currMinIdx]){
                currMinIdx = y;
            }
        }
        temp = arr[x];
        arr[x] = arr[currMinIdx];
        arr[currMinIdx] = temp;
    }
   return arr; 
}

//var c = selectionSort([3,44,5,38,9,100,6,8,0]);
//console.log(c);


function insertionSort(arr) {
    for(var x=1; x < arr.length; x++){ 
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

function mergeSort(arr){
    var len = arr.length;
    if(len < 2)
       return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left),mergeSort(right));
 }

 function merge(left, right){
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
       if(left[l] < right[r]){
         result.push(left[l++]);
       }
       else{
         result.push(right[r++]);
      }
    }  
    //remaining part needs to be address to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  }

  //var x = mergeSort([6,45,90,0,10,2,9,1,4,2]);
 // console.log(x);



//QuickSort
function quickSort(arr, left, right){
   var len = arr.length, pivot, partitionIndex;
 
   if(left < right){
     pivot = right;
     partitionIndex = partition(arr, pivot, left, right);
     
    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
   }
   return arr;
 }

//put all the small values on the left side of the pivot and the large values to the right
 function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot], partitionIndex = left;
 
    for(var i = left; i < right; i++){
     if(arr[i] < pivotValue){
       swap(arr, i, partitionIndex);
       partitionIndex++;
     }
   }
   swap(arr, right, partitionIndex);
   return partitionIndex;
 }

 //helper to swap 
 function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }

 //var q = quickSort([11,8,14,3,6,2,7],0,6); 
 //console.log(q);


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

// var x = new heap();
// console.log(x);
// // console.log(x.Add(9));
// // console.log(x.Add(15));
// // console.log(x.Add(20));
// // console.log(x.Add(1));
// // console.log(x.Add(3));
// // console.log(x.Add(7));
// // console.log(x.Add(-13));
// // console.log(x.Add(15));
// // console.log(x.Add(-20));
// // console.log(x.Add(25));

// console.log(x.Add(9));
// console.log(x.Add(6));
// console.log(x.Add(9));
// console.log(x.Add(-3));
// console.log(x.Add(7));

