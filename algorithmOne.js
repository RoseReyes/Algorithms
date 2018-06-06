//Print 1 to 255
function printNum(){
    for(var idx=1; idx <= 255; idx++){
        console.log(idx);
    }
}
printNum();

function printOdd(){
    for(var idx=1; idx <= 1000; idx + 2){
        if(idx % 2 != 0){
            console.log(idx);
        }
    }
}
printOdd();

function addOdd(){
    var sum = 0;
    for(var idx=1; idx < 5000; idx + 2){
        sum += idx;
    }
    console.log(sum);
}
addOdd();

function linearSearch(num, arr){
    for(var idx=0; idx <= arr.length; idx++){
        if( idx === num){
            console.log(arr[idx]);
        }
    }
}
linearSearch(0, [4,5,1,2]);


