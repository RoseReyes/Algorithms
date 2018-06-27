function maxRepeat(str) {
    var count = 0;
    var maxChar = str[0];
   
    for (var i = 0; i < str.length; i++)
    {   
        var currCount = 1;
        
        for (var j = i + 1; j < str.length; j++)
        {
            if (str[i] != str[j]){
                break;
            }  
            currCount++;
        }
        if (currCount > count)
        {
            count = currCount;
            maxChar = str[i];
        }
    }
    return maxChar;
}
var x = maxRepeat("bbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
console.log(x);
