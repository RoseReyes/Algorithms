function isSorted(unsortedArr)
{
    for(var sortArr = 0; sortArr < unsortedArr.length; sortArr++)
    {
        if(unsortedArr[sortArr] > unsortedArr[sortArr + 1])
        {
            var newSortedArr = unsortedArr.sort();
        }
        else {
            newSortedArr = unsortedArr;
        }
    }
    return newSortedArr;
}

var containDups = function(nums)
{
   
    var sortArr = isSorted(nums);
    var is_true = false;

    if (nums.length == 0) {
        return 0;
    }

    var slowPointer = 0;
    for(var fastPointer = 1; fastPointer < sortArr.length; fastPointer++)
    {
        if(sortArr[fastPointer] === sortArr[slowPointer])
        {
            slowPointer++;
            sortArr[slowPointer] = sortArr[fastPointer];
            is_true = true;
        }
        else {
            slowPointer++;
        }
    }
  
    return is_true;
}

console.log(containDups([1,2,3,4]));