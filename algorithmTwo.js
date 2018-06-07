function linearSearch(num, arr){
    for(var idx=0; idx <= arr.length; idx++){
        if( idx === num){
            console.log(arr[idx]);
        }
    }
}
linearSearch(0, [4,5,1,2]);

function iBS(arr, num){

    var low = 0;
    var high = arr.length - 1;
    console.log(high, low)
    while (low <= high) {
       let mid = Math.floor((low + high)/2);
       if (arr[mid] == num) {
            return mid;
       }
       else if (arr[mid] < num)  {
           low = mid + 1;
       }
       else {
           high = mid - 1;
        }
    }
    return -1;
}

var x = iBS([-90,-19,0,2,12,29,33,190,320], 29);
console.log(x);
