var rotateArray = function(nums, k)
{
   if(nums.length > k)
   {
       nums.unshift( ...nums.splice(-k));

   } else {

       let iterateVal = 0;
       while (iterateVal < k)
       {
        let counterNum = 0;
        nums.unshift(nums.splice(-1));
        iterateVal++;
       }
   }
    return nums;
}

console.log(rotateArray([1,2,3,4,5,6,7],3));
console.log(rotateArray([-1,-100,3,99],2));

//unshift() add the elements of the array at the beginning
//splice() remove the elements of the array based on the index provided.
