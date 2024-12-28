/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    
    const dp = Array(nums.length).fill(1)
    const count = Array(nums.length).fill(1)
    let maxLength = 1
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<i; j++) {
            if(nums[i] > nums[j]) {
                if(dp[j]+1 > dp[i]) {
                    dp[i] = dp[j] + 1
                    count[i] = count[j]
                }
                else if(dp[j]+1 === dp[i]) {
                    count[i] += count[j]
                }
            }
            maxLength = Math.max(maxLength, dp[i])
        }
    }

    let totalLIS = 0
    for(let i=0; i<nums.length; i++) {
        if(dp[i] === maxLength) totalLIS += count[i]
    }

    return totalLIS
};