/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length === 1) return 0
    
    let count = 0
    let maxReach = 0
    let end = 0;
    for(let i=0; i<nums.length-1; i++) {
        maxReach = Math.max(maxReach, i + nums[i])

        if(i === end) {
            count++
            end = maxReach
        }

        if(end >= nums.length - 1) return count
    }
};