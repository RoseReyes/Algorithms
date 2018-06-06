
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