function printNum(){
    for(var idx=1; idx <= 255; idx++){
        console.log(idx);
    }
}

function printOdd(){
    for(var idx=1; idx <= 255; idx + 2){
        if(idx % 2 != 0){
            console.log(idx);
        }
    }
}

function printSumOdd(){
    var sum = 0;
    for(var idx=1; idx < 5000; idx + 2){
        sum += idx;
    }
    console.log(sum);
}


function iterateArray(arr) {
    for(var idx=0; idx <= arr.length; idx++){
        console.log(arr[idx]);
    }
}
 
function findMaxNum(arr) {
    var max = 0;
    for(var idx=0; idx <= arr.length; idx++){
        if(arr[idx] > max){
            max = arr[idx];
        }
    } 
    return max;
}
//var m = findMaxNum([-3, 3, 5, 7]);
//console.log(m);


function findAverage(arr) {
    var sum = 0;
    var average = 0;

    for(var idx=0; idx < arr.length; idx++){
        sum += arr[idx];
    }
    return average = (sum / arr.length);
}
//var x = findAverage([1,3,5,7,20]);

function createArr(arr) {
    var y = [];
    for(var idx=1; idx <= 255; idx++){
        if(idx % 2 != 0){
            y.push(idx);
        }
    }
    return y;
}
//var a = createArr();
//console.log(a);

function addToFrontArr(arr) {
    var num = 0;
    while(num < arr.length){
        arr[num] = arr[num+1];
        num++;
    }
    arr[num -1] = 0;
    return arr; 
}
//var y = addToFrontArr([1,5,10,7,2]);
//console.log(y);

function randArr() {
    var arr = [];
    for(var idx=0; idx <= 10; idx++){
        let randNumber =  Math.floor((Math.random()* 100) + 0);
         arr.push(randNumber);
    }
    return arr;
}
// var r = randArr();
// console.log(r);

function swapTwoValues(arr) {
    var temp =0;
    var num = 0;
    temp = arr[num];
    arr[num] = arr[arr.length - 1] 
    arr[arr.length - 1] = temp;
    return arr;
}
// var s = swapTwoValues([2, 3, 5, 7, 6]);
// console.log(s);

function reverseArr(arr) {
    var temp =0;
   for(var idx=0; idx < arr.length/2; idx++){
      temp = arr[idx];
      arr[idx] = arr[arr.length - 1 - idx];
      arr[arr.length-1 - idx] = temp;
    }
    return arr; 
}
// var r = reverseArr([-3,5,1,3,2,10]);
// console.log(r);


function Anagram(strOne, strTwo) {
    var newStr ="";
    if(strTwo.length > strOne.length){
        return false;
    }
    else {
        for(var x=0; x < strOne.length; x++){
            var currAnagram = strOne[x];
            console.log(currAnagram);
            for(var y=0; y <strTwo.length; y++){
                if(strOne.length != newStr.length){
                    if(strTwo[y] == currAnagram){
                        newStr += strTwo[y];
                        console.log(newStr.length, strOne.length);
                    }
                }
                else {
                    return true;
                }
            }
        }
    }
    return true;
}
var x = Anagram("abcde", "cdbaefg");
console.log(x);

