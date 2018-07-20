function retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude)
{
    //Split the string 
    var words = literatureText.split(" ");
    var dict = [];
    var wordstoExclude = ["is", "are", "a"];
    var count = 0;
    
    //Loop through the string 
    for(var x = 0; x <= words.length - 1; x++){
        //check whether the wordstoexclude elements exists in the string
        var n = wordstoExclude.includes(words[x]);
        //check if words is not in the wordstoExclude array then count 
        if(n == false){
            count++;
            //loop through the dictionary
            for(var key in dict) {
                console.log(dict[key]);
                //check if the word already exists, if yes then just update the count
                if(key == words[x]){
                    dict[key] = count;
                    console.log(dict[key]);
                }
                //else push the words and its count
                dict.push({key: words[x],value: count}); 
            } 
        }
    }
    return dict;
}
var a = retrieveMostFrequentlyUsedWords("Rose is a flower red rose are flower", ["is", "are", "a"])
console.log(a);