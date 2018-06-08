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
var b = bubbleSort([33,55,4,19,5,7]);
console.log(b);



