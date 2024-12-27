/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a+b, 0)
    if(sum%2 === 1) return false

    const target = sum/2
    const dp = Array(target + 1).fill(false)
    dp[0] = true

    for(let num of nums) {
        // Traverse backwards to prevent reusing the number
        for(let j=target; j>=num; j--) {
            // Update dp[j] to true if the current number is used 
            // and adds up to a valid subset sum
            dp[j] = dp[j] || dp[j - num]
        }
    }

    return dp[target]
};