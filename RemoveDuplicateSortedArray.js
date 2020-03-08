// NOT REALLY REMOVING BUT COUNTING THE UNIQUE ELEMENTS IN THE ARRAY
arrayIntegers = [];

var removeDuplicates = function(nums) {
    
    if (nums.length == 0) {
        return 0;
    }
    var slowPointer = 0;
    for(var fastPointer = 1; fastPointer < nums.length; fastPointer++)
    {
        if(nums[fastPointer] !== nums[slowPointer])
        {
            slowPointer++;
            nums[slowPointer] = nums[fastPointer];
        }
    }
    return slowPointer + 1;
    
};
console.log("Test 1:" );
console.log(removeDuplicates([1,1,2,2,4]));
console.log("Test 2:");
console.log(removeDuplicates([1,1,1,2,3,3]));
console.log("Test 3: DUPLICATES > 3");
console.log(removeDuplicates([0,0,1,1,1]));

