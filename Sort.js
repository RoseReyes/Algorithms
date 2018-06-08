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
var c = sSort([3, 44, 38, 5, 47, 15]);
console.log(c);



