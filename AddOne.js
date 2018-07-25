function addOne(arr){
    y = arr.length;
    var finalDigits = "";

    for(x = 0; x <= arr.length - 1; x++){
        if(y != arr[x]){
            finalDigits += arr[x];
        }
        else {
            if(y === arr[x] || x != arr.length -1){
                y = arr[x] + 1;
                finalDigits += y;
            }
        }
    }
    return finalDigits;
}
var a = addOne([1,2]);
console.log(a);






//get the lenght-1 of the array
//find that digit, if exists then add 1
//return concatenated string of array
