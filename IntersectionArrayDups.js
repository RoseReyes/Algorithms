// create a dictionary 
// add the key (num from first array) and values (frequency)

var intersect = function(nums1, nums2) {
        let answer = []
        let map = {}

        for(let item of nums1.length < nums2.length ? nums1 : nums2){
            console.log(map[item]);

            if(!map[item])
            {
                map[item] = 1;
                console.log(map);
            } 
            else
            {
                map[item]++;
            }
        }

        for(let item of nums2.length > nums1.length ? nums2 : nums1 ){
            if(map[item] && map[item] > 0)
            {
                answer.push(item);
                map[item]--;
            }
        }
        console.log(answer);
        return answer
};

var c = intersect([4,9,5], [9,4,9,8,4]);
console.log(c);