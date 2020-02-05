var is_safe = function(pintext, black_phrases)
{
  
var textToScreen = pintext.split(/[\s,]+/);
   var blackPhrases = black_phrases.toString();
   var splitBlackPhrases = blackPhrases.split(/[\s,]+/); 
   var test= null;

  for(var blackPhrase = 0; blackPhrase < splitBlackPhrases.length; blackPhrase++)
  {
    for(var wordScreen = 0; wordScreen < textToScreen.length; wordScreen++)
      {
        
        if(textToScreen[wordScreen] === splitBlackPhrases[blackPhrase])
        {
           test = "unsafe";
           return test;
        }
      }
  }
  test = "safe"
  return test;
}


console.log(is_safe("Click here for free ray bans", ["machine guns",
  "free ray bans",
  "pornography",
  "world war i",
  "world war ii"])); // will only pass if there is no exact word in the black phrases
  // TO DO make sure that every word in the blackPhrases has  been screened.