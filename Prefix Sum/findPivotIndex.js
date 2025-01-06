/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let totalSum = nums.reduce((sum, a) => sum + a, 0)
    let currentSum = 0
    for(let i=0; i<nums.length; i++) {
        if(currentSum === (totalSum - currentSum - nums[i])) return i
        currentSum += nums[i]
    }

    return -1
};