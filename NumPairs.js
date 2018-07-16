function Pairs(arr1, arr2){
    var CurrMin  = 0;
    var FinalArray = [];
    var FirstPairNum = 0;
    var SecNumPair = 0;
   

    for(let x = 0; x < arr1.length - 1; x++){
             var FirstNum = arr1[x];
            for(let y = x + 1; y < arr2.length - 1; y++){

                var SecondNum = arr2[y];
                Sum = arr1[x] + arr2[y];
                
                if(CurrMin < Sum){
                    CurrMin = Sum;
                    FinalArray.push(FirstNum);
                    FinalArray.push(SecondNum);
                }            
            }
    }
    return FinalArray;
}
var x = Pairs([1,7,11], [2,4,6]);
console.log(x);