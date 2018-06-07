function linearSearch(num, arr){
    for(var idx=0; idx <= arr.length; idx++){
        if( idx === num){
            console.log(arr[idx]);
        }
    }
}
linearSearch(0, [4,5,1,2]);

function iBS(arr, num){
    var min = 0;
    var max = arr.length - 1;
    console.log(max, min)
    while (min <= max) {
       let mid = Math.floor((min + max)/2);
       if (arr[mid] == num) {
            return mid;
       }
       else if (arr[mid] < num)  {
           min = mid + 1;
       }
       else {
           max = mid - 1;
        }
    }
    return false;
}

var x = iBS([-90,-19,0,2,12,29,33,190,320], 29);
console.log(x);
