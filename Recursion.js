// // // //Factorial
// // // //Base case is when you exit the loop based on your condition 

function iFactorial(num){
    let multiplier = 1;
    while(num != 0){
        multiplier  *= num;
         num--;
    }
    return multiplier;
 }
    var m = iFactorial(5);
    console.log(m);

function rFactorial(num) {
   if(num == 1){
       return 1;
   }
   return rFactorial(num-1) * num;
}
var x = rFactorial(3);
console.log(x);

//Sigma
function rSigma(num) {
    if(num == 1){
        return 1;
    }
    return rSigma(num-1) + num;
 }
 var y = rSigma(3);
 console.log(y);

 //fibonacci
  function iFib(num){
      var odd = 1;
      var even = 1;
      
      if(num == 0 || num == 1){
          return num;
      }
      else {
        for(var idx =2; idx < num; idx++){
            if( idx % 2 == 0){
                odd += even;
            }
            else {
                even += odd;
            }
        }
            if(num % 2 == 1){
                return odd;
            }
            else {
                return even;
            }
        }
    }
    var x = iFib(0);
    console.log(x);

function rFib(num){
     if(num == 0 || num == 1){
         return num;
     }
     if(num == 2){
        return 1;
    }
     var Fnum = rFib(num - 1);
     var Snum = rFib(num - 2);
     return result = Fnum + Snum;
 }
var x = rFib(3);
console.log(x);


function iSum(num){
    let sum = 0;
    while(num != 0){
        sum += num;
        num--;
    } 
    console.log(sum); 
}
iSum(5);

function rSum(num){
    if(num == 1){
        return 1;
    }
    else {
        return rSum(num - 1) + num;
    }
}
var x = rSum(5);
console.log(x);


function iBS(arr, num){
    var start = 0;
    var end = arr.length-1;
   
    while( start <= end ){
        var mid = start + end / 2;
        if(arr[mid] ===  num){
            return true;
        }
        else if(arr[mid] > num){
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return false;
}
var bS = iBS([-90,-19,0,2,12], 12);
console.log(bS);


