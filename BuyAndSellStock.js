
//take away: always find the maximum number to sell and backtrack to get the minimum number or buying price
pricesArr = [];
var maxProfit = function(pricesArr) {
    currentProfit = 0;
    
    if(pricesArr.length < 2)
    {
        console.log("Cannot perform transactions: prices are short for 2 days")
    }
    for(var x = 0; x < pricesArr.length; x++)
    {
        if(pricesArr[x] > pricesArr[x-1])
        {
            currentProfit += pricesArr[x] - pricesArr[x-1];
        }
    }
    return currentProfit;    
};

console.log(maxProfit([7,6,5,4,3,2,1]))