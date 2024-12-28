/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a, b) => a + b, 0)
    if((sum+target)%2 === 1 || target > sum) return 0
    const halfSum = (sum + target)/2

    const dp = Array(halfSum + 1).fill(0)
    dp[0] = 1

    for(const num of nums) {
        for(let j=halfSum; j>=num; j--) {
            dp[j] += dp[j - num]
        }
    }

    return dp[halfSum]
};