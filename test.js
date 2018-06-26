function findCentury(num) {
    var digits = (""+num).split("");
    for(var x = digits.length-1; x >= 0; x--){
        console.log(digits[x], digits[x-1]);
    //    if(digits[x] && digits[x+1] === 0){
    //        return true;
    //    }
    } 
}
findCentury(1900);


