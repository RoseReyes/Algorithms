function maxRepeat(str) {
    var count = 0;
    var maxChar = str[0];
   
    for (var x = 0; x < str.length; x++)
    {   
        var currCount = 1;
        
        for (var y = x + 1; y < str.length; y++)
        {
            if (str[x] != str[y]){
                break;
            }  
            currCount++;
        }
        if (currCount > count)
        {
            count = currCount;
            maxChar = str[x];
        }
    }
    
    return maxChar;
}

var x = maxRepeat("bbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
console.log(x);
