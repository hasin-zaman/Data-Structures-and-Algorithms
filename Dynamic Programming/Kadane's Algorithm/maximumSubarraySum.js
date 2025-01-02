/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Kadane's Algorithm
    let currentSum = nums[0], maxSum = nums[0]
    for(let i=1; i<nums.length; i++) {
        currentSum = Math.max(currentSum + nums[i], nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
};