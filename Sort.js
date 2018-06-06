function findSmallest(arr){
    var smallest = arr[0];
    var smallest_index = 0;
    for (var idx=0; idx < arr.length; idx++){
        if(arr[idx] < smallest){
            smallest = arr[idx];
            smallest_index = idx;
        }
    }
    return smallest_index;
}
var y = findSmallest([5,2,3,4,1]);
console.log(y);

function selectionSort(arr){
    var newArr =[];
    for(var j=0; j < arr.length; j++){
        smallest = findSmallest(arr);
        newArr.push(arr.pop(smallest))
    }
    return newArr;
}
var x = selectionSort([5,2,3,4,1]);
console.log(x);

function sSort(arr){
    for(var i =0; i < arr.length; i++){
        let min = arr[i];
        for (var j=i; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                minidx = j;
            }
        }
        let temp = arr[i];
        arr[i] = min;
        arr[minidx] = temp;
    }
    return arr;
}

var z = sSort([89,4,9,100,3]);
console.log(z);