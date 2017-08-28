var twoSum = function(nums, target) {
    let obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        if (typeof obj[target - nums[i]] === 'number') {
            // complement exists,
            return [obj[target - nums[i]], i];
        } else {
            // store in hashmap
            obj[nums[i]] = i;
        }
    }
    
    // return throw new Error("No two sum solution")
    
};

console.log(twoSum([3, 3], 6))