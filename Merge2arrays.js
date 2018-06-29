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


function checkSum(arr) {
  var temp = 0, y = 0;
 for(var x =0; x < arr.length; x++){
      y = x + 1;
    while( y < arr.length){
      if(arr[y] < 0) {
          temp = arr[y];
          arr[y] = arr[y-1];
          arr[y-1] = temp;
      }
      y++;
    }
}
  return arr;
}
 var x = checkSum([4,-3,2,-5,5,-1,3,-5,6,-10,12,-24]);
 console.log(x);


