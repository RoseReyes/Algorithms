//int[] A = {1,5,7,12,18,32}
//int[] B = {2,4,9,16,27,76,98}

function merge(arrLeft, arrRight){
    var result = [],l = 0,r = 0;

    while(l < arrLeft.length && r < arrRight.length){
       if(arrLeft[l] < arrRight[r]){
         result.push(arrLeft[l++]);
       }
       else{
         result.push(arrRight[r++]);
      }
    }  
    return result.concat(arrLeft.slice(l)).concat(arrRight.slice(r));
  }
  var x = merge([1,5,7,12,18,32],[2,4,9,16,27,76,98]);
  console.log(x);
